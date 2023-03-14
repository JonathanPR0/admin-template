import Link from "next/link"

interface MenuItemProps {
  text: string
  icon: any
  url?: string
  className?: string
  onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {
  function renderLink() {
    return (
      <div className={`flex flex-col justify-center items-center w-full h-20 dark:text-gray-400 ${props.className}`}>
        {props.icon}
        <span className={`text-xs font-light`}>{props.text}</span>
      </div>
    )
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-200  dark:hover:bg-gray-800 cursor-pointer`}>
      {props.url ? (
        <Link href={props.url}>
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  )
}