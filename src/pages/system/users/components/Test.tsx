// import { useQuery } from '@tanstack/react-query'
// // import { UserAPI } from '@/api/'

export default function Component() {
  const { isPending, error, data } = useQuery({
    queryKey: ['useList'],
    queryFn: ({ signal }) =>
      UserAPI.getUserLists(
        {
          page: 1,
          pageSize: 10
        }
        // signal
      )
  })

  if (isPending) return <div>Loading...</div>

  if (error) return <div>发生了错误</div>

  return (
    <>
      {/* {data.data.map((item) => (
        <div key={item.id}>{item.username}</div>
      ))} */}
    </>
  )
}
