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
    // const sliceSize = 10 * 1024 // 切片大小，这里假设每个切片1MB
    // const totalSlices = Math.ceil(file.size / sliceSize) // 获取切片数量
    // const chunk = 0
    // const postPromises = [] // 存储每个 POST 请求的 Promise
    // const totalUploaded = 0 // 总已上传数据量

    console.log(file.slice(0, 10 * 1024), '11111')

    //const newFile = file as Blob

    //const chunkSize = 10 * 1024
    //const sliceSize = 10 * 1024
    //const totalSlices = Math.ceil(newFile.size / sliceSize)
    //const chunks = []

    //const totalUploaded = 0 // 总已上传数据量
    //const nameList = file.name.split('.')
    // let startPos = 0
    // while (startPos < newFile.size) {
    //   //console.log(newFile.slice(startPos, startPos + chunkSize))
    //   chunks.push(newFile.slice(startPos, startPos + chunkSize))

    //   startPos += chunkSize
    // }
    // console.log(chunks, 'chunks')

    // const promises = chunks.map((chunk, index) => {
    //   const data = new FormData()
    //   data.set('name', (file as File).name + '-' + index)
    //   data.append('file', chunk)
    //   console.log(data, 'data')
    //   return UploadAPI.large(data)
    // })

    // console.log(promises, 'promises')

    // try {
    //   await Promise.all(promises)
    //   console.log('大图分片上传成功')
    // } catch (error) {
    //   console.error('大图分片上传失败:', error)
    //   throw error
    // }

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

//const fileInput = document.querySelector('#fileInput')
// fileInput!.onChange = async function () {
//   const data = new FormData()
//   data.set('name', '光')
//   data.set('age', '20')
//   ;[...fileInput.files].forEach((item) => {
//     data.append('files', item)
//   })

//   //const res = await axios.post('http://localhost:3000/upload', data)
//   // console.log(res)
// }

// useEffect(() => {
//   console.log('1111')
// }, [fileInput])

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
