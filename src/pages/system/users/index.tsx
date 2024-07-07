import { Space, Table } from 'antd'
import type { TableProps } from 'antd'
import type { UserModel } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

// export interface UserModel {
//   id: number
//   username: string
//   nickName?: string
//   email?: string
//   phoneNumber?: string
//   avatarUrl?: string
//   gender?: string
//   country?: string
//   province?: string
//   city?: string
//   biography?: string
//   website?: string
//   birthDate?: Date
//   enabled: boolean
// }

export function Component() {
  const columns: TableProps<UserModel>['columns'] = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '头像',
      dataIndex: 'avatarUrl',
      key: 'avatarUrl'
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
      key: 'nickName'
    },
    {
      title: '邮箱',
      key: 'email',
      dataIndex: 'email'
    },
    {
      title: '电话',
      key: 'phoneNumber',
      dataIndex: 'phoneNumber'
    },
    {
      title: '性别',
      key: 'gender',
      dataIndex: 'gender',
      render: (text) => {
        return text == 1 ? '男' : '女'
      }
    },
    {
      title: '是否启用',
      key: 'enabled',
      dataIndex: 'enabled',
      render: (enabled) => {
        const text = enabled ? '启用' : '禁用'
        return <span>{text}</span>
      }
    },

    {
      title: '出生年月',
      key: 'birthDate',
      dataIndex: 'birthDate'
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>编辑</a>
          <a>删除</a>
        </Space>
      )
    }
  ]

  // const data: UserModel[] = []

  const queryClient = useQueryClient()

  // const result = useQuery({
  //   queryKey: ['useList'],
  //   queryFn: ({ signal }) =>
  //     UserAPI.getUserLists(
  //       {
  //         page: 1,
  //         pageSize: 10
  //       },
  //       signal
  //     )
  // })

  const fetchData = async (page: number) => {
    return UserAPI.getUserLists({
      page,
      pageSize: 10
    })
  }

  // const prefetch = () => {
  //   queryClient.prefetchQuery({
  //     queryKey: ['useList'],
  //     queryFn: fetchData,
  //     staleTime: 60000
  //   })
  // }

  // useEffect(() => {
  //   console.log(result)
  // }, [])

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['useList'],
    queryFn: ({ pageParam }) => fetchData(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1
      return nextPage
    }
  })

  useEffect(() => {
    console.log(data, fetchNextPage, hasNextPage, isFetchingNextPage)
  }, [data, fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <>
      <button onClick={() => fetchNextPage()}>show detail</button>

      <button
        onClick={(e) => {
          e.preventDefault()
          queryClient.cancelQueries({ queryKey: ['useList'] })
        }}
      >
        Cancel
      </button>
      <button
        onClick={(e) => {
          e.preventDefault()
          queryClient.fetchQuery({ queryKey: ['useList'] })
        }}
      >
        fetchQuery
      </button>
      <div className="space-x-2 mb-2 flex justify-between items-center">
        <Button type="default">新建</Button>

        <Button
          shape="circle"
          className="!flex justify-center items-center"
          icon={
            <Icon
              icon="ic:baseline-refresh"
              height={18}
            />
          }
        />
      </div>

      {/* <Table
        columns={columns}
        dataSource={data}
      /> */}
    </>
  )
}
