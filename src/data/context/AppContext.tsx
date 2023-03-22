import { createContext, useEffect, useState } from "react";

// type Theme = "dark" | ""

interface AppContextProps {
  theme?: string
  changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvide(props: any) {
  const [theme, setTheme] = useState("dark")

  function changeTheme() {
    const newTheme = theme === "" ? "dark" : ""
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme)
  }, [])

  return (
    <AppContext.Provider value={{
      theme,
      changeTheme
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
export const AppConsumer = AppContext.Consumer