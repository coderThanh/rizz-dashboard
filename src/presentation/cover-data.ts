import { CategoryType, ColumnCategoryType, TreeSelectDataType } from "@/domain/type";

export const coverCategoryToTreeSelectData = (data: CategoryType[]): TreeSelectDataType[] => {
  return data.map((item) => {
    return {
      value: item.title,
      title: item.title,
      children: item.children ? coverCategoryToTreeSelectData(item.children) : undefined
    }
  })
}

export const coverCategoryToColumnCategory = (data: CategoryType[]): ColumnCategoryType[] => {
  return data.map((item) => {
    return {
      key: item.code, ...item,
      children: item.children ? coverCategoryToColumnCategory(item.children) : undefined
    }
  })
}