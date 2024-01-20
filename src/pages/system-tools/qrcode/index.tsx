import { Input } from 'antd'

import { QrcodeProps } from '@/utils'
import { useLoad } from '@/hooks'
export function Component() {
  const [text, setText] = useState<string>()
  const [url, setUrl] = useState<string>()
  const { isLoad, loadIndex, enterLoad, quitLoad } = useLoad()
  const [loading, setLoading] = useState(false)
  const qrcodeProps: QrcodeProps = {
    errorCorrectionLevel: 'H',
    // color: {
    //   //dark: '#010599FF'
    //   //light: '#f5f5f5'
    // },
    margin: 1,
    width: 200
  }
  const handleGenerateQR = async (text: string) => {
    if (!text) {
      message.warning('请先输入内容')
      return
    }
    console.log('111', loadIndex)
    enterLoad()
    QrcodeUtils.generateQrcode(text, qrcodeProps)
      .then((res) => {
        setUrl(res)
        message.success('生成二维码成功')
      })
      .catch(() => {
        message.error('生成二维码失败🥹')
      })
      .finally(() => {
        quitLoad()
        console.log('333', loadIndex)
        console.log(isLoad)
      })
  }

  const fetchData = () => {
    enterLoad()
    setLoading(true)

    // 模拟异步请求
    setTimeout(() => {
      // 请求完成后调用quitLoad
      quitLoad()
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="w-full gap-2 h-full  flex flex-col justify-center item-center sm:flex-row">
      <div className="w-full sm:w-[1/2] h-full  flex justify-start flex-col items-center gap-2">
        <img
          src=""
          id="image"
          alt=""
        />
        <Input.TextArea
          rows={8}
          placeholder="请输入二维码内容"
          allowClear
          value={text}
          disabled={isLoad}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          loading={isLoad}
          type="primary"
          onClick={() => handleGenerateQR(text!)}
        >
          生成二维码
        </Button>
        <Button onClick={fetchData}>测试</Button>
        {loading ? 'true' : 'false'}
      </div>
      {isLoad ? 'true' : 'false'}
      {loadIndex}
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
