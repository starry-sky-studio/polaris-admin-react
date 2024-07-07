import Loading from '@/components/loading'
export function Component() {
  const [username, setUsername] = useState('')
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      console.log(newTodo)
      return UserAPI.addUser({
        username,
        password: '123456'
      })
    },
    onMutate: (variables) => {
      // A mutation is about to happen!
      console.log(variables)
      // Optionally return a context containing data to use when for example rolling back
      return { id: 1 }
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(error, variables, context)
      console.log(`rolling back optimistic update with id ${context.id}`)
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      console.log(data, variables, context)
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
      console.log(data, error, variables, context)
    }
  })
  // useEffect(() => {
  //   console.log(mutation)
  // })
  return (
    <div className=" h-full">
      <Button onClick={() => mutation.mutate()}>添加用户</Button>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={() => mutation.reset()}>重置</Button>
    </div>
  )
}
