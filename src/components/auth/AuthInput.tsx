interface AuthInputProps {
  label: string
  value: string
  type?: "text" | "email" | "password"
  isRequired?: boolean
  valueChanged: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor="">{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={e => props.valueChanged?.(e.target.value)}
        required={props.isRequired}
        className={`
          bg-gray-200 px-4 py-3 rounded-lg mt-2
          border focus:border-blue-500 focus:outline-none
        `} />
    </div>
  )
}