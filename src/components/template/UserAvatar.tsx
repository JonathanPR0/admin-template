/* eslint-disable @next/next/no-img-element */
import useAuth from "@/data/hook/UseAuth"
import Link from "next/link"

interface UserAvatarProps {
  className?: string,
}

export default function UserAvatar(props: UserAvatarProps) {
  const { user } = useAuth()
  return (
    <Link href={"/perfil"}>
      <img
        src={user?.photoUrl ?? "/images/avatar.png"}
        alt="Avatar do usuário"
        className={`
          h-10 w-10 rounded-full cursor-pointer 
          ${props.className}
        `}
      />
    </Link>
  )
}