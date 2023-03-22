import useAppData from "@/data/hook/UseAppData";
import BtnChangeTheme from "./BtnChangeTheme";
import Title from "./Title";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
  title: string,
  subtitle: string,
}
export default function Header(props: HeaderProps) {
  const { theme, changeTheme } = useAppData()

  return (
    <header className="flex gap-2">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end items-center gap-3">
        <BtnChangeTheme theme={theme} changeTheme={changeTheme} />
        <UserAvatar />
      </div>
    </header>
  )
}
