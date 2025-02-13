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

export type MenuItem = {
  url?: string
  text: string
  chilren?: MenuItem[]
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
