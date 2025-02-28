'use client'

import { LabelPostStatus } from "@/app/_components/label";
import { SystemToolTip } from "@/app/_components/tooltip";
import { StatusPostEnum } from "@/domain/type";
import { dayFormatDateTime, toTitleCase } from "@/ultil/helper";
import { notifySuccess } from "@/ultil/toast";
import { CheckOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Popconfirm } from "antd";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

type BoxPostStatusProps = {
  classname?: string
  children?: ReactNode
}

const FieldEditor = dynamic(() => import('@/app/_components/field/ckeditor'), {ssr: false})

export const BoxPostStatus = (props: BoxPostStatusProps) => {
  const status: MenuProps['items'] = Object.values(StatusPostEnum).map((item, index) => {
    return {
      key: index.toString(),
      label: toTitleCase(item ?? ''),
    }
  })

  return <div className={`${props?.classname ?? ''} dashboard-box p-[20px]`}>
    <h4 className={'leading-[1.4] mb-[15px] text-[1rem] font-[600]'}>Xuất bản</h4>
    <div className="grid lg:grid-cols-2 gap-[20px_20px]">
      <div className={'grid gap-[12px]'}>
        <ListItemStatus
          materialName={'visibility'}
          label={"Trạng thái:"}
        >
          <Dropdown
            menu={{items: status}}
            trigger={['click']}
          >
            <div className={'inline-block cursor-pointer'}>
              <LabelPostStatus
                size={'large'}
                label={'draft'}
                classname={'!ml-[5px] inline-block'}
              />
            </div>
          </Dropdown>
        </ListItemStatus>
        <ListItemStatus
          materialName={'calendar_today'}
          label={"Đã xuất bản lúc:"}
          content={dayFormatDateTime(dayjs().toString())}
        />
      </div>
      {/* --- ---- */}
      <div className={'flex gap-[12px_14px] lg:justify-end items-end flex-wrap'}>
        <Button
          icon={<CheckOutlined/>}
          color={'blue'}
          variant={'solid'}
          onClick={() => notifySuccess('Đã lưu thành công!')}
        >Save</Button>
        <Button
          icon={<EyeOutlined/>}
          color={'primary'}
          variant={'filled'}
        >Live view</Button>
        <Popconfirm
          title="Delete the post"
          description="Are you sure to delete this task?"
          okText="Yes"
          cancelText="No"
          placement={'bottomRight'}
        >
          <Button
            icon={<DeleteOutlined/>}
            color={'danger'}
            variant={'filled'}
          >Delete</Button>
        </Popconfirm>

      </div>
    </div>
    {props?.children}
  </div>
}

type ListItemStatusProps = {
  classname?: string
  children?: ReactNode
  label: string
  content?: string
  materialName?: string
}

const ListItemStatus = (props: ListItemStatusProps) => {
  return <div className={`${props?.classname ?? ''} text-size-small`}>
    {props?.materialName ?
      <span className={'material-symbols-rounded font-[300] text-sub text-[20px] mr-[10px] align-text-bottom'}>{props.materialName}</span> : null}
    <span className={'text-sub'}>{props.label}</span>
    {props?.content ? <span className={'font-[500]'}> {props.content}</span> : null}
    {props.children}
  </div>
}

type BoxDescriptionSortProps = {
  classname?: string
  children?: ReactNode
}

export const BoxDescriptionSort = (props: BoxDescriptionSortProps) => {
  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <h4 className={'font-[600] text-[1rem] mb-[15px]'}>Mô tả
      ngắn <SystemToolTip title={"Hiển thị SEO thẻ meta description"}/>
    </h4>
    <FieldEditor
      minHeight={'120px'}
      maxHeight={'300px'}
    />
  </div>
}

type BoxContentProps = {
  classname?: string
  children?: ReactNode
}

export const BoxContent = (props: BoxContentProps) => {
  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <h4 className={'font-[600] text-[1rem] mb-[15px]'}>Nội dung chính
    </h4>
    <FieldEditor
      minHeight={'400px'}
      maxHeight={'70vh'}
    />
  </div>
}

