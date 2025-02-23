import SystemLink from "@/app/_components/link";

type ListTitleProps = {
  title: string
  classname?: string
  url?: string
  materialIconName?: string
  onClick?: () => void
}
export const ListTitle = (props: ListTitleProps) => {
  return <SystemLink
    url={props?.url}
    onClick={props?.onClick}
    className={`${props?.classname ?? ''} cursor-pointer leading-[1.3] p-[7px_14px_7px_14px]  transition-all hover:bg-[rgb(var(--bg-opposite),0.05)] text-size-small flex items-center gap-[6px]`}>
    <span className={'material-symbols-rounded !font-[300] !text-[22px]'}>{props?.materialIconName}</span>
    <span>{props.title}</span></SystemLink>
}