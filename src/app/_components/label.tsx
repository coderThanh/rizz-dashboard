import { StatusPostEnum } from "@/domain/type";
import { Tag, TagProps } from "antd";

type LabelPostStatusProps = {
  classname?: string
  label: StatusPostEnum | string
  size?: 'default' | 'large'
}

export const LabelPostStatus = (props: LabelPostStatusProps) => {
  let tagColor: TagProps['color'] = 'default';

  switch(props.label) {
    case StatusPostEnum.public:
      tagColor = 'processing';
      break;
    case StatusPostEnum.inactive:
      tagColor = 'red';
      break;

    default:
      tagColor = 'default'
  }

  return <Tag
    // bordered={false}
    color={tagColor}
    className={`${props?.classname ?? ''} !m-0 capitalize font-[500] ${props.size === 'large' ? '!text-size-small !p-[5px_10px] !rounded-radius-1' : ''}`}
  >
    {props.label}
  </Tag>
}