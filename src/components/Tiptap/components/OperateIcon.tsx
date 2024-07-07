interface Props {
  children: React.ReactNode
}

const OperateIcon = (props: Props) => {
  const { children } = props
  return (
    <div className="text-lg cursor-pointer hover:text-gray-700  hover:rounded-lg ">{children}</div>
  )
}

export default OperateIcon
