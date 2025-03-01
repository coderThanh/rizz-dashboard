'use client'

import { SystemToolTip } from "@/app/_components/tooltip";
import { CategoryType } from "@/domain/type";
import { Checkbox, TooltipProps } from "antd";

type InputLabelProps = {
  classname?: string
  title: string
  htmlFor?: string
  size?: 'default' | 'small'
  isRequire?: boolean
  tooltip?: string
  placement?: TooltipProps['placement']
}

export const InputLabel = (props: InputLabelProps) => {
  return <label
    htmlFor={props.htmlFor}
    className={`${props?.classname ?? ''} inline-block mb-[8px] leading-[1.4] ${props?.size === 'small' ? 'text-size-small-a' : 'text-size-small'}`}
  >
    {props.title}
    {props.isRequire && <span className={'text-alert'}> *</span>}
    {props?.tooltip && <>
      {" "}
      <SystemToolTip
        title={props?.tooltip}
        placement={props?.placement}
        classname={`${props?.size === 'small' ? '!text-[16px]' : '!text-[19px]'}`}
      />
    </>}
  </label>
}


type FieldCategoryProps = {
  classname?: string
  values: CategoryType[]
}

export const FieldCategory = (props: FieldCategoryProps) => {
  return <div
    className={`${props?.classname ?? ''} border border-border-low border-solid p-[15px] rounded-radius-1 overflow-y-auto scrollbar grid gap-[14px] max-h-[200px]`}
  >
    {props.values.map((item, index) => <div key={`cat-${index}`}>
      <Checkbox
        className={'block w-full'}
      >
        {item.title}
      </Checkbox>
      {item?.children && item?.children?.length > 0 ? <div className={'grid gap-[10px] pl-[24px] mb-[5px] mt-[12px]'}>
        {item.children.map((item, index) => <Checkbox
          key={`cat-child-${index}`}
          className={'block w-full'}
        >{item.title}</Checkbox>)}
      </div> : null}
    </div>)}
  </div>
}


