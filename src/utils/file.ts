import SparkMD5 from 'spark-md5'

export class FileUtils {
  static hash(chunks: File[]) {
    return new Promise((resolve) => {
      const spark = new SparkMD5()
      function _read(i: number) {
        if (i >= chunks.length) {
          resolve(spark.end())
          return
        }
        const blob = chunks[i]
        const reader = new FileReader()
        reader.onload = (e) => {
          const bytes = e.target?.result
          spark.append(bytes as string)
          _read(i + 1)
        }
        reader.readAsArrayBuffer(blob)
      }
      _read(0)
    })
  }
}
