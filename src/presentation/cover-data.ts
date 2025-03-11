import {
  CategoryType,
  OrderComeFromType,
  StatusOrderType,
  OrderType,
  ProductType,
  StatusCommentType,
  StatusPostType,
  TableDataType,
  TreeSelectDataType
} from "@/domain/type";

export const coverCategoryToTreeSelectData = (data: CategoryType[]): TreeSelectDataType[] => {
  return data.map((item) => {
    return {
      value: item.title,
      title: item.title,
      children: item.children ? coverCategoryToTreeSelectData(item.children) : undefined
    }
  })
}

export const coverEntityHasChildrentToColumnType = (data: Array<{
  id: string,
  children?: any[],
  [key: string]: any
}>): TableDataType<any>[] => {
  return data.map((item) => {
    return {
      key: item.id, ...item,
      children: item.children ? coverEntityHasChildrentToColumnType(item.children) : undefined
    }
  })
}

export const coverEntityToColumnType = (data: Array<{
  id: string,
  [key: string]: any
}>): TableDataType<any>[] => {
  return data.map((item) => {
    return {
      key: item.id, ...item,
    }
  })
}

export const translateCodeStatusToTitle    = (code: StatusOrderType | StatusCommentType | StatusPostType): string => {
  switch(code) {
    case "canceled":
      return 'đã huỷ'
    case "completed":
      return 'hoàn thành'
    case "pending":
      return 'chưa giải quyết'
    case "shipping":
      return 'đang giao'
    case "draft":
      return 'nháp'
    case "inactive":
      return 'tạm ẩn'
    case "public":
      return 'công khai'
    case "waiting":
      return 'đang đợi'
    case "processing":
      return 'đang xử lý'
    default:
      return code;
  }
}
export const translateOrderComeFromToTitle = (code: OrderComeFromType): string => {
  switch(code) {
    case "app":
      return 'mobile'
    case "live":
      return 'của hàng'
    case "web":
      return 'website'
    default:
      return code;
  }
}