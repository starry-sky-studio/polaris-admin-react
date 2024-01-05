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
      console.log(r, 'r')
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
    <div className="flex justify-center item-center">
      111 {text}22
      <button onClick={onSubmit}>发送</button>
      <button onClick={connect}>Connect</button>
      <button
        className=""
        onClick={disconnect}
      >
        Disconnect
      </button>
      <ul>
        {fooEvents.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <Icon icon="streamline-emojis:disappointed-face" />
      <p>websocket</p>
      <Icon icon="streamline-emojis:disappointed-face" />
    </div>
  )
}
