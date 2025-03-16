'use client'

import { InputLabel, FieldCategory, SelectTags } from "@/app/_components/field/field";
import { DATA_CATEGORY_PRODUCT_HAS_CHILREN } from "@/domain/data-demo";
import { formatterPrice, getSymbolCurrency } from "@/presentation/product-controller";
import { DATE_FORMAT_VI } from "@/ultil/const";
import { DatePicker, Input, InputNumber } from "antd";
import dayjs from "dayjs";
import { ReactNode, useCallback, useState } from "react";


type BoxPostDetailGeneralProps = {
  children?: ReactNode
  classname?: string
}

export const BoxPostDetailGeneral = (props: BoxPostDetailGeneralProps) => {
  const [isShowCalendar, setIsShowCalendar] = useState(false)

  const symbolCurrentcy = getSymbolCurrency()

  const fieldWrapClass = `grid grid-cols-[110px_1fr] gap-[10px]`

  const inputFormatterPrice = useCallback((value: number | undefined) => {
    return value != null ? formatterPrice(value) : `${value}`;
  }, [])

  return <div className={`${props?.classname ?? ''} dashboard-box mx-default`}>
    <h5 className={'text-[1rem] mb-[20px]'}>Tổng quan</h5>
    <div className={'grid lg:grid-cols-2 gap-[24px_30px] items-start'}>

      <div className={'grid gap-[24px]'}>
        {/*. */}
        <div className={`${fieldWrapClass}`}>
          <InputLabel
            title={'Tiêu đề'}
            size={'small'}
            isRequire={true}
          />
          <Input/>
        </div>
        {/*. */}
        <div className={`${fieldWrapClass}`}>
          <InputLabel
            title={'Tags'}
            size={'small'}
          />
          <SelectTags/>
        </div>
      </div>

      <div className={`grid items-start sm:grid-cols-[110px_1fr] gap-[3px_10px]`}>
        <InputLabel
          title={'Danh mục'}
          size={'small'}
        />
        <FieldCategory values={DATA_CATEGORY_PRODUCT_HAS_CHILREN}/>
      </div>
    </div>
  </div>
}





