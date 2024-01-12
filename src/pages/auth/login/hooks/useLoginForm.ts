import { RememberModel, LoginBaseModel } from '@/types'
import { Form } from 'antd'

export const useLoginForm = () => {
  const [form] = Form.useForm<RememberModel>()

  useEffect(() => {
    // 从 localStorage 中获取记住的账号密码
    const localStorageData = AuthUtils.getRememberedAccount()
    if (localStorageData) {
      try {
        const data = JSON.parse(localStorageData) as LoginBaseModel
        form.setFieldsValue(data)
      } catch {
        //
      }
    }
  }, [form])

  // 清空密码
  const clearPassword = () => form.setFieldValue('password', '')

  // 处理记住密码
  const handleRememberPassword = () => {
    const formData = form.getFieldsValue()
    if (formData.remember) {
      AuthUtils.setRememberedAccount(JSON.stringify(formData))
    } else {
      AuthUtils.clearRememberedAccount()
    }
  }

  return {
    loginForm: form,
    clearPassword,
    handleRememberPassword
  }
}
