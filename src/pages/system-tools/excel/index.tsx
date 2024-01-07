import { Upload, UploadProps } from 'antd'
//import { Workbook } from 'exceljs'

export function Component() {
  // async function main() {
  //   const workbook = new Workbook()
  //   const workbook2 = await workbook.xlsx.readFile('./data.xlsx')
  //   workbook2.eachSheet((sheet, index1) => {
  //     console.log('工作表' + index1)

  //     const value = sheet.getSheetValues()
  //   })
  // }

  //上传文件
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
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
    maxCount: 1
  }

  return (
    <div className="flex justify-center item-center">
      <Upload.Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon icon="ic:outline-folder-open" />
        </p>
        <p className="ant-upload-text">单击或拖动文件到此区域以上传 支持单个或批量上传</p>
      </Upload.Dragger>
    </div>
  )
}
