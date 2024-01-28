import { LoginType } from '@/enums'

interface Props {
  handleLoginType: (params: LoginType) => void
}
export default function Component(props: Props) {
  return (
    <Icon
      icon="basil:google-alt-solid"
      height={26}
      className="cursor-pointer"
      onClick={() => props.handleLoginType(LoginType.EMAIL)}
    />
  )
}

// 1. matchLink是一个侧边栏导航配置项，简化 MatchLink和matchLink，
// 要求新增PagePathEnum时，动态变更 MatchLink和matchLink

// enum PagePathEnum {
//   SERVICE_SOLUTION = '/soc/serviceSolutions',
//   BUSINESS_DOMAIN = '/soc/businessDomain',
//   PAGE_APPLICATION = '/soc/pageApplication',
//   MERCHANT_VIEW = '/soc/merchantView',
//   // 新增导航，动态变更 MatchLink 和 matchLink
//   SO_MANAGEMENT = '/smc/soManagement'
// }

// 待优化
// type MatchLink = {
//   [PagePathEnum.SERVICE_SOLUTION]: boolean
//   [PagePathEnum.BUSINESS_DOMAIN]: boolean
//   [PagePathEnum.PAGE_APPLICATION]: boolean
//   [PagePathEnum.MERCHANT_VIEW]: boolean
// }

// 优化
// type MatchLink = {
//   [key in keyof typeof PagePathEnum]: boolean
// }

// 待优化
// const handleMatchLink = (): MatchLink => {
//   const matchLink: MatchLink = {}
//   const currentPath = location.pathname

//   for (const key in PagePathEnum) {
//     const path = PagePathEnum[key as keyof typeof PagePathEnum]
//     matchLink[key as keyof typeof PagePathEnum] = currentPath.indexOf(path) > -1
//   }
//   return matchLink
// }

//const matchLink = handleMatchLink()

// 高亮状态判断函数 (link: string): boolean
// const matchLink: MatchLink = {
//   [PagePathEnum.SERVICE_SOLUTION]: location.pathname.indexOf(PagePathEnum.SERVICE_SOLUTION) > -1,
//   [PagePathEnum.BUSINESS_DOMAIN]: location.pathname.indexOf(PagePathEnum.BUSINESS_DOMAIN) > -1,
//   [PagePathEnum.PAGE_APPLICATION]: location.pathname.indexOf(PagePathEnum.PAGE_APPLICATION) > -1,
//   [PagePathEnum.MERCHANT_VIEW]: location.pathname.indexOf(PagePathEnum.MERCHANT_VIEW) > -1
// }

// 2. 实现属性设置函数setAttr，按照自己理解书写即可
// 示例用法
// const a = {}
// setAttr(a, 'name.age.time', 10)
// console.log(a) // 输出 {name:{age:{time:10}}}

// function setAttr(obj: {}, path: string, value: number) {
//   const keys = path.split('.')
//   let currentObj = Obj

//   keys.slice(0, -1).forEach((key: string | number) => {
//     if (!currentObj.hasOwnProperty(key) || typeof currentObj[key] !== 'object') {
//       currentObj[key] = {}
//     }
//     currentObj = currentObj[key]
//   })

//   const lastKey = keys[keys.length - 1]
//   currentObj[lastKey] = value
// }

// 3. react18 父组件调用子组件方法(加上TS)，按照自己理解书写即可
// interface Props {
//   params: number
// }
// function Children(props: Props) {
//   const childMethod = () => {
//     console.log('1')
//   }

//   useImperativeHandle(ref, () => ({
//     childMethod
//   }))
//   return <div>我是子组件{props.params}</div>
// }

// export default forwardRef(Children)

// function Parent(props: Props) {
//   const childRef = useRef<ChildMethods>(null)

//   //父组件调用子组件方法
//   // const handleChildMethod = () => {
//   //   if (childRef.current) {
//   //     childRef.current.childMethod()
//   //   }
//   // }

//   // const handle = () => {
//   //   console.log('1')
//   // }
//   return (
//     <>
//       <div>我是父组件</div>
//       <Children
//         params={1}
//         ref={childRef}
//       />
//     </>
//   )
// }

// 4. 嵌套页面（iframe）获取父页面的URL（考虑跨源场景）

// let parentURL
// try {
//   parentURL = window.parent.location.href
// } catch {
//   parentURL = document.referrer
// }

// function show() {
//   const a = '1'
//   const b = '2'
//   const c = '6'
//   {
//     console.log(c)
//     const c = '3'
//     var d = '4'
//     const b = '5'
//     console.log(a, b)
//   }
//   console.log(a, b)
//   console.log(c, d)
// }
// 6, //
//   1,
//   5
// 1, 2, 6, 4

//show()

// setTimeout(function () {
//   console.log(1)
// }, 0)
// new Promise(function (resolve) {
//   console.log(2)
//   for (let i = 0; i < 10000; i++) {
//     if (i == 9999) {
//       resolve(4)
//     }
//   }
//   resolve(6)
//   console.log(3)
// }).then(function (res) {
//   console.log(res)
// })
// console.log(5)

//5 1  2  4  6 3

// 写一个名为 AnimalType 的枚举，包括枚举值包括 'cat', 'dog'
// 写一个名为Animal 的 interface， 包含 type属性， 类型为 AnimalType， age 属性，为 number类型
// 写一个名为Dog 的 interface，继承自 Animal，其中type属性为AnimalType.dog,  拥有 name 属性，为string类型
// 声明一个Dog 类型的变量
// enum AnimalType {
//   //如果第一个枚举成员没有设置初始值，则它的初始值为 0。后续的枚举成员的值会在前一个枚举成员的基础上自动递增
//   CAT = 'cat',
//   DOG = 'dog'
// }

// interface Animal {
//   type: AnimalType
//   age: number
// }

// interface Dog extends Animal {
//   type: AnimalType.DOG
//   name: string
// }

// let dog: Dog

// const arr = [1, 2, 3, 1, 4]

// const newArr = [...new Set(arr)]

// const arr1 = arr.filter((item, index) => arr.indexOf(item) === index)

// function f(fun: { apply: (arg0: any, arg1: any[]) => void }, time: number | undefined) {
//   let timeOut: any
//   return (...arg: any) => {
//     clearTimeout(timeOut)
//     timeOut = setTimeout(() => {
//       fun.apply(this, arg)
//     }, time)
//   }
// }

// function f(fun: { apply: (arg0: any, arg1: any[]) => void }, time: number | undefined) {
//   let timeOut: string | number | NodeJS.Timeout | undefined
//   return (...arg: any) => {
//     clearTimeout(timeOut)
//     timeOut = setTimeout(() => {
//       fun.apply(this, arg)
//     }, time)
//   }
// }
