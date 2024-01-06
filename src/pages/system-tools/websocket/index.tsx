import { socket } from '@/utils'
export function Component() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [fooEvents, setFooEvents] = useState<string[]>([])
  const [text, setText] = useState<any>('')
  function connect() {
    socket.connect()
  }

  function disconnect() {
    socket.disconnect()
  }

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    console.log('发送 发送')
    console.log(isConnected)
    socket.emit('events', { id: 'Nest' }, (r: any) => {
      console.log('发送事件了create-something')
      setText(r)
      console.log(fooEvents, 'r')
    })

    socket.emit('newMessage', 'value', (m: any) => {
      console.log('发送事件了newMessage')
      console.log(m, 'm')
    })

    console.log('发送 发送完了')
  }

  // function onFooEvent() {
  //   // socket.foo()
  // }
  useEffect(() => {
    function onConnect() {
      console.log('连接了')
      setIsConnected(true)
    }

    function onDisconnect() {
      console.log('断开了')
      setIsConnected(false)
    }

    function onFooEvent(value: string) {
      console.log('onFooEvent')
      setFooEvents((previous) => [...previous, value])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('foo', onFooEvent)
    socket.on('newMessage', (data) => console.log(data, 'data'))

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('foo', onFooEvent)
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
        {text}
        <Button onClick={connect}>点击连接</Button>
        <Button
          type="primary"
          onClick={onSubmit}
        >
          点击发送
        </Button>
        <Button onClick={disconnect}>点击断开</Button>
      </div>
    </div>
  )
}
