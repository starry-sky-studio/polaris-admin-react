import { theme } from 'antd'

export const lightTheme = {
  token: {
    colorPrimary: '#9f7aea',
    // 派生变量，影响范围小
    colorBgContainer: '#ffffff',
    colorBgBase: '#ffffff'
  },
  components: {
    Layout: {
      bodyBg: '#ffffff',
      footerBg: '#ffffff',
      headerBg: '#ffffff',
      siderBg: '#ffffff'
    }
  },
  algorithm: theme.defaultAlgorithm
}

export const darkTheme = {
  token: {
    colorPrimary: '#6b46c1',
    colorPrimaryBg: '#333333',
    colorBgContainer: '#37393e',
    colorBgBase: '#37393e',
    colorTextBase: '#ffffff'
  },
  components: {
    Layout: {
      bodyBg: '36393f',
      footerBg: '#36393f',
      headerBg: '#36393f',
      siderBg: '#36393f'
    }
  },
  algorithm: theme.darkAlgorithm
}
