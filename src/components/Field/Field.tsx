import { useId } from 'react'
import type { FC, ReactNode } from 'react'

interface Props {
  label: string
  children: (id: string) => ReactNode
}

const Field: FC<Props> = ({ label, children }) => {
  const id = useId()
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs text-slate-500">
        {label}
      </label>
      {children(id)}
    </div>
  )
}

export default Field
