'use client'

import { InputLabel } from "@/app/_components/field/field";
import SystemImage from "@/app/_components/img";
import SystemLink from "@/app/_components/link";
import { UsePreviewImage } from "@/app/hooks/hook-file";
import { DATA_CATEGORY_PRODUCT_HAS_CHILREN } from "@/domain/data-demo";
import { ColumnCategoryType } from "@/domain/type";
import { coverCategoryToColumnCategory, coverCategoryToTreeSelectData } from "@/presentation/cover-data";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button, Input, InputNumber, Popconfirm, Select, Table, TableColumnsType, TreeSelect, Upload, UploadFile, Image
} from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";

const FieldEditor = dynamic(() => import('@/app/_components/field/ckeditor'), {ssr: false})


type BoxCreateProductCategoryProps = {
  classname?: string
}

export const BoxCreateProductCategory = (props: BoxCreateProductCategoryProps) => {
  const isLoadinng = false

  const {
          ImagePreview,
          handlePreview,
        } = UsePreviewImage();

  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <h4 className={'text-[1rem] mb-[15px] font-[600] text-title'}>Thêm danh mục mới</h4>
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
      {/* --- */}
      <div>
        <InputLabel
          classname={'font-[500]'}
          title={'Danh mục cha'}
        />
        <TreeSelect
          treeData={coverCategoryToTreeSelectData(DATA_CATEGORY_PRODUCT_HAS_CHILREN)}
          placeholder={'Không có'}
          className={'w-full'}
        />
      </div>
      {/* --- */}
      <div>
        <InputLabel
          classname={'font-[500]'}
          title={'Ảnh đại diện'}
        />
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={true}
          onPreview={handlePreview}
          maxCount={2}
        >
          <button
            type="button"
          >
            {isLoadinng ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
          </button>
        </Upload>
        <ImagePreview/>

      </div>

      {/* --- */}
      <div className={'overflow-hidden'}>
        <InputLabel
          classname={'font-[500]'}
          title={'Mô tả'}
        />
        <FieldEditor
          minHeight={'180px'}
          maxHeight={'400px'}
        />
      </div>
    </div>
  </div>
}

type BoxTableProductCategoryProps = {
  classname?: string
}

export const BoxTableProductCategory = (props: BoxTableProductCategoryProps) => {
  const columns: TableColumnsType<ColumnCategoryType> = [
    Table.SELECTION_COLUMN,
    {fixed: 'left'},
    {
      title: 'Ảnh',
      key: 'img',
      dataIndex: 'thumnail',
      render: () => <div className={'w-[40px] h-[40px] relative z-[1]'}><SystemImage
        alt={'thumnail'}
        ratio={100}
        radius={4}
        src={'/asset/dashboard/product-1.png'}
      /></div>,
    },
    {
      title: 'Tên',
      key: 'Name',
      dataIndex: 'title',
      className: 'min-w-[150px]',
      render: (text) => <SystemLink
        url={'#'}
        className={'transition text-title hover:text-primary'}
      >{text}</SystemLink>
    },
    {
      title: 'Vị trí',
      key: 'Order',
      render: (_) => <span className={'text-sub'}>100</span>
    },
    {
      title: '',
      key: 'actions',
      className: 'min-w-[100px]',
      render: (_) => <div className={'flex gap-[5px]'}>
        <div className={'inline-flex w-[35px] h-[35px] items-center justify-center cursor-pointer text-process rounded-[50%] hover:bg-[rgb(var(--color-process),0.1)] transition-all'}>
          <span className={'material-symbols-rounded text-[20px] font-[300]'}>edit</span>
        </div>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          okText="Yes"
          cancelText="No"
          placement={'topRight'}
        >
          <div className={'inline-flex w-[35px] h-[35px] items-center justify-center cursor-pointer text-alert rounded-[50%] hover:bg-[rgb(var(--color-alert),0.1)] transition-all'}>
            <span className={'material-symbols-rounded text-[20px] font-[300]'}>delete</span>
          </div>
        </Popconfirm>

      </div>
    },
  ]

  const data: ColumnCategoryType[] = coverCategoryToColumnCategory(DATA_CATEGORY_PRODUCT_HAS_CHILREN)

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
              label: 'Xoá'
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
    <Table<ColumnCategoryType>
      columns={columns}
      dataSource={data}
      rowSelection={{}}
      expandable={{
        defaultExpandAllRows: true,
        showExpandColumn: false
      }}
      className={'mt-[12px]'}
      scroll={{
        x: true
      }}
    />
  </div>
}
