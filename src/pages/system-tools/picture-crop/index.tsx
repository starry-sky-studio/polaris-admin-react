export function Component() {
  //1.实现本地预览
  const fileRef = useRef(null)
  const imgRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log(file)

    //把文件读出来 生成本地的url base64
    const reader = new FileReader()
    //注册事件 监听是否完成
    reader.onload = (e) => {
      imgRef.current.src = e.target.result
    }
    reader.readAsDataURL(file)

    // 实现本地预览
    //   const imgElement = document.querySelector('imgUrl')
    //   imgElement.src = URL.createObjectURL(file)
  }

  //2.实现部分上传
  const handleCrop = () => {
    const cutInfo = {
      x: 0,
      y: 0,
      cutHeight: 300,
      cutWight: 300,
      wight: 200,
      height: 200
    }
    const canvas = document.createElement('canvas')
    canvas.height = cutInfo.height
    canvas.wight = cutInfo.wight
    const ctx = canvas.getContext('2d')

    // 设置纯色背景
    ctx.fillStyle = '#fff' // 可以是颜色名称、十六进制值或rgb值
    ctx.fillRect(0, 0, canvas.width, canvas.height) // 填充整个Canvas区域

    ctx.drawImage(
      imgRef.current,
      cutInfo.x,
      cutInfo.y,
      cutInfo.cutWight,
      cutInfo.cutHeight,
      0,
      0,
      cutInfo.wight,
      cutInfo.height
    )
    canvas.toBlob((blob) => {
      const file = new File([blob], 'ava.jpeg', {
        type: 'image/jpeg'
      })
      console.log(file)

      //把文件读出来 生成本地的url base64
      const reader = new FileReader()
      //注册事件 监听是否完成
      reader.onload = (e) => {
        imgRef.current.src = e.target.result
      }
      reader.readAsDataURL(file)
    }, 'image/jpeg')
    document.body.append(canvas)
  }

  return (
    <div>
      <input
        ref={fileRef}
        type="file"
        onChange={handleFileChange}
      />
      <img
        ref={imgRef}
        className="imgUrl"
        src=""
      />

      {/* <div
        id="cutBox"
        className="cut-box"
        style="display: none;"
      >
        ...
      </div> */}

      <Button onClick={handleCrop}>点击生成截图后的文件对象</Button>
    </div>
  )
}
