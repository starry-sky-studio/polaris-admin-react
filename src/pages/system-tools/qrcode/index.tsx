import { Input } from 'antd'
import QRCode from 'qrcode'
export function Component() {
  const [text, setText] = useState<string>()
  const [url, setUrl] = useState<string>()

  // With promises
  QRCode.toDataURL('I am a pony!')
    .then((url: any) => {
      console.log(url)
    })
    .catch((err: any) => {
      console.error(err)
    })

  // With async/await
  const generateQR = async (text: string) => {
    try {
      const path = await QRCode.toDataURL(text)
      setUrl(path)
      message.success('生成二维码成功')
    } catch (err) {
      message.error('生成二维码失败🥹')
    }
  }

  const handleGenerateQR = () => {
    if (!text) {
      message.warning('请先输入内容')
      return
    }
    generateQR(text)
  }
  return (
    <div className="w-full gap-2 h-full  flex flex-col justify-center item-center sm:flex-row">
      <div className="w-full sm:w-[1/2] h-full  flex justify-start flex-col items-center gap-2">
        <Input.TextArea
          rows={8}
          placeholder="请输入二维码内容"
          allowClear
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          type="primary"
          onClick={handleGenerateQR}
        >
          生成二维码
        </Button>
      </div>
      <div className="w-full sm:w-[1/2] h-full  flex justify-start flex-col items-center gap-2">
        <div>
          <img
            src={url}
            alt=""
          />
        </div>
        {url && <Button type="primary">下载二维码</Button>}
      </div>
    </div>
  )
}
