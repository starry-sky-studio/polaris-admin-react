export class BrowserUtils {
  static openNewWindow(url: string) {
    window.open(url, '_blank')
  }

  static copyText(text: string) {
    if (navigator.clipboard) {
      this.copyText = (text) => {
        navigator.clipboard.writeText(text)
      }
      this.copyText(text)
    } else {
      this.copyText = (text) => {
        const input = document.createElement('input')
        input.setAttribute('value', text)
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
      }
      this.copyText(text)
    }
  }
}
