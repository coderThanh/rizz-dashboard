export interface Province {
  matt: string
  name: string
}

export interface District {
  matt: string
  maqh: string
  name: string
}

export interface Ward {
  mapx: string
  maqh: string
  name: string
}

export interface ImageEntiy {
  src: string
  alt?: string
  title?: string
}

export interface Option {
  value?: string
  title: string
}

export interface RestOptions {
  [key: string]: string | number | boolean | null | undefined
}

export interface AsideMenuItemtype {
  url?: string
  title: string
  isPrefix?: boolean
}

export interface ListTitleType {
  title: string
  materialIconName?: string
  url?: string
  onClick?: () => void
}

export interface NotifyType {
  title: string
  content: string
  url?: string
  time: string
}

export interface CategoryType {
  title: string
  id: string
  description?: string
  createdat?: string
  parrentId?: string
  children?: CategoryType[]
}

export const StatusPostEnums: readonly ['public', 'draft', 'inactive'] = [
  'public',
  'draft',
  'inactive'
]

export type  StatusPostType = typeof StatusPostEnums[number]

export interface ProductType {
  title: string
  id: string
  code?: string | null
  category?: CategoryType | null
  description?: string | null
  content?: string
  store?: number | null
  price?: number | null
  status: StatusPostType
  thumnail?: ImageEntiy | null
  images?: ImageEntiy[] | null
  createdat: string
}

export interface TreeSelectDataType {
  value: string,
  title: string,
  children?: TreeSelectDataType[],
  disabled?: boolean,
  disableCheckbox?: boolean,
  selectable?: boolean,
  checkable?: boolean
}

export const OrderStatusEnums: readonly ['pending', 'completed', 'canceled', 'shipping', 'processing', 'draft'] = [
  'pending',
  'completed',
  'canceled',
  'shipping',
  'processing',
  'draft'
]

export type StatusOrderType = typeof OrderStatusEnums[number]

export const OrderComeFromEnums: readonly  ['web', 'app', 'live'] = [
  'web',
  'app',
  'live'
]

export type OrderComeFromType = typeof OrderComeFromEnums[number]

export interface OrderType {
  id: string,
  code: string,
  status: StatusOrderType,
  comeForm: OrderComeFromType,
  total: number,
  createdAt: string,
  updateAt: string,
}

export type TableDataType<T> = T & {
  key: string
}


export const StatusCommentEnums: readonly ["waiting", "public", "draft", "inactive"] = [
  "waiting",
  "public",
  "draft",
  "inactive"
]

export type StatusCommentType = typeof StatusCommentEnums[number]

export type CommentType = {
  id: string,
  userName: string,
  content?: string | null,
  status: StatusCommentType,
  star: number,
  createdAt: string,
  updateAt: string,
}