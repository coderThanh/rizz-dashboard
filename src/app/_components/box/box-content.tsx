import dynamic from "next/dynamic";
import { ReactNode } from "react";

const FieldEditor = dynamic(() => import('@/app/_components/field/ckeditor'), {ssr: false})

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