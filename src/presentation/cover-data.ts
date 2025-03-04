import { CategoryType, OrderType, ProductType, TableDataType, TreeSelectDataType } from "@/domain/type";

export const coverCategoryToTreeSelectData = (data: CategoryType[]): TreeSelectDataType[] => {
  return data.map((item) => {
    return {
      value: item.title,
      title: item.title,
      children: item.children ? coverCategoryToTreeSelectData(item.children) : undefined
    }
  })
}

export const coverProductToColumnType = (data: ProductType[]): TableDataType<ProductType>[] => {
  return data.map(item => {
    return {
      key: item.code, ...item
    } as TableDataType<ProductType>
  })
}

export const coverCategoryToColumnCategory = (data: CategoryType[]): TableDataType<CategoryType>[] => {
  return data.map((item) => {
    return {
      key: item.code, ...item,
      children: item.children ? coverCategoryToColumnCategory(item.children) : undefined
    }
  })
}

export const coverOrderToColumntype = (data: OrderType[]): TableDataType<OrderType>[] => {
  return data.map((item) => {
    return {
      key: item.code, ...item
    }
  })
}