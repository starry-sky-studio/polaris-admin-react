import { Column, Workbook, RowValues } from 'exceljs'

export class ExcelUtils {
  /**
   * 点击下载文件
   * @description 点击下载文件
   * @param arrayBuffer 文件名称
   * @param name 文件名称
   */
  static download(arrayBuffer: any, name: string = '下载文件.xlsx') {
    const link = document.createElement('a')
    const blob = new Blob([arrayBuffer])
    const url = URL.createObjectURL(blob)
    link.href = url
    link.download = name
    document.body.appendChild(link)
    link.click()
    link.addEventListener('click', () => {
      link.remove()
    })
  }

  /**
   * excel 文件生成
   * @description 文件生成
   * @param columns 文件名称
   * @param data 文件名称
   */
  static async generateExcel(columns: Partial<Column>[], data: any[]) {
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet('sheet')
    worksheet.columns = columns
    worksheet.addRows(data)
    return await workbook.xlsx.writeBuffer()
  }

  /**
   * excel 文件读取
   * @description 文件读取
   * @param columns 文件名称
   * @param data 文件名称
   * @returns fileList 文件
   */
  static async readExcel(file: any) {
    let fileList: RowValues[] = []
    const workbook = new Workbook()
    const workbook2 = await workbook.xlsx.load(file)
    workbook2.eachSheet((sheet) => {
      const value = sheet.getSheetValues()
      fileList = value
    })
    return fileList
  }

  /**
   * 转化 ant table ColumnsType 为 excel 文件表格头部类型
   * @description 文件读取
   * @param columns 文件名称
   * @param data 文件名称
   */
  static columnsType(value: any) {
    const columns: Partial<Column>[] = value.map((item: any) => {
      return {
        header: item.title,
        key: item.key,
        width: 20
      }
    }) as Partial<Column>[]

    return columns
  }
}
