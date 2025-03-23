'use client'

import { LabelOrderStatus } from "@/app/_components/label";
import SystemLink from "@/app/_components/link";
import { UseCopyToClipboard } from "@/hooks/ullity-hook";
import { DATA_ORDER } from "@/domain/data-demo";
import {
  OrderStatusEnums, StatusOrderType, OrderType, TableDataType
} from "@/domain/type";
import {
  coverEntityToColumnType, translateCodeStatusToTitle, translateOrderComeFromToTitle
} from "@/presentation/cover-data";
import { getPriceWithCurrency } from "@/presentation/product-controller";
import {
  dayFormatDate, dayjsLocale, toTitleCase
} from "@/ultil/helper";
import { ROUTERS } from "@/ultil/router";
import {
  DeleteOutlined, EditOutlined
} from "@ant-design/icons";
import {
  Button, Dropdown, MenuProps, Popconfirm, Select, Table, TableProps, Tooltip
} from "antd"
import Search from "antd/es/input/Search";
import dayjs from "dayjs";
import React from "react";

type TableOrdersProps = {
  classname?: string
  hiddenAction?: boolean
}

export const TableOrders = (props: TableOrdersProps) => {
  const {copyToClipboard} = UseCopyToClipboard()

  const data = coverEntityToColumnType(DATA_ORDER).sort((a, b) => dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix())

  const columns: TableProps<TableDataType<OrderType>>['columns'] = [
    Table.SELECTION_COLUMN,
    {
      title: 'Id',
      dataIndex: 'code',
      fixed: 'left',
      render: (value) => {
        return <div className={'min-w-[110px]'}>
          <SystemLink
            url={ROUTERS.orderDetail}
            className={'text-title hover:text-primary'}
          >{value}</SystemLink>
          <Tooltip title={'Copy'}>
            <span
              className={'material-symbols-rounded text-[20px] align-text-top font-[300] text-sub hover:text-primary transition-colors cursor-pointer inline-block ml-1'}
              onClick={async() => await copyToClipboard(value)}
            >content_copy</span>
          </Tooltip>
        </div>
      }
    },
    {
      title: 'Order date',
      dataIndex: 'createdAt',
      sortDirections: [
        'descend',
        'ascend'
      ],
      render: (value) => dayFormatDate(value),
      sorter: (a, b) => 0,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => {

        const items: MenuProps['items'] = Object.values(OrderStatusEnums).map((item) => {
          return {
            key: item,
            label: toTitleCase(translateCodeStatusToTitle(item)),
          }
        })
        return <Dropdown
          menu={{items: items}}
          trigger={['click']}
        >
          <div>
            <LabelOrderStatus
              label={status}
              classname={'relative'}
            />
          </div>
        </Dropdown>
      },
      sortDirections: [
        'descend',
        'ascend'
      ],
      sorter: (a, b) => 0,
    },
    {
      title: 'Price',
      dataIndex: 'total',
      sortDirections: [
        'descend',
        'ascend'
      ],
      render: (value) => getPriceWithCurrency(value)
    },
    {
      title: 'Come from',
      dataIndex: 'comeForm',
      sortDirections: [
        'descend',
        'ascend'
      ],
      render: (value) => toTitleCase(translateOrderComeFromToTitle(value))
    },
    {
      title: '',
      render: () => {
        return <div className={'flex wrap gap-[5px] items-center'}>
          <Button
            href={ROUTERS.orderDetail}
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
      }
    },
  ]

  return <div className={`${props?.classname ?? ''} `}>
    {/* Filter */}
    <div className={'mb-[24px] flex flex-wrap gap-[10px_20px] '}>
      {!props.hiddenAction && <div className={'inline-flex gap-[6px] flex-1 sm:flex-none'}>
        <Select<StatusOrderType | 'delete'>
          className={'min-w-[220px] flex-1'}
          placeholder={'Hành động hàng loạt'}
          allowClear={true}
          options={[
            ...Object.values(OrderStatusEnums).map((item) => {
              return {
                value: item,
                label: `Chuyển sang ${translateCodeStatusToTitle(item)}`
              }
            }),
            {
              value: 'delete',
              label: <span className={'text-alert'}>Xoá đơn hàng</span>
            },
          ]}
        />
        <Button
          variant={'filled'}
          color={'blue'}
        >Áp dụng</Button>
      </div>}

      <div className={'inline-flex gap-[6px] flex-1 sm:flex-none'}>
        <Select
          className={'min-w-[150px] flex-1'}
          defaultValue={'default'}
          options={[
            {
              value: 'default',
              label: 'Tất cả ngày'
            },
            {
              value: '01/03/2025',
              label: toTitleCase(dayjsLocale('01/03/2025', 'DD/MM/YYYY').format('MMMM - YYYY'))
            },
            {
              value: '01/02/2025',
              label: toTitleCase(dayjsLocale('01/02/2025', 'DD/MM/YYYY').format('MMMM - YYYY'))
            },
            {
              value: '01/01/2025',
              label: toTitleCase(dayjsLocale('01/01/2025', 'DD/MM/YYYY').format('MMMM - YYYY'))
            },
          ]}
        />
        <Button
          variant={'filled'}
          color={'blue'}
        >Lọc</Button>
      </div>
      {/**/}
      <Search
        placeholder={'Mã đơn hang'}
        className={'min-w-[140px] flex-1 sm:flex-none !w-[unset]'}
      />
    </div>
    {/* Table */}
    <Table<TableDataType<OrderType>>
      dataSource={data}
      columns={columns}
      rowSelection={{}}
      scroll={{x: true}}
      rowClassName={'text-sub'}
      pagination={{pageSize: 20}}
    />
  </div>
}