import { IconMoon, IconSun } from "../icons"

interface BtnChangeThemeProps {
  theme: string
  changeTheme: (() => void)
}

export default function BtnChangeTheme(props: BtnChangeThemeProps) {
  const isDarkTheme = props.theme
  return <div onClick={props.changeTheme} className={`
  hidden sm:flex items-center lg:justify-between cursor-pointer
  bg-gradient-to-r ${isDarkTheme ? "from-yellow-300 to-yellow-600" : "from-gray-600 to-gray-800 flex-row-reverse"}
  w-14 lg:w-max lg:max-w-24 h-8 p-1 gap-2 rounded-full transition-colors
`}>

    <div className={`hidden lg:flex items-center text-white ${isDarkTheme ? "lg:ml-1" : "lg:mr-1"}`}>
      <span>
        {isDarkTheme ? "Claro" : "Escuro"}
      </span>
    </div>
    <div className={`
    flex items-center justify-center
    ${isDarkTheme ? "bg-white text-yellow-600" : "bg-gray-900 text-yellow-300"}
    w-6 h-6 rounded-full p-0.5 
  `}>
      {isDarkTheme ? IconSun(4) : IconMoon(4)}
    </div>
  </div>
}
