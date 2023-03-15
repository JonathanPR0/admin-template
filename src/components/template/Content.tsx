import useAppData from "@/data/hook/UseAppData"

interface ContentProps {
  children?: any
}
export default function Content(props: ContentProps) {
  const { changeTheme } = useAppData()
  return (
    <div className={`
      flex flex-col mt-7 dark:text-gray-200
    `}>
      {props.children}
      <button onClick={changeTheme} className="p-4 mt-4 bg-indigo-300 rounded-full">Mudar tema!</button>
    </div>
  )
}