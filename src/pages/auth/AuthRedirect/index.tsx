import { useSearchParams } from 'react-router-dom'
export function Component() {
  const navigate = useNavigate()

  const [params] = useSearchParams()
  const [githubCode, setGithubCode] = useState<string>()

  const handleLogin = () => {
    window.close()
  }

  useEffect(() => {
    if (window.opener) {
      const code = params.get('code')
      if (code) {
        setGithubCode(code)
        window.opener.postMessage(code, window.location.origin)
      }
    } else {
      navigate('/login', { replace: true })
    }
  }, [])
  return (
    <main className="flex flex-col justify-center items-center gap-2 h-screen">
      <div className="text-xl">{githubCode ? '授权成功' : '授权失败'}</div>
      <div className="space-x-2">
        <Button onClick={handleLogin}>返回到登录页</Button>
        <Button
          type="primary"
          onClick={() => window.close()}
        >
          去登录
        </Button>
      </div>
    </main>
  )
}
