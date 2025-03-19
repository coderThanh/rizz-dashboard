'use client'

import { SelectProduct } from "@/app/_components/field/field";
import { LabelCommentStatus } from "@/app/_components/label";
import { UseCopyToClipboard } from "@/hooks/ullity-hook";
import {
  DATA_PRODUCTS, DATA_REVIEWS
} from "@/domain/data-demo";
import {
  StatusCommentType, StatusPostEnums, TableDataType, CommentType, StatusCommentEnums
} from "@/domain/type";
import {
  coverEntityToColumnType, translateCodeStatusToTitle
} from "@/presentation/cover-data";
import {
  dayFormatDateTime, toTitleCase
} from "@/ultil/helper";
import { ROUTERS } from "@/ultil/router";
import {
  DeleteOutlined, EditOutlined
} from "@ant-design/icons";
import {
  Button, Dropdown, MenuProps, Popconfirm, Rate, Select, Table, TableProps
} from "antd"
import dayjs from "dayjs";
import React from "react";

type BoxReviewsProps = {
  classname?: string
}

export const BoxReviews = (props: BoxReviewsProps) => {
  return <div className={`${props?.classname ?? ''} `}>
    {/* Filter */}
    <div className={'mb-[24px] flex flex-wrap lg:flex-nowrap gap-[10px_20px]  '}>
      <div className={'inline-flex gap-[6px] flex-1 sm:flex-none'}>
        <Select<StatusCommentType | 'delete' >
          className={'min-w-[200px] flex-1'}
          placeholder={'Hành động hàng loạt'}
          options={[
            ...Object.values(StatusPostEnums).map((item) => {
              return {
                value: item,
                label: `Chuyển sang ${translateCodeStatusToTitle(item)}`
              }
            }),
            {
              value: 'delete',
              label: <span className={'text-alert'}>Xoá đánh giá</span>
            },
          ]}
        />
        <Button
          variant={'filled'}
          color={'blue'}
        >Áp dụng</Button>
      </div>

      <div className={'inline-flex gap-[6px] flex-1 sm:flex-none w-[350px]'}>
       <SelectProduct/>
        <Button
          variant={'filled'}
          color={'blue'}
        >Lọc</Button>
      </div>

    </div>
    {/* Table */}
    <TableReview/>
  </div>
}

type TableReviewProps = {
  classname?: string

}

export const TableReview = (props: TableReviewProps) => {
  const {copyToClipboard} = UseCopyToClipboard()

  const data = coverEntityToColumnType(DATA_REVIEWS).sort((a, b) => dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix()) as TableDataType<CommentType>[]

  const columns: TableProps<TableDataType<CommentType>>['columns'] = [
    Table.SELECTION_COLUMN,
    {
      title: 'Customer',
      dataIndex: 'userName',
      fixed: 'left',
      className: 'min-w-[120px] sm:min-w-[150px]'
    },
    {
      title: 'Star',
      dataIndex: 'star',
      className: ' min-w-[140px]',
      render: (value) => <Rate
        defaultValue={value}
        disabled
        className={"!inline-flex"}
      />,
    },
    {
      title: 'Content',
      dataIndex: 'content',
      className: 'min-w-[200px]'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => {

        const items: MenuProps['items'] = Object.values(StatusCommentEnums).map((item) => {
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
            <LabelCommentStatus
              label={status}
              classname={'relative cursor-pointer'}
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
      title: 'Product',
      render: () => 'Product name',
      className: 'min-w-[150px]'
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      sortDirections: [
        'descend',
        'ascend'
      ],
      render: (value) => value ? dayFormatDateTime(value) : '',
      sorter: (a, b) => 0,
    },
    {
      title: '',
      render: () => {
        return <div className={'flex wrap gap-[5px] items-center'}>
          <Button
            href={ROUTERS.reviewDetail}
            shape={'circle'}
            icon={<EditOutlined style={{fontSize: 16}}/>}
            variant={'text'}
            color={'default'}
          />
          <Popconfirm
            title="Delete the review"
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

  return <div className={`${props?.classname ?? ''}`}>
    <Table<TableDataType<CommentType>>
      dataSource={data}
      columns={columns}
      rowSelection={{}}
      scroll={{x: true}}
      rowClassName={'text-sub'}
      pagination={{pageSize: 20}}
    />
  </div>
}