import { Form, Checkbox, Divider } from 'antd'
import { RememberModel, LoginBaseModel } from '@/types'
import { LoginType } from '@/enums'
export function Component() {
  const navigate = useNavigate()
  const [loginType, setLoginType] = useState<LoginType>(LoginType.USERNAME)

  const onFinish = async (values: RememberModel) => {
    const { username, password } = values
    const data: LoginBaseModel = {
      username,
      password
    }

    try {
      const res = await AuthAPI.login(data, loginType)
      console.log(res)
    } catch (e) {
      console.log(e)
    }

    console.log(values)
  }

  return (
    <div className="px-2">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className=""
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
              onClick={() => navigate('/signup')}
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
          <Icon
            icon="mdi:github"
            height={24}
            className="cursor-pointer"
            onClick={() => setLoginType(LoginType.EMAIL)}
          />
          <Icon
            icon="basil:google-alt-solid"
            height={26}
            className="cursor-pointer"
            onClick={() => setLoginType(LoginType.EMAIL)}
          />
        </div>
      </div>
    </div>
  )
}
