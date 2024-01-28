import { Input } from 'antd'
import { QrcodeProps } from '@/utils'
import { useLoad } from '@/hooks'
export function Component() {
  const [text, setText] = useState<string>()
  const [url, setUrl] = useState<string>()
  const { isLoad, loadIndex, enterLoad, quitLoad } = useLoad()
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

  const handleUpload = () => {
    BrowserUtils.downloadFile(url, '二维码')
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
      </div>
      <div className="w-full sm:w-[1/2] h-full  flex justify-start flex-col items-center gap-2">
        <div>
          <img
            src={url}
            alt=""
          />
        </div>
        {url && (
          <Button
            type="primary"
            onClick={handleUpload}
          >
            下载二维码
          </Button>
        )}
      </div>
    </div>
  )
}
