'use client'

import SystemImage from "@/app/_components/img";
import { LabelPostStatus } from "@/app/_components/label";
import SystemLink from "@/app/_components/link";
import { DashboardLayout } from "@/app/_components/system-layout";
import { TableProductsActions } from "@/app/products/sections";
import { DATA_PRODUCTS, getImageThumbnailRandom } from "@/domain/data-demo";
import { CategoryType, ProductType, TableDataType } from "@/domain/type";
import { coverProductToColumnType } from "@/presentation/cover-data";
import { getPriceWithCurrency } from "@/presentation/product-controller";
import { dayFormatDateTime, toTitleCase } from "@/ultil/helper";
import { ROUTERS } from "@/ultil/router";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Table, TableColumnsType } from "antd";
import dayjs from "dayjs";
import React, { useEffect } from "react";

export default function ProductsPage() {
  const dataSources: TableDataType<ProductType>[] = coverProductToColumnType(DATA_PRODUCTS).sort((a, b) => dayjs(b.createdat).unix() - dayjs(a.createdat).unix())

  const [columns, setColumns] = React.useState<TableColumnsType<TableDataType<ProductType>>>([])

  useEffect(() => {
    // because have random data
    setColumns([
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
            color={'blue'}
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
              color={'danger'}
            />
          </Popconfirm>
        </div>
      },
    ])
  }, [])

  return (<DashboardLayout>
    <div className="dashboard-box mb-[20px] mx-default mt-[10px]">
      <TableProductsActions/>
      <div className="">
        <Table<TableDataType<ProductType>>
          rowSelection={{}}
          columns={columns}
          dataSource={dataSources}
          className={'mt-[30px] '}
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