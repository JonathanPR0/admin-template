interface ContentProps {
  children?: any
}
export default function Content(props: ContentProps) {
  return (
    <div className={`
      flex flex-col mt-7 gap-2 dark:text-gray-200 max-w-5xl
    `}>
      {props.children}
    </div>
  )
}