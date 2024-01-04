import { useLoaderData } from 'react-router-dom'
import { Button } from 'antd'
export function Component() {
  const albums = useLoaderData() as string

  return (
    <>
      <Button type="default">12312</Button>
      <Button type="primary">Button</Button>
      <div className={clsx('bg')}>用户</div>
      <div>{albums}</div>
    </>
  )
}
