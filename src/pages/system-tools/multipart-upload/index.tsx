import { Upload, UploadProps } from 'antd'

const props: UploadProps = {
  name: 'files',
  multiple: true,
  action: 'http://localhost:3000/files/large',
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
  onDrop(e: { dataTransfer: { files: any } }) {
    console.log('Dropped files', e.dataTransfer.files)
  },
  customRequest: async ({ file }) => {
    console.log(file, 'file')

    const chunkSize = 20 * 1024

    const chunks = []
    let startPos = 0
    while (startPos < (file as File).size) {
      chunks.push(file.slice(startPos, startPos + chunkSize))
      startPos += chunkSize
    }
    console.log(chunks, 'chunks')
    const promises = chunks.map((chunk, index) => {
      const data = new FormData()
      data.set('name', (file as File).name + '-' + index)
      data.append('file', chunk)
      return UploadAPI.large(data)
    })

    try {
      await Promise.all(promises)
      console.log('大图分片上传成功')
    } catch (error) {
      console.error('大图分片上传失败:', error)
      throw error
    }

    console.log(file, 'beforeUpload')
    return false
  },
  beforeUpload: (file) => {
    console.log(file)
    //类型检验
  }
}

// const fileProps = {
//   name: 'file',
//   beforeUpload: beforeUpload,
//   onChange: onUpdateChange,
//   multiple: false,
//   headers: { mappingPath: window.location.pathname.replace(/\//g, '') },
//   customRequest: handleCustomRequest,
//   onRemove: onRemoveList
// }

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
