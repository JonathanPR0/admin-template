import useAppData from "@/data/hook/UseAppData"
import useAuth from "@/data/hook/UseAuth"
import Head from "next/head"
import Image from "next/image"
import router from "next/router"
import loadingImage from "../../../public/images/loading.svg"

export default function ForceLogin(props) {
  const { theme } = useAppData()

  const { user, loading } = useAuth()

  function renderContent() {
    return (
      <>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `if(!document.cookie?.includes("admin-template-cod3r-auth")){
              window.location.href = "/autentication"
            }`}} />
        </Head>
        {props.children}
      </>
    )
  }
  function renderLoading() {
    return (
      <div className={`${theme}`}>
        <div className={`dark:bg-gray-800 flex justify-center items-center h-screen`}>
          <Image src={loadingImage} alt="loading" />
        </div>
      </div>
    )
  }
  if (!loading && user?.email) {
    return renderContent()
  } else if (loading) {
    return renderLoading()
  } else {
    router.push("/autentication")
    return null
  }
}