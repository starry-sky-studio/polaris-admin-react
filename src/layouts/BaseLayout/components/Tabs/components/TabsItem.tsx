import { Tag } from 'antd'
import type { TabsModel } from '@/types'
import { useNavigate } from 'react-router-dom'

interface Props extends TabsModel {}

// const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
//   e.preventDefault()
//   console.log('Clicked! But prevent default.')
// }

export default function TabsItem({ icon, label, href }: Props) {
  const navigate = useNavigate()
  return (
    <Tag
      onClick={() => navigate(href)}
      className="!flex justify-between items-center !py-1 gap-2 cursor-pointer"
    >
      Tag
      {icon}
      {label}
      <Icon
        height={16}
        icon="ic:baseline-close"
        className="cursor-pointer rounded-full text-[#666] dark:text-[#fff] hover:dark:bg-slate-600 hover:bg-slate-300"
      />
    </Tag>
  )
}
