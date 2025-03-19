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

export interface TagType {
  id: string
  title: string
  createdat?: string
}

export enum StatusPostEnums {
  public = 'public',
  draft = 'draft',
  inactive = 'inactive'
}

export type StatusPostType = keyof typeof StatusPostEnums;

export interface ProductType {
  title: string
  id: string
  code?: string | null
  category?: CategoryType | null
  description?: string | null
  content?: string | null
  store?: number | null
  price?: number | null
  status: StatusPostType
  thumnail?: ImageEntiy | null
  images?: ImageEntiy[] | null
  createdat: string
}

export interface PostType {
  id: string
  title: string
  category?: CategoryType | null
  description?: string | null
  content?: string | null
  status: StatusPostType
  thumnail?: ImageEntiy | null
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

export enum OrderStatusEnums {
  pending = 'pending',
  completed = 'completed',
  canceled = 'canceled',
  shipping = 'shipping',
  processing = 'processing',
  draft = 'draft'
}

export enum UserStatusEnums {
  active = 'active',
  inactive = 'inactive',
  vip = 'vip'
}

export enum StatusCommentEnums {
  waiting = 'waiting',
  public = 'public',
  draft = 'draft',
  inactive = 'inactive'
}

export enum OrderComeFromEnums {
  web = 'web',
  app = 'app',
  live = 'live'
}

export type StatusUserType = keyof typeof UserStatusEnums;

export type StatusCommentType = keyof typeof StatusCommentEnums;

export type OrderComeFromType = keyof typeof OrderComeFromEnums;

export type StatusOrderType = keyof typeof OrderStatusEnums;

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


export type CommentType = {
  id: string,
  userName: string,
  content?: string | null,
  status: StatusCommentType,
  star: number,
  createdAt: string,
  updateAt: string,
}

export enum UserRoleEnums {
  admin = 'admin',
  user = 'user'
}

export type UserRoleType = keyof typeof UserRoleEnums

export type UserType = {
  id: string,
  userName: string,
  email: string,
  phone?: string | null,
  status: StatusUserType,
  role: UserRoleType,
  totalOrder?: number | null,
  totalCost?: number | null,
  createdAt: string,
}