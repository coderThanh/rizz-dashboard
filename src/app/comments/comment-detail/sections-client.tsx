
'use client'

import { InputLabel, SelectPost, SelectProduct, SelectUser } from "@/app/_components/field/field";
import { Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

type BoxCommentGeneralProps = {
  classname?: string
}

export const BoxCommentGeneral = (props: BoxCommentGeneralProps) => {
  const [value, setValue] = useState(3);

  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <h3 className={'dashboard-box-title'}>Đánh giá</h3>
    <div className={'grid gap-[20px] mt-[18px]'}>
      <div className={'grid lg:grid-cols-[120px_1fr] gap-[8px_20px]'}>
        <InputLabel title={'User'} classname={'!mb-0'}/>
        <SelectUser/>
      </div>
      <div className={'grid lg:grid-cols-[120px_1fr] gap-[8px_20px]'}>
        <InputLabel title={'Post'} classname={'!mb-0'}/>
        <SelectPost/>
      </div>
      <div className={'grid lg:grid-cols-[120px_1fr] gap-[8px_20px]'}>
        <InputLabel title={'Content'} classname={'!mb-0'}/>
        <TextArea
          rows={7}
          placeholder={"Write your review"}
        />
      </div>
    </div>
  </div>
}