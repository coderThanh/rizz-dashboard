'use client'

import { FieldCategory } from "@/app/_components/field/field";
import SystemImage from "@/app/_components/img";
import { LabelPostStatus } from "@/app/_components/label";
import SystemLink from "@/app/_components/link";
import { DATA_CATEGORY_PRODUCT_HAS_CHILREN, DATA_PRODUCTS, getProductThumbnailRandom } from "@/domain/data-demo";
import { CategoryType, ProductType, StatusPostEnums, StatusPostType, TableDataType } from "@/domain/type";
import { UseEventClickOutside } from "@/hooks/ullity-hook";
import { coverEntityToColumnType, translateCodeStatusToTitle } from "@/presentation/cover-data";
import { getPriceWithCurrency } from "@/presentation/product-controller";
import { dayFormatDateTime, toTitleCase } from "@/ultil/helper";
import { ROUTERS } from "@/ultil/router";
import { DeleteOutlined, EditOutlined, FilterOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Popconfirm, Select, Table, TableColumnsType } from "antd";
import dayjs from "dayjs";
import React, { ReactNode, useEffect } from "react";

const {Search} = Input

type TableProductsActionsProps = {
  classname?: string
}

export const TableProductsActions = (props: TableProductsActionsProps) => {
  const {
          isShow,
          changeShow,
          refPopup, isLeft
        } = UseEventClickOutside(false)


  const statusItems: ReactNode[] = Object.values(StatusPostEnums).map((item, index) => {
    return <Checkbox key={index + 1}>{toTitleCase(translateCodeStatusToTitle(item))}</Checkbox>
  })

  return <div className={`${props?.classname ?? ''}`}>
    <div className={'flex gap-[14px] items-center justify-between flex-wrap'}>
      <h4 className={'text-size-2 mb-[0] line-clamp-1'}>Products</h4>
      <div className="flex gap-[14px_10px] items-center flex-wrap">
        <div className={'inline-flex gap-[6px] flex-1 sm:flex-none'}>
          <Select<StatusPostType | 'delete'>
            className={'min-w-[220px] flex-1'}
            placeholder={'Hành động hàng loạt'}
            allowClear={true}
            options={[
              ...Object.values(StatusPostEnums).map((item) => {
                return {
                  value: item,
                  label: `Chuyển sang ${translateCodeStatusToTitle(item)}`
                }
              }),
              {
                value: 'delete',
                label: <span className={'text-alert'}>Xoá sản phẩm</span>
              },
            ]}
          />
          <Button
            variant={'filled'}
            color={'blue'}
          >Áp dụng</Button>
        </div>

        <Search
          className={'min-w-full lg:min-w-[200px] flex-1'}
          placeholder={'Search...'}
          onClick={() => {
          }}
        />
        {/**/}
        <div
          ref={refPopup as any}
          className={'relative  flex-1 lg:flex-none '}
        >
          <Button
            className={'w-full'}
            icon={<FilterOutlined/>}
            type={'default'}
            color={'orange'}
            variant={'filled'}
            onClick={() => changeShow(!isShow)}
          >Filter</Button>
          <div className={`bg-bg p-[10px] rounded-radius-1 shadow-1 border border-solid border-border-low absolute z-10 top-100 ${isLeft ? 'left-0' : 'right-0'}   ${isShow ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'}`}>
            {/* content */}
            <div className={'flex gap-[15px]'}>
              <div className={'flex gap-[8px] flex-col max-h-[240px] w-[200px] sm:w-[240px] overflow-x-hidden overflow-y-auto scrollbar'}>
                <div className={'text-sub text-size-small-a mt-[8px]'}>Category</div>
                <FieldCategory
                  values={DATA_CATEGORY_PRODUCT_HAS_CHILREN}
                  isBox={false}
                />
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
          className={' flex-1 lg:flex-none'}
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

type TableProductsProps = {
  classname?: string
  children?: ReactNode
}

export const TableProducts = (props: TableProductsProps) => {
  const dataSources: TableDataType<ProductType>[] = coverEntityToColumnType(DATA_PRODUCTS).sort((a, b) => dayjs(b.createdat).unix() - dayjs(a.createdat).unix())

  const [columns, setColumns] = React.useState<TableColumnsType<TableDataType<ProductType>>>([
    Table.SELECTION_COLUMN,
    {
      fixed: 'left'
    },
    {
      title: 'Product name',
      dataIndex: 'title',
      sortDirections: [
        'descend',
        'ascend'
      ],
      sorter: (a, b) => 0,
      render: (_, item, index) => {
        return <div className={'flex gap-[10px] z-0 relative min-w-[240px]'}>
          <SystemImage
            src={getProductThumbnailRandom(index + 1)}
            alt={item?.title}
            radius={5}
            ratio={100}
            className={'min-w-[40px] w-[40px] mt-[2px] z-1'}
          />
          <div className={'flex-1'}>
            <SystemLink
              url={ROUTERS.productDetail}
              className={'font-[5010] mb-0 line-clamp-2 text-title transition-colors hover:text-primary'}
            >{toTitleCase(item.title)}</SystemLink>
            {item?.code && <span className={'block text-sub'}> {item.code}</span>}
          </div>
        </div>
      }
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: (value: CategoryType) => value.title
    },
    {
      title: 'Store',
      dataIndex: 'store',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (price) => <span className={'text-nowrap'}>{getPriceWithCurrency(price) ?? ''}</span>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => <LabelPostStatus label={value}/>
    },
    {
      title: 'Created At',
      dataIndex: 'createdat',
      sortDirections: [
        'descend',
        'ascend'
      ],
      render: (value) =>
        <span className={'text-size-small-a leading-[1.4] block min-w-[180px]'}>{dayFormatDateTime(value)}</span>,
      sorter: (a, b) => 0,
    },
    {
      title: 'Actions',
      render: () => <div className={'flex wrap gap-[5px] items-center'}>
        <Button
          href={ROUTERS.productDetail}
          shape={'circle'}
          icon={<EditOutlined style={{fontSize: 16}}/>}
          variant={'text'}
          color={'default'}
        />
        <Popconfirm
          title="Delete the post"
          description="Are you sure to delete this task?"
          okText="Yes"
          cancelText="No"
          placement={'bottomRight'}
        >
          <Button
            shape={'circle'}
            icon={<DeleteOutlined style={{fontSize: 16}}/>}
            variant={'text'}
            color={'default'}
          />
        </Popconfirm>
      </div>
    },
  ])


  return <div className={`${props?.classname ?? ''}`}>
    <Table<TableDataType<ProductType>>
      rowSelection={{}}
      columns={columns}
      dataSource={dataSources}
      className={'mt-[30px] '}
      loading={columns.length === 0}
      rowClassName={'text-sub'}
      pagination={{
        pageSize: 10
      }}
      scroll={{x: true}}
    />
  </div>
}