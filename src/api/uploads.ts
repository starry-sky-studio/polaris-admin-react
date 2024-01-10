export class UploadAPI {
  private static UPLOAD_API_PREFIX = `/files`

  // // 分片上传需要设置请求头 `Content-Type` 为 `multipart/form-data`
  // options: RequestInit = {
  //   method: 'POST',
  //   body: formData
  // }
  /**
   * 大图分片上传
   */
  static large(data: FormData) {
    return httpRequest.post(`${this.UPLOAD_API_PREFIX}/large`, { ...data })
  }
}
