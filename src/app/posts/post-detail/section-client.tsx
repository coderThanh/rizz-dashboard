'use client'

import { InputLabel, FieldCategory, SelectTags } from "@/app/_components/field/field";
import { DATA_CATEGORY_PRODUCT_HAS_CHILREN } from "@/domain/data-demo";
import { Input } from "antd";
import { ReactNode } from "react";

type BoxPostDetailGeneralProps = {
  children?: ReactNode
  classname?: string
}

export const BoxPostDetailGeneral = (props: BoxPostDetailGeneralProps) => {
  return <div className={`${props?.classname ?? ''} dashboard-box mx-default`}>
    <h5 className={'text-[1rem] mb-[20px]'}>Tổng quan</h5>
    <div className={'grid lg:grid-cols-2 gap-[24px_30px] items-start'}>

      <div className={'grid gap-[24px]'}>
        {/*. */}
        <div className={`grid grid-cols-[110px_1fr] gap-[10px]`}>
          <InputLabel
            title={'Tiêu đề'}
            size={'small'}
            isRequire={true}
          />
          <Input/>
        </div>
        {/*. */}
        <div className={`grid grid-cols-[110px_1fr] gap-[10px]`}>
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





