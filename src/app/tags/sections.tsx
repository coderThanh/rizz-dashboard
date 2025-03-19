'use client'

import { InputLabel } from "@/app/_components/field/field";
import { DATA_TAGS } from "@/domain/data-demo";
import { TableDataType, TagType } from "@/domain/type";
import {
  coverEntityToColumnType
} from "@/presentation/cover-data";
import { notifySuccess } from "@/ultil/toast";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button, Input, InputNumber, Popconfirm, Select, Table, TableColumnsType
} from "antd";
import React, { useCallback, useState } from "react";

type BoxTagCreateProps = {
  classname?: string
}

export const BoxTagCreate = (props: BoxTagCreateProps) => {
  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <h4 className={'text-[1rem] mb-[15px] font-[600] text-title'}>Thêm tag mới</h4>
    <div className="grid gap-[22px] ">
      {/* --- */}
      <div>
        <InputLabel
          classname={'font-[500]'}
          title={'Tên'}
        />
        <Input/>
      </div>
      {/* --- */}
      <div>
        <InputLabel
          classname={'font-[500]'}
          title={'Thứ tự'}
          tooltip={'Thứ tự hiển thị của danh mục'}
        />
        <InputNumber
          className={'!w-full'}
          defaultValue={100}
        />
      </div>

      <Button
        color={'primary'}
        variant={'filled'}
      >Tạo tag</Button>
    </div>
  </div>
}

type BoxTagTableProps = {
  classname?: string
}

export const BoxTagTable = (props: BoxTagTableProps) => {
  const [itemEdit, setItemEdit] = useState<TagType | null>(null);

  const onSaveEdit = useCallback((tag: TagType) => {
    notifySuccess(`Item ${tag.title} saved successfully`);

    onCancel();
  }, [])

  const onEdit = useCallback((tag: TagType) => {
    setItemEdit(tag)
  }, []);

  const onCancel = useCallback(() => {
    setItemEdit(null)
  }, []);


  const columns: TableColumnsType<TableDataType<TagType>> = [
    Table.SELECTION_COLUMN,
    {fixed: 'left'},
    {
      title: 'Tên',
      key: 'Name',
      dataIndex: 'title',
      className: 'min-w-[150px]',
      render: (text, item) => {
        if(item.id === itemEdit?.id) {
          return <Input
            defaultValue={item.title}
            placeholder={item.title}
          />
        }

        return text;
      },
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: (a, b) => 0,
    },
    {
      title: 'Vị trí',
      key: 'Order',
      render: (_, item) => {
        if(item.id === itemEdit?.id) {
          return <InputNumber
            defaultValue={100}
            placeholder={'100'}
            type={'number'}
            min={1}
          />
        }

        return <span className={'text-sub'}>100</span>;
      },
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: (a, b) => 0,
    },
    {
      title: '',
      key: 'actions',
      className: 'min-w-[170px]',
      render: (_, item) => {

        if(item.id === itemEdit?.id) {
          return <div className={'flex wrap gap-[5px] items-center'}>
            <Button
              variant={'filled'}
              color={'primary'}
              onClick={() => onSaveEdit(item)}
            >Save</Button>
            <Button
              variant={'filled'}
              color={'danger'}
              onClick={() => onCancel()}
            >Cancel</Button>
          </div>
        }

        return <div className={'flex wrap gap-[5px] items-center'}>
          <Button
            shape={'circle'}
            icon={<EditOutlined style={{fontSize: 16}}/>}
            variant={'text'}
            color={'default'}
            onClick={() => onEdit(item)}
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

  const data: TableDataType<TagType>[] = coverEntityToColumnType(DATA_TAGS)

  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <div className={'flex flex-wrap justify-between gap-[10px_10px]'}>
      <div className={'flex gap-[8px] items-center'}>
        <Select
          className={'w-[130px]'}
          defaultValue={''}
          options={[
            {
              value: '',
              label: 'Hành động'
            },
            {
              value: 'delete',
              label: <span className={'text-alert'}>Xoá</span>
            },
          ]}
        />
        <Button
          color={'primary'}
          variant={'filled'}
        >Áp dụng</Button>
      </div>
      <div className={'flex gap-[8px] flex-1 min-w-[220px]'}>
        <Input
          className={'w-full '}
          placeholder={'Tìm kiếm'}
        />
        <Button
          color={'blue'}
          variant={'filled'}
        >Tìm kiếm</Button>
      </div>
    </div>
    <Table<TableDataType<TagType>>
      columns={columns}
      dataSource={data}
      rowSelection={{}}
      expandable={{
        defaultExpandAllRows: true,
      }}
      className={'mt-[12px]'}
      scroll={{
        x: true
      }}
    />
  </div>
}
