export function Component() {
  const a = {}
  setAttr(a, 'name.age.time', 10)
  console.log(a) // 输出 {name:{age:{time:10}}}

  function setAttr(obj: object, path: string, value: number) {
    const keys = path.split('.')
    console.log(keys.slice(0, -1), 'keys')
    let currentObj: any = obj

    //从索引 0 开始到倒数第二个元素的部分

    //hasOwnProperty() 是 JavaScript 对象的方法，它返回一个布尔值，指示对象是否具有指定的属性。
    keys.slice(0, -1).forEach((key: string) => {
      if (
        !Object.prototype.hasOwnProperty.call(currentObj, key) ||
        typeof currentObj[key] !== 'object'
      ) {
        currentObj = {}
      }
      currentObj = currentObj[key]
    })

    const lastKey = keys[keys.length - 1]
    currentObj[lastKey] = value
  }

  return <div>字典</div>
}
