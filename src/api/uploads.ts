export class UploadAPI {
  private static UPLOAD_API_PREFIX = `/files`

  private static headers = { 'Content-Type': 'multipart/form-data' }

  // // 分片上传需要设置请求头 `Content-Type` 为 `multipart/form-data`
  // options: RequestInit = {
  //   method: 'POST',
  //   body: formData
  // }
  /**
   * 大图分片上传
   */
  static large(data: any) {
    return httpRequest.post(`${this.UPLOAD_API_PREFIX}/large`, data, {
      headers: this.headers
    })
  }

  //大图合并文件
  static largeMerge(name: string) {
    return httpRequest.get(`${this.UPLOAD_API_PREFIX}/merge?name=${name}`)
  }
}
