import { Form } from 'antd'
import { SignupModel, R } from '@/types'

export function Component() {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const signupMutation = useMutation({
    mutationFn: (data: SignupModel) => AuthAPI.signup(data),
    onSuccess: onSignupSuccess,
    onError: () => {
      //form.setFieldsValue({ password: '', confirmPassword: '' })
      message.error('注册失败')
    }
  })

  //注册成功
  function onSignupSuccess(res: R<string>) {
    const { data } = res ?? {}
    message.success(data)
    navigate('/login', { replace: true })
  }

  return (
    <div className="px-2">
      <Form
        name="basic"
        initialValues={{ remember: false }}
        autoComplete="off"
        form={form}
        disabled={signupMutation.isPending}
        onFinish={(values) => signupMutation.mutate(values)}
      >
        <div className="text-center text-lg py-2">登录</div>
        <Form.Item<SignupModel>
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item<SignupModel>
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: '请确认密码' }]}
        >
          <Input.Password placeholder="请确认密码" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
        >
          <div className="flex justify-between items-center">
            <span
              className="cursor-pointer hover:text-indigo-300"
              onClick={() => navigate('/login')}
            >
              已有账户？去登录
            </span>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            disabled={signupMutation.isPending}
            loading={signupMutation.isPending}
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
