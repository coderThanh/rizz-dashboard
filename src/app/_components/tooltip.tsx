import { Tooltip, TooltipProps } from "antd";

type SystemToolTipProps = {
  classname?: string
  materialName?: string
  title: string
  placement?: TooltipProps['placement']
}

export const SystemToolTip = (props: SystemToolTipProps) => {
  return <Tooltip
    placement={props?.placement ?? 'top'}
    title={props.title}
  >
    <span className={`${props?.classname ?? ''} material-symbols-rounded font-[400] text-[21px] align-text-bottom`}>
  {props?.materialName || 'info'}
  </span>
  </Tooltip>
}