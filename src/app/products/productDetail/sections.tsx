'use client'

import { Field, FieldCateogry } from "@/app/_components/field/field";
import { DATA_CATEGORY_PRODUCT_HAS_CHILREN } from "@/domain/data-demo";
import { formatterPrice, getSymbolCurrency } from "@/presentation/product-controller";
import { DATE_FORMAT_VI } from "@/ultil/const";
import { DatePicker, Input, InputNumber } from "antd";
import dayjs from "dayjs";
import { ReactNode, useCallback, useState } from "react";


type BoxProductDetailGeneralProps = {
  children?: ReactNode
  classname?: string
}

export const BoxProductDetailGeneral = (props: BoxProductDetailGeneralProps) => {
  const [isShowCalendar, setIsShowCalendar] = useState(false)

  const symbolCurrentcy = getSymbolCurrency()

  const fieldWrapClass = `grid grid-cols-[110px_1fr] gap-[10px]`

  const inputFormatterPrice = useCallback((value: number | undefined) => {
    return value != null ? formatterPrice(value) : `${value}`;
  }, [])

  return <div className={`${props?.classname ?? ''} dashboard-box mx-default`}>
    <h5 className={'text-[1rem] mb-[20px]'}>Tổng quan</h5>
    <div className={'grid lg:grid-cols-2 gap-[20px_30px] items-start'}>

      <div className={'grid gap-[24px]'}>
        {/*. */}
        <div className={`${fieldWrapClass}`}>
          <Field
            title={'Tiêu đề'}
            size={'small'}
            isRequire={true}
          />
          <Input/>
        </div>
        {/*. */}
        <div className={`${fieldWrapClass}`}>
          <Field
            title={'Giá bán thường'}
            size={'small'}
          />
          <InputNumber<number>
            formatter={inputFormatterPrice}
            addonAfter={symbolCurrentcy}
            controls={false}
          />
        </div>
        {/*. */}
        <div className={`${fieldWrapClass}`}>
          <div>
            <Field
              title={'Giá khuyến mãi'}
              size={'small'}
            />
            <button
              className={'block mt-[2px] text-size-small-a text-primary underline underline-offset-2 '}
              onClick={(_) => setIsShowCalendar(!isShowCalendar)}
            >{isShowCalendar ? 'Ẩn lịch' : 'Lên lịch'}</button>
          </div>
          <InputNumber<number>
            formatter={inputFormatterPrice}
            addonAfter={symbolCurrentcy}
            controls={false}
            className={'w-full'}
          />

        </div>
        {/* Calendar*/}
        {isShowCalendar && <div className={`${fieldWrapClass}`}>
          <Field
            title={'Ngày giảm giá'}
            size={'small'}
          />
          <div className={'grid gap-[15px]'}>
            <DatePicker
              placeholder={'Từ ngày'}
              format={`${DATE_FORMAT_VI} HH:mm`}
              showTime={{format: 'HH:mm'}}
              className={'w-full'}
              minDate={dayjs()}
            />
            <DatePicker
              placeholder={'Đến ngày'}
              format={`${DATE_FORMAT_VI} HH:mm`}
              showTime={{format: 'HH:mm'}}
              className={'w-full'}
              minDate={dayjs()}
            />
          </div>
        </div>}
      </div>

      <div className="grid gap-[24px] items-start">
        <div className={`grid items-start sm:grid-cols-[110px_1fr] gap-[10px_10px]`}>
          <Field
            title={'Danh mục'}
            size={'small'}
          />
          <FieldCateogry values={DATA_CATEGORY_PRODUCT_HAS_CHILREN}/>
        </div>
      </div>
    </div>
  </div>
}





