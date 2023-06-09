import SideMenu from "./SideMenu"
import Header from "./Header"
import Content from "./Content"

import useAppData from "@/data/hook/UseAppData"
import ForceLogin from "../auth/ForceLogin"
interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData()
  return (
    <ForceLogin>
      <div className={`${theme} flex h-screen w-screen`}>
        <SideMenu />
        <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800 transition-colors`}>
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>
            {props.children}
          </Content>
        </div>
      </div>
    </ForceLogin>
  )
}
