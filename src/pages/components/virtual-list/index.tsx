import { useEventListener, useCreation, useReactive } from 'ahooks'
interface ItemProps {
  id: number
}

function ItemRender(itemProps: ItemProps) {
  return (
    <div className="border p-2 ">
      <h3 className="">{itemProps.id}</h3>
      <p>尽情地书写你想编写的内容，不局限于页面高度</p>
    </div>
  )
}

export function Component() {
  const allRef = useRef<any>(null) // 容器的ref
  const scrollRef = useRef<any>(null) // 检测滚动

  const list: number[] = Array.from({ length: 10000 }, (_, index) => {
    return index
  })

  const state = useReactive({
    data: [] as number[], //渲染的数据
    scrollAllHeight: '100vh', // 容器的初始高度
    listHeight: 0, //列表高度
    itemHeight: 0, // 子组件的高度
    renderCount: 0, // 需要渲染的数量
    bufferCount: 6, // 缓冲的个数
    start: 0, // 起始索引
    end: 0, // 终止索引
    currentOffset: 0 // 偏移量
  })

  useEffect(() => {
    // 子列表高度
    const ItemHeight = 65

    // 容器的高度
    const scrollAllHeight = allRef.current.offsetHeight

    // 列表高度
    const listHeight = ItemHeight * list.length

    //渲染节点的数量
    const renderCount = Math.ceil(scrollAllHeight / ItemHeight) + state.bufferCount

    state.renderCount = renderCount
    state.end = renderCount + 1
    state.listHeight = listHeight
    state.itemHeight = ItemHeight
    state.data = list.slice(state.start, state.end)
  }, [allRef])

  useCreation(() => {
    state.data = list.slice(state.start, state.end)
    console.log(state.data, 'state.data ')
  }, [state.start])

  useEventListener(
    'scroll',
    () => {
      // 顶部高度
      const { scrollTop } = scrollRef.current
      console.log(scrollTop, 'scrollTop')
      state.start = Math.floor(scrollTop / state.itemHeight)
      state.end = Math.floor(scrollTop / state.itemHeight + state.renderCount + 1)
      state.currentOffset = scrollTop - (scrollTop % state.itemHeight)
      // state.data = list.slice(state.start, state.end)
    },
    { target: scrollRef }
  )

  return (
    <div
      ref={allRef}
      className="flex flex-col  justify-center item-center"
    >
      <div> 虚拟列表 {state.currentOffset}</div>
      <div
        style={{ height: state.scrollAllHeight, overflow: 'scroll', position: 'relative' }}
        ref={scrollRef}
      >
        {/* 占位，列表的总高度，用于生成滚动条 */}
        <div
          className="absolute left-0 right-0 top-0 "
          style={{ height: state.listHeight }}
        />
        {/* 内容区域 */}
        <div
          className="relative left-0 top-0 right-0 "
          style={{
            transform: `translate3d(0, ${state.currentOffset}px, 0)`
          }}
        >
          {state.data.map((item) => {
            return (
              <ItemRender
                key={item}
                id={item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
