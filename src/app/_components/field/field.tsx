'use client'

import { SystemToolTip } from "@/app/_components/tooltip";
import { DATA_PRODUCTS, DATA_TAGS, DATA_USERS } from "@/domain/data-demo";
import { CategoryType, StatusOrderType, TagType, UserType } from "@/domain/type";
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
  isBox?: boolean
}

export const FieldCategory = ({
  isBox = true,
  ...props
}: FieldCategoryProps) => {
  return <div
    className={`${props?.classname ?? ''} ${isBox ? 'border border-border-low border-solid p-[15px] rounded-radius-1 max-h-[200px]' : ''} overflow-y-auto scrollbar grid gap-[14px] `}
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

  return <Select
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
type SelectPostProps = {
  classname?: string
}

export const SelectPost = (props: SelectPostProps) => {
  const options: DefaultOptionType[] = DATA_PRODUCTS.map((item) => {
    return {
      label: item.title,
      value: item.code,
    }
  })

  return <Select
    showSearch
    placeholder={'Search post by name...'}
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
  const optionsUser = DATA_USERS.map((item) => {
    return {
      label: item.userName,
      value: item.id,
    }
  })

  return <Select<UserType>
    showSearch={true}
    options={optionsUser}
    className={`${props?.classname ?? ''} w-full`}
    placeholder={'Search user by name'}
    optionFilterProp={'label'}
    allowClear={true}
  />
}

type SelectTagsProps = {
  classname?: string
}

export const SelectTags = (props: SelectTagsProps) => {
  const options = DATA_TAGS.map((item) => {
    return {
      label: item.title,
      value: item.id,
    }
  })

  return <Select<TagType>
    mode={'tags'}
    allowClear={true}
    showSearch={true}
    className={`${props?.classname ?? ''}`}
    options={options}
    optionFilterProp={'label'}
    placeholder={'Select tag'}
  />
}


