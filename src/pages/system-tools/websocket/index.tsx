import { io } from 'socket.io-client'
export function Component() {
  const [person, updatePerson] = useImmer<{
    connected: boolean
    fooEvents: Array<any>
    barEvents: Array<any>
  }>({
    connected: false,
    fooEvents: [],
    barEvents: []
  })

  const URL = 'http://localhost:3000'

  const socket = io(URL)

  socket.on('connect', () => {
    updatePerson((draft) => {
      draft.connected = true
    })
  })

  socket.on('disconnect', () => {
    updatePerson((draft) => {
      draft.connected = false
    })
  })

  // socket.on('foo', (...args) => {
  //   updatePerson((draft) => {
  //     draft.fooEvents.push(args)
  //   })
  // })

  // socket.on('bar', (...args) => {
  //   updatePerson((draft) => {
  //     draft.barEvents.push(args)
  //   })
  // })

  // 点击btn发送socket消息
  const handleClick = () => {
    socket.emit('newMessage', 'chatList.value', (e: any) => {
      console.log(e)
    })
  }

  useEffect(() => {
    socket.connect()
    console.log(person)
  }, [])

  return (
    <div className="flex justify-center item-center">
      <button onClick={handleClick}>发送</button>

      <Icon icon="streamline-emojis:disappointed-face" />
      <p>websocket</p>
      <Icon icon="streamline-emojis:disappointed-face" />
    </div>
  )
}
