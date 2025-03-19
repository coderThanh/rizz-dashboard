'use client'

import SystemImage from "@/app/_components/img";
import { LabelPostStatus, LabelUserStatus } from "@/app/_components/label";
import SystemLink from "@/app/_components/link";
import { DATA_PRODUCTS, DATA_USERS, getPeopleThumbnailRandom, getProductThumbnailRandom } from "@/domain/data-demo";
import { StatusUserType, UserStatusEnums, TableDataType, ProductType, CategoryType, UserType } from "@/domain/type";
import { UseEventClickOutside } from "@/hooks/ullity-hook";
import { coverEntityToColumnType, translateUserStatusComeFromToTitle } from "@/presentation/cover-data";
import { formatterNumber, getPriceWithCurrency } from "@/presentation/product-controller";
import { dayFormatDateTime, toTitleCase } from "@/ultil/helper";
import { ROUTERS } from "@/ultil/router";
import { DeleteOutlined, EditOutlined, FilterOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, Popconfirm, Select, Table, TableColumnsType } from "antd";
import Search from "antd/es/input/Search";
import dayjs from "dayjs";
import React, { ReactNode } from "react";

type BoxUsersProps = {
  className?: string
}

export const BoxUsers = (props: BoxUsersProps) => {
  const {
          refPopup,
          changeShow,
          isShow,
          isLeft
        } = UseEventClickOutside(false)

  return <div className={`${props?.className ?? ''} dashboard-box`}>
    {/* actions */}
    <div className={'flex flex-wrap gap-[12px_10px]'}>
      <h5 className={'dashboard-box-title flex-1 '}>Users</h5>
      <div className={'basis-full  lg:basis-[340px] flex gap-[10px]'}>
        <Select<StatusUserType | 'delete'>
          className={'flex-1'}
          placeholder={'Hành động hàng loạt'}
          allowClear={true}
          options={[
            ...Object.values(UserStatusEnums).map((item) => {
              return {
                value: item,
                label: `Chuyển sang ${translateUserStatusComeFromToTitle(item)}`
              }
            }),
            {
              value: 'delete',
              label: <span className={'text-alert'}>Xoá người dùng</span>
            },
          ]}
        />
        <Button
          color={'blue'}
          variant={'filled'}
        >Áp dụng</Button>

      </div>
      <Search
        placeholder={'Search by name...'}
        className={'lg:max-w-[220px] '}
      />
      <div
        className={'flex-1 lg:flex-none relative'}
        ref={refPopup as any}
      >
        <Button
          color={'orange'}
          variant={'filled'}
          icon={<FilterOutlined/>}
          className={'w-full'}
          onClick={() => changeShow(!isShow)}
        >Filter</Button>
        <div className={`bg-bg p-[10px] w-[200px] rounded-radius-1 shadow-1 border border-solid border-border-low absolute z-10 top-100 ${isLeft ? 'left-0' : 'right-0'}    ${isShow ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'}`}>
          {/* content */}
          <div className={'max-h-[200px]  overflow-x-hidden overflow-y-auto scrollbar'}>
            <div className={'text-sub text-size-small-a mb-[8px]'}>Status</div>
            <div className={'grid gap-[10px]'}>
              {Object.values(UserStatusEnums).map((item, index) =>
                <Checkbox key={`filtter-${index}`}>{toTitleCase(translateUserStatusComeFromToTitle(item))}</Checkbox>)}
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
              onClick={() => changeShow(false)}
            >Áp dụng</Button>
          </div>
        </div>
      </div>
      <Button
        color={'primary'}
        variant={'filled'}
        icon={<PlusOutlined/>}
        href={ROUTERS.userDetail}
        className={'flex-1 lg:flex-none'}
      >Add user</Button>
    </div>

    {/* -- */}
    <TableUser/>
  </div>
}


type TablUserrops = {
  classname?: string
  children?: ReactNode
}

export const TableUser = (props: TablUserrops) => {
  const dataSources: TableDataType<UserType>[] = coverEntityToColumnType(DATA_USERS)

  const [columns, setColumns] = React.useState<TableColumnsType<TableDataType<UserType>>>([
    Table.SELECTION_COLUMN,
    {
      fixed: 'left'
    },
    {
      title: 'Customer',
      dataIndex: 'title',
      sortDirections: [
        'descend',
        'ascend'
      ],
      sorter: (a, b) => 0,
      render: (_, item, index) => {
        return <div className={'flex gap-[10px] z-0 items-center relative min-w-[240px]'}>
          <SystemImage
            src={getPeopleThumbnailRandom(index + 1)}
            alt={item?.userName}
            radius={300}
            ratio={100}
            className={'min-w-[40px] w-[40px] mt-[2px] z-1'}
          />
          <div className={'flex-1'}>
            <SystemLink
              url={ROUTERS.userDetail}
              className={' mb-0 line-clamp-2 text-title transition-colors hover:text-primary capitalize'}
            >{item.userName}</SystemLink>
          </div>
        </div>
      }
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => <LabelUserStatus label={value}/>
    },
    {
      title: 'Order',
      dataIndex: 'totalOrder',
      render: (value)=> formatterNumber(value)
    },
    {
      title: 'Spent',
      dataIndex: 'totalCost',
      render: (price) => <span className={'text-nowrap'}>{getPriceWithCurrency(price) ?? ''}</span>
    },

    {
      title: 'Actions',
      render: () => <div className={'flex wrap gap-[5px] items-center'}>
        <Button
          href={ROUTERS.userDetail}
          shape={'circle'}
          icon={<EditOutlined style={{fontSize: 16}}/>}
          variant={'text'}
          color={'default'}
        />
        <Popconfirm
          title="Delete the user"
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
    <Table<TableDataType<UserType>>
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