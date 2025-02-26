export type Province = {
  matt: string
  name: string
}

export type District = {
  matt: string
  maqh: string
  name: string
}

export type Ward = {
  mapx: string
  maqh: string
  name: string
}

export type ImageEntiy = {
  src: string
  alt?: string
  title?: string
}

export type Option = {
  value?: string
  title: string
}

export type RestOptions = {
  [key: string]: string | number | boolean | null | undefined
}

export type AsideMenuItemtype = {
  url?: string
  title: string
  isPrefix?: boolean
}

export type ListTitleType = {
  title: string
  materialIconName?: string
  url?: string
  onClick?: () => void
}

export type NotifyType = {
  title: string
  content: string
  url?: string
  time: string
}

export type CategoryType = {
  title: string
  description?: string
  createdat?: string
}

export enum StatusPostEnum {public = 'public', draft = 'draft', inactive = 'inactive'}

export interface ProductType {
  title: string
  code?: string | null
  category?: CategoryType | null
  description?: string | null
  content?: string
  store?: number | null
  price?: number | null
  status: string
  thumnail?: ImageEntiy | null
  images?: ImageEntiy[] | null
  createdat: string
}

export interface ColumnProductType extends ProductType {
  key: string
}

