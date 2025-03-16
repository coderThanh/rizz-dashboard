'use client'

import { SystemToolTip } from "@/app/_components/tooltip";
import { DATA_PRODUCTS } from "@/domain/data-demo";
import { CategoryType, StatusOrderType } from "@/domain/type";
import { Checkbox, Select, TooltipProps } from "antd";
import { DefaultOptionType } from "rc-select/es/Select";

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

//
type SelectProductProps = {
  classname?: string
}

export const SelectProduct = (props: SelectProductProps) => {
  const options: DefaultOptionType[] = DATA_PRODUCTS.map((item) => {
    return {
      label: item.title,
      value: item.code,
    }
  })

  return  <Select
    showSearch
    placeholder={'Search product by name...'}
    onSearch={() => {
    }}
    optionFilterProp={'label'}
    options={options}
    allowClear={true}
    className={`w-full ${props?.classname ?? ''}`}
  />
}

//
type SelectUserProps = {
  classname?: string
}

export const SelectUser = (props: SelectUserProps) => {
  const optionsUser = [
    {
      value: '1',
      label: 'Nguyen Van A'
    },
    {
      value: '2',
      label: 'Nguyen Van B'
    },
    {
      value: '3',
      label: 'Nguyen Van C'
    },
    {
      value: '4',
      label: 'Nguyen Van D'
    },
  ]

  return <div className={`${props?.classname ?? ''}`}>
    <Select
      showSearch={true}
      options={optionsUser}
      className={`${props?.classname ?? ''} w-full`}
      placeholder={'Search...'}
      optionFilterProp={'label'}
      mode={'multiple'}
      allowClear={true}
    />
  </div>
}


