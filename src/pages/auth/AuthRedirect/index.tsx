export function Component() {
  const navigate = useNavigate()
  return (
    <main className="flex flex-col justify-center items-center gap-2 h-screen">
      <div className="text-xl">授权成功</div>
      <div className="space-x-2">
        <Button onClick={() => navigate('/login')}>返回到登录页</Button>
        <Button type="primary">导航到首页</Button>
      </div>
    </main>
  )
}
