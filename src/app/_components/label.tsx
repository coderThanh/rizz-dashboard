import {
  StatusCommentType, StatusOrderType, StatusPostType
} from "@/domain/type";
import { translateCodeStatusToTitle } from "@/presentation/cover-data";
import { toTitleCase } from "@/ultil/helper";
import {
  Tag, TagProps
} from "antd";
import { ReactNode } from "react";

type LabelPostStatusProps = {
  classname?: string
  label: StatusPostType
  size?: 'large'
}

export const LabelPostStatus = (props: LabelPostStatusProps) => {
  let tagColor: TagProps['color'];

  switch(props.label) {
    case 'public':
      tagColor = 'processing';
      break;
    case 'inactive':
      tagColor = 'error';
      break;

    default:
      tagColor = 'default'
  }

  return <Tag
    color={tagColor}
    className={`${props?.classname ?? ''} !m-0 capitalize font-[500] ${props.size === 'large' ? '!text-size-small !p-[5px_10px] !rounded-radius-1' : ''}`}
  >
    {toTitleCase(translateCodeStatusToTitle(props.label))}
  </Tag>
}

type LabelOrderStatusProps = {
  classname?: string
  size?: 'large' | 'default'
  label: StatusOrderType
  icon?: ReactNode
}

export const LabelOrderStatus = (props: LabelOrderStatusProps) => {
  let tagColor: TagProps['color'];

  switch(props.label) {
    case 'shipping':
      tagColor = 'purple';
      break;
    case 'pending':
      tagColor = 'warning';
      break;
    case 'canceled':
      tagColor = 'error';
      break;
    case 'completed':
      tagColor = 'success';
      break;
    case 'processing':
      tagColor = 'processing';
      break;

    default:
      tagColor = 'default'
  }

  return <Tag
    icon={props?.icon}
    color={tagColor}
    className={`${props?.classname ?? ''} ${props?.size == 'large' && '!text-[13px] !p-[3px_10px] !rounded-radius-1'}`}
  >
    {toTitleCase(translateCodeStatusToTitle(props.label))}
  </Tag>
}

type LabelCommentStatusProps = {
  classname?: string
  size?: 'large' | 'default'
  label: StatusCommentType
  icon?: ReactNode
}

export const LabelCommentStatus = (props: LabelCommentStatusProps) => {
  let tagColor: TagProps['color'];

  switch(props.label) {
    case 'public':
      tagColor = 'processing';
      break;
    case 'waiting':
      tagColor = 'warning';
      break;
    case 'inactive':
      tagColor = 'error';
      break;
    default:
      tagColor = 'default'
  }

  return <Tag
    icon={props?.icon}
    color={tagColor}
    className={`${props?.classname ?? ''} ${props?.size == 'large' && '!text-[13px] !p-[3px_10px] !rounded-radius-1'}`}
  >
    {toTitleCase(translateCodeStatusToTitle(props.label))}
  </Tag>
}