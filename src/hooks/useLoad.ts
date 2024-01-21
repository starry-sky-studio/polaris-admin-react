type Load = {
  loadIndex: number
  isLoad: boolean
  enterLoad: () => void
  quitLoad: () => void
}

export const useLoad = (defaultStatus: number = 0): Load => {
  //使用number类型的loadingIndex，而不是boolean类型，用于有多个请求的场景
  const [loadIndex, setLoadIndex] = useState(defaultStatus)
  const [isLoad, setIsLoad] = useState(loadIndex > 0)

  const enterLoad = () => {
    setIsLoad(true)
    //console.log('enterLoad', loadIndex)
    setLoadIndex((prevIndex) => {
      return prevIndex + 1
    })

    //console.log('enterLoad', loadIndex)
  }

  const quitLoad = () => {
    //console.log('quitLoad', loadIndex)
    // if (loadIndex <= 0) {
    //   return
    // }
    setLoadIndex((prevIndex) => {
      return prevIndex - 1
    })
    setIsLoad(false)
    //console.log('quitLoad', loadIndex)
  }
  // const isLoad = useMemo(() => {
  //   return loadIndex > 0
  // }, [loadIndex])

  // useEffect(() => {
  //   setIsLoad(loadIndex > 0)
  //   console.log(isLoad, 'hooks')
  //   console.log(loadIndex, 'loadIndexHooks')
  // }, [loadIndex])

  return { isLoad, enterLoad, quitLoad, loadIndex }
}
