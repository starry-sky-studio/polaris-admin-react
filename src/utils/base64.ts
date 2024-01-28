export function uploadBase64(file: File) {
  const ext = '.' + file.name.split('.').pop()
  const reader = new FileReader()

  reader.onload = (e) => {
    const base64 = e.target?.result?.split('.').pop()
    return {
      ext,
      base64
    }
  }
  reader.readAsDataURL(file)
}
