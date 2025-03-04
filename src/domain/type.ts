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
  code: string
  description?: string
  createdat?: string
  parrentId?: string
  children?: CategoryType[]
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

export interface TreeSelectDataType {
  value: string,
  title: string,
  children?: TreeSelectDataType[],
  disabled?: boolean,
  disableCheckbox?: boolean,
  selectable?: boolean,
  checkable?: boolean
}

export const OrderStatusType: readonly ['pending', 'completed', 'canceled', 'shipping', 'draft'] = [
  'pending',
  'completed',
  'canceled',
  'shipping',
  'draft'
]

export const OrderComeFromType: readonly  ['web', 'app', 'live'] = [
  'web',
  'app',
  'live'
]

export interface OrderType {
  id: string,
  code: string,
  status: (typeof OrderStatusType)[number],
  comeForm: (typeof OrderComeFromType)[number],
  total: number,
  createdAt: string,
  updateAt: string,
}

export type TableDataType<T> = T & { key: string }