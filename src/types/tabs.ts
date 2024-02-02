import { ReactNode } from 'react'

export interface TabsModel {
  href: string
  label: string | (() => ReactNode)
  icon: any
}
