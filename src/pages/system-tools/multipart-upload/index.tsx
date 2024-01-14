import { Upload, UploadProps } from 'antd'
import { imgType } from '@/constants'
const props: UploadProps = {
  name: 'files',
  multiple: true,
  onChange(info: { file: { name?: any; status?: any }; fileList: any }) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  customRequest: async ({ file, onSuccess, onError, onProgress }) => {
    const chunksFile = splitFile(file as File | Blob)
    const randomStr = Math.random().toString().slice(2, 8)
    const filesName = randomStr + '-' + (file as File).name
    const promiseFile = chunksFile.map((chunk, index) => {
      const data = new FormData()
      data.set('name', filesName + '-' + index)
      data.append('files', chunk)
      return new Promise((resolve, reject) => {
        UploadAPI.large(data)
          .then((response) => {
            resolve(response.data) // 请求成功时解决 Promise
          })
          .catch((error) => {
            reject(error) // 请求失败时拒绝 Promise
          })
      })
    })
    try {
      await Promise.all(promiseFile) // 等待所有请求完成
      await mergeFile(filesName)
      onSuccess
    } catch {
      message.error('上传文件失败')
      onError
    } finally {
      onProgress
    }
  },
  beforeUpload: (file) => {
    const fileSelfType = file.type.split('/')[1]
    if (!imgType.includes(fileSelfType)) {
      message.warning('请上传正确的文件类型')
      return false
    }
    if (file.size / 1024 / 1024 / 1024 > 100) {
      message.warning('文件大小超出100M，请重新上传！')
      return false
    }
  }
}

function splitFile(file: File | Blob) {
  const chunkSize = 10 * 1024
  const chunks = []
  let startPos = 0
  while (startPos < file.size) {
    chunks.push(file.slice(startPos, startPos + chunkSize))
    startPos += chunkSize
  }
  return chunks
}

//合并文件
async function mergeFile(name: string) {
  await UploadAPI.largeMerge(name)
    .then(() => {
      //console.log(res, 'res')
      message.success('合并文件成功')
    })
    .catch(() => {
      message.error('合并文件失败')
    })
}

export function Component() {
  return (
    <div className=" flex justify-center item-center">
      <Upload.Dragger
        {...props}
        rootClassName="w-full sm:w-[500px]"
      >
        <p className="ant-upload-drag-icon flex justify-center">
          <Icon
            height={56}
            icon="ic:outline-folder"
          />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly</p>
      </Upload.Dragger>
    </div>
  )
}
