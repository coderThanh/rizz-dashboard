'use client'

import { StatusPostEnum } from "@/domain/type";
import { UseEventClickOutside } from "@/hooks/ullity-hook";
import { ROUTERS } from "@/ultil/router";
import { FilterOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Select } from "antd";
import { ReactNode } from "react";

const {Search} = Input

type TableProductsActionsProps = {
  classname?: string
}

export const TableProductsActions = (props: TableProductsActionsProps) => {
  const {
          isShow, changeShow, refPopup
        } = UseEventClickOutside(false)


  const items: ReactNode[] = [
    <Checkbox key={'2'}>Sport</Checkbox>,
    <Checkbox key={'3'}>Music</Checkbox>,
    <Checkbox key={'4'}>Inmertior</Checkbox>,
  ]

  const statusItems: ReactNode[] = Object.values(StatusPostEnum).map((item, index) => {
    return <Checkbox key={index + 1}>{item}</Checkbox>
  })

  return <div className={`${props?.classname ?? ''}`}>
    <div className={'flex gap-[14px] items-center justify-between flex-wrap'}>
      <h4 className={'text-size-2 mb-[0] line-clamp-1'}>Propducts</h4>
      <div className="flex gap-[14px_10px] items-center flex-wrap">
        {/**/}
        <div className={'flex gap-[10px] items-center order-3'}>
          <span className={'text-size-small text-sub w-max'}>Entries <span className={'hidden  sm:inline'}>per page</span></span>
          <Select
            className={'w-[60px]'}
            placeholder="Select a person"
            filterOption={(input, option) => (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())}
            defaultValue={10}
            options={[
              {
                value: 5, label: 5
              }, {
                value: 10, label: 10
              }, {
                value: 15, label: 15
              }, {
                value: 20, label: 20
              },
            ]}
          />
        </div>
        <Search
          className={'sm:max-w-[200px] min-w-[150px] order-3 flex-1'}
          placeholder={'Search..'}
          onClick={() => {
          }}
        />
        {/**/}
        <div
          ref={refPopup as any}
          className={'relative order-2 sm:order-5 flex-1 sm:flex-none '}
        >
          <Button
            className={'w-full'}
            icon={<FilterOutlined/>}
            type={'default'}
            color={'orange'}
            variant={'filled'}
            onClick={() => changeShow(!isShow)}
          >Filter</Button>
          <div className={`bg-bg p-[10px] rounded-radius-1 shadow-1 absolute z-10 top-100 sm:right-0 left-0 sm:left-[unset]   ${isShow ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'}`}>
            {/* content */}
            <div className={'flex gap-[15px]'}>
              <div className={'flex gap-[8px] flex-col max-h-[200px] w-[140px] overflow-x-hidden overflow-y-auto scrollbar'}>
                <div className={'text-sub text-size-small-a mt-[8px]'}>Category</div>
                {items.map((item, index) => <div key={`filtter-${index}`}>{item}</div>)}
              </div>
              <div className={'flex gap-[8px] flex-col max-h-[200px] w-[120px] overflow-x-hidden overflow-y-auto scrollbar'}>
                <div className={'text-sub text-size-small-a mt-[8px]'}>Status</div>
                {statusItems.map((item, index) => <div key={`filtter-${index}`}>{item}</div>)}
              </div>
            </div>
            {/* Actions */}
            <div className={'mt-[12px] border-t border-solid border-border-low pt-[12px] flex flex-wrap gap-[12px] justify-end'}>
              <Button
                size={'small'}
                color={'default'}
                variant={'filled'}
              >Reset</Button>
              <Button
                size={'small'}
                color={'default'}
                variant={'solid'}
              >Áp dụng</Button>
            </div>
          </div>
        </div>
        <Button
          icon={<PlusOutlined/>}
          color={'primary'}
          type={'primary'}
          variant={'filled'}
          href={ROUTERS.productDetail}
          className={'order-2 sm:order-5 flex-1 sm:flex-none'}
        >
          Add Product
        </Button>
      </div>
    </div>
    {/*    */}
    <div className={'mt-[10px]'}>

    </div>
  </div>
}