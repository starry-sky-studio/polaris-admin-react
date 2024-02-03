import { Form, Checkbox, Divider } from 'antd'
import { RememberModel, R, UserType } from '@/types'
import { LoginType } from '@/enums'
import { useRedirect, useLoginForm, useHandleLoginResult } from './hooks'
import { GithubLogin, GoogleLogin } from './components'
//import { useBlocker } from 'react-router-dom'
export function Component() {
  const [loginType, setLoginType] = useState<LoginType>(LoginType.USERNAME)
  const { handleRedirect, handleSignup } = useRedirect()
  const { loginForm, clearPassword, handleRememberPassword } = useLoginForm()
  const { handleLoginResult } = useHandleLoginResult()

  const loginMutation = useMutation({
    mutationFn: (data: RememberModel) => AuthAPI.login(data, loginType),
    onSuccess: onLoginSuccess,
    onError: clearPassword
  })

  //登录成功
  function onLoginSuccess(res: R<UserType>) {
    const { data, msg } = res ?? {}
    handleLoginResult(data!, msg)
    handleRememberPassword()
    handleRedirect()
  }

  // const blocker = useBlocker(({ currentLocation, nextLocation }) => {
  //   console.log(currentLocation.pathname, nextLocation.pathname, '111')
  // })

  function handleLoginType(params: LoginType) {
    setLoginType(params)
  }

  function onFinish(values: RememberModel) {
    handleLoginType(LoginType.USERNAME)
    loginMutation.mutate(values)
  }

  return (
    <div className="px-2">
      {/* {blocker.state ? '1' : '0'} */}
      <Form
        name="basic"
        initialValues={{ remember: false }}
        autoComplete="off"
        form={loginForm}
        disabled={loginMutation.isPending}
        onFinish={onFinish}
      >
        <div className="text-center text-lg py-2">登录</div>
        <Form.Item<RememberModel>
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item<RememberModel>
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item<RememberModel>
          name="remember"
          valuePropName="checked"
        >
          <div className="flex justify-between items-center">
            <Checkbox>记住密码</Checkbox>
            <span
              className="cursor-pointer hover:text-indigo-300"
              onClick={handleSignup}
            >
              注册
            </span>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            disabled={loginMutation.isPending}
            loading={loginMutation.isPending}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
      <div>
        <Divider
          rootClassName="!my-0"
          plain
        >
          第三方登录
        </Divider>
        <div className="flex  justify-center items-center gap-2 py-2">
          <GithubLogin handleLoginType={handleLoginType} />
          <GoogleLogin handleLoginType={handleLoginType} />
        </div>
      </div>
    </div>
  )
}
