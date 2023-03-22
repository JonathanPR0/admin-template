import { createContext, useEffect, useState } from "react"
import route from "next/router"
import Cookies from "js-cookie"
import User from "@/model/User"
import firebase from "../../firebase/config"

interface AuthContextProps {
  user?: User
  loading?: boolean
  login?: (email: string, password: string) => Promise<void>
  register?: (email: string, password: string) => Promise<void>
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function normalUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    name: firebaseUser.displayName,
    token,
    provider: firebaseUser.providerData[0].providerId,
    photoUrl: firebaseUser.photoURL
  }
}

function manageCookie(isLogged: boolean) {
  if (isLogged) {
    Cookies.set("admin-template-cod3r-auth", isLogged, { expires: 7 })
  } else {
    Cookies.remove("admin-template-cod3r-auth")
  }
}

export function AuthProvider(props) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  async function setupSession(firebaseUser: firebase.User) {
    if (firebaseUser?.email) {
      const userInSession = await normalUser(firebaseUser)
      setUser(userInSession)
      manageCookie(true)
      setLoading(false)
      return userInSession.email
    } else {
      setUser(null)
      manageCookie(false)
      setLoading(true)
      return false
    }
  }

  async function login(email: string, password: string) {
    try {
      setLoading(true)

      const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
      setupSession(resp.user)
      route.push("/")
    } finally {
      setLoading(false)
    }
  }

  async function register(email: string, password: string) {
    try {
      setLoading(true)

      const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
      await setupSession(resp.user)
      route.push("/")
    } finally {
      setLoading(false)
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true)

      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      setupSession(resp.user)
      route.push("/")
    } finally {
      setLoading(false)
    }
  }

  async function logout() {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await setupSession(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-cod3r-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(setupSession)
      return () => cancel()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      loginGoogle,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext