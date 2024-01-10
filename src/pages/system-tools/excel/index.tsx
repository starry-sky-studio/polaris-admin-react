import { Upload } from 'antd'
import { Workbook } from 'exceljs'
import { TableComponent } from './components'
import type { UploadFile, UploadProps } from 'antd/es/upload/interface'
export function Component() {
  const [fileList, setFileList] = useState<UploadFile[]>([])
  //const [uploading, setUploading] = useState(false);
  // const handleUpload = () => {
  //   const formData = new FormData();
  //   fileList.forEach((file) => {
  //     formData.append('files[]', file as RcFile);
  //   });
  //   setUploading(true);
  //   console.log()

  // };
  const props: UploadProps = {
    onRemove: (file: any) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
    },
    beforeUpload: async (file: any) => {
      console.log(fileList, 'e')
      setFileList([...fileList, file])
      console.log('11111')
      console.log(fileList, 'e')
      await readFile(file)
      return false
    },
    fileList
  }

  //读取文件
  async function readFile(file: any) {
    const workbook = new Workbook()

    const workbook2 = await workbook.xlsx.load(file)

    workbook2.eachSheet((sheet, index1) => {
      console.log('工作表' + index1)
      const value = sheet.getSheetValues()
      console.log(value)
      // sheet.eachRow((row, index2) => {
      //   const rowData: any[] = []
      //   row.eachCell((cell, index3) => {
      //     rowData.push(cell.value)
      //   })
      //   console.log('行' + index2, rowData)
      // })
    })
  }

  //excel生成

  async function generateExcel() {
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet('排名')
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 20 },
      { header: '姓名', key: 'name', width: 30 },
      { header: '出生日期', key: 'birthday', width: 30 },
      { header: '手机号', key: 'phone', width: 50 }
    ]
    const data = [
      { id: 1, name: '光光', birthday: new Date('1994-07-07'), phone: '13255555555' },
      { id: 2, name: '东东', birthday: new Date('1994-04-14'), phone: '13222222222' },
      { id: 3, name: '小刚', birthday: new Date('1995-08-08'), phone: '13211111111' }
    ]

    worksheet.addRows(data)
    const res = await workbook.xlsx.writeBuffer()
    download(res)
  }

  function download(arrayBuffer: any, title: string = '下载文件.xlsx') {
    const link = document.createElement('a')

    const blob = new Blob([arrayBuffer])
    const url = URL.createObjectURL(blob)
    link.href = url
    link.download = title

    document.body.appendChild(link)

    link.click()
    link.addEventListener('click', () => {
      link.remove()
    })
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-start item-center gap-2">
        <Upload
          listType="picture"
          maxCount={1}
          multiple
          {...props}
          // customRequest={customRequest}
        >
          <Button>导入excel</Button>
        </Upload>
        <Upload
          listType="picture"
          maxCount={1}
          multiple
          // customRequest={customRequest}
        >
          <Button>下载excel</Button>
        </Upload>
        <Button onClick={readFile}>点击显示</Button>
        <Button onClick={generateExcel}>点击生成</Button>
      </div>
      <TableComponent />
    </div>
  )
}
