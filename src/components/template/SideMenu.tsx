import { IconHome, IconSettings, IconBell, IconLogout } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu() {
  return (
    <aside className={`
    flex flex-col
    bg-gray-200 text-gray-900
    dark:bg-gray-900 dark:text-gray-200  
    `}>
      <div className={`
        flex flex-col justify-center items-center
        bg-gradient-to-r from-blue-500  to-indigo-500
        h-20 w-20`
      }>
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={IconHome} />
        <MenuItem url="/settings" text="Settings" icon={IconSettings} />
        <MenuItem url="/notifications" text="Notifications" icon={IconBell} />
      </ul>
      <ul>
        <MenuItem text="Logout" icon={IconLogout} onClick={() => console.log("Fazer o logout")
        } className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white" />
      </ul>
    </aside >
  )
}
