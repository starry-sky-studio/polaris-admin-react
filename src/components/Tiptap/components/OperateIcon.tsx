import { Editor } from '@tiptap/react'

interface Props {
  children: React.ReactNode
  editor: Editor
  type: any
  onclick: () => void
}

const OperateIcon = (props: Props) => {
  const { children, editor, type, onclick } = props
  return (
    <div
      onClick={onclick}
      className={clsx('text-lg cursor-pointer hover:text-gray-700  hover:rounded-lg ', {
        'is-active': editor.isActive(type)
      })}
    >
      {children}
    </div>
  )
}

export default OperateIcon
