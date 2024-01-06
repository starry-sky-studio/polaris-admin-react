import { socket } from '@/utils'
export function Component() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [isSend, setIsSend] = useState(false)
  const [text, setText] = useState<any>('')
  async function connect() {
    await socket.connect()
    isConnected ? message.success('连接成功') : message.success('连接失败')
  }

  function disconnect() {
    socket.disconnect()
    message.success('连接断开')
  }

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    if (!isConnected) {
      return message.error('请先连接')
    }
    if (!text) {
      return message.error('请先输入数据')
    }
    message.success('正在发送')
    setIsSend(true)
    try {
      await socket.emit('events', text)
    } catch {
      message.success('发送失败')
    }
    setIsSend(false)
  }

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('message', (data) => {
      message.success(`服务端广播的数据 -- ${data}`)
    })

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('events')
    }
  }, [])

  return (
    <div className="flex  flex-col justify-center items-center gap-4">
      <div className="w-96">
        <Input
          placeholder="请输入内容"
          allowClear
          maxLength={500}
          showCount
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="space-x-2">
        <Button onClick={connect}>点击连接</Button>
        <Button
          type="primary"
          onClick={onSubmit}
          disabled={isSend}
        >
          点击发送
        </Button>
        <Button
          disabled={!isConnected}
          onClick={disconnect}
        >
          点击断开
        </Button>
      </div>
    </div>
  )
}
