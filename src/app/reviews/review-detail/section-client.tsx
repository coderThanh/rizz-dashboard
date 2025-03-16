'use client'

import { InputLabel, SelectProduct, SelectUser } from "@/app/_components/field/field";
import { Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

type BoxReviewDetailGeneralProps = {
  classname?: string
}

export const BoxReviewDetailGeneral = (props: BoxReviewDetailGeneralProps) => {
  const [value, setValue] = useState(3);

  const desc = [
    'terrible',
    'bad',
    'normal',
    'good',
    'wonderful'
  ];

  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <h3 className={'dashboard-box-title'}>Đánh giá</h3>
    <div className={'grid gap-[20px] mt-[18px]'}>
      <div className={'grid lg:grid-cols-[120px_1fr] gap-[8px_20px]'}>
        <InputLabel title={'User'} classname={'!mb-0'}/>
        <SelectUser/>
      </div>
      <div className={'grid lg:grid-cols-[120px_1fr] gap-[8px_20px]'}>
        <InputLabel title={'Product'} classname={'!mb-0'}/>
        <SelectProduct/>
      </div>
      <div className={'flex justify-between lg:grid items-center lg:grid-cols-[120px_1fr] gap-[8px_20px]'}>
        <InputLabel title={'Star'} classname={'!mb-0'}/>
        <Rate
          tooltips={desc}
          onChange={setValue}
          value={value}
        />
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