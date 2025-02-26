'use client'

import SystemImage from "@/app/_components/img";
import { LabelPostStatus } from "@/app/_components/label";
import SystemLink from "@/app/_components/link";
import { DashboardLayout } from "@/app/_components/system-layout";
import { TableProductsActions } from "@/app/products/sections";
import { DATA_PRODUCTS, getImageThumbnailRandom } from "@/domain/data-demo";
import { CategoryType, ColumnProductType } from "@/domain/type";
import { getPriceWithCurrency } from "@/presentation/product-controller";
import { dayFormatDateTime, dayFromNow, toTitleCase } from "@/ultil/helper";
import { ROUTERS } from "@/ultil/router";
import { Table, TableColumnsType, TableProps } from "antd";
import dayjs from "dayjs";
import React, { useEffect } from "react";

export default function ProductsPage() {
  const dataSources: ColumnProductType[] = DATA_PRODUCTS.map((item) => {
    return {
      key: item.code, ...item
    } as ColumnProductType
  }).sort((a, b) => dayjs(b.createdat).unix() - dayjs(a.createdat).unix())

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
  };

  const onChange: TableProps<ColumnProductType>['onChange'] = (pagination, filters, sorter, extra) => {
  };

  const [columns, setColumns] = React.useState<TableColumnsType<ColumnProductType>>([])

  useEffect(() => {
    // because have random data
    setColumns([
      Table.SELECTION_COLUMN, {
        fixed: 'left'
      }, {
        title: 'Product name',
        dataIndex: 'title',
        sortDirections: ['descend', 'ascend'],
        sorter: (a, b) => a.title.length - b.title.length,
        render: (_, item) => {
          return <div className={'flex gap-[10px] z-0 relative min-w-[240px]'}>
            <SystemImage
              src={getImageThumbnailRandom()}
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
      }, {
        title: 'Category',
        dataIndex: 'category',
        render: (value: CategoryType) => value.title
      }, {
        title: 'Store',
        dataIndex: 'store',
      }, {
        title: 'Price',
        dataIndex: 'price',
        render: (price) => <span className={'text-nowrap'}>{getPriceWithCurrency(price) ?? ''}</span>
      }, {
        title: 'Status',
        dataIndex: 'status',
        render: (value) => <LabelPostStatus label={value}/>
      }, {
        title: 'Created At',
        dataIndex: 'createdat',
        sortDirections: ['descend', 'ascend'],
        render: (value) => <span className={'text-size-small-a leading-[1.4] block min-w-[180px]'}>{dayFormatDateTime(value)}</span>,
        sorter: (a, b) => dayjs(a.createdat).unix() - dayjs(b.createdat).unix(),
      }, {
        title: 'Actions',
        render: (_, item) => <div className={'flex wrap gap-[10px] items-center'}>
          <SystemLink className={'text-sub hover:text-primary transition-colors leading-[1]'}><span className={'material-symbols-rounded !text-[20px]'}>edit</span></SystemLink>
          <SystemLink className={'text-sub hover:text-alert transition-colors leading-[1]'}><span className={'material-symbols-rounded !text-[20px]'}>delete</span></SystemLink>
        </div>
      },
    ])
  }, [])

  return (<DashboardLayout>
    <div className="dashboard-box mb-[20px] mx-default mt-[10px]">
      <TableProductsActions/>
      <div className="">
        <Table<ColumnProductType>
          columns={columns}
          dataSource={dataSources}
          rowSelection={{onChange: onSelectChange}}
          className={'mt-[30px] '}
          onChange={onChange}
          loading={columns.length === 0}
          rowClassName={'text-sub'}
          pagination={{
            position: ['bottomCenter'],
            pageSize: 10
          }}
          scroll={{x: true}}
        />
      </div>
    </div>
  </DashboardLayout>)
}