import { SystemToolTip } from "@/app/_components/tooltip";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const FieldEditor = dynamic(() => import('@/app/_components/field/ckeditor'), {ssr: false})

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
