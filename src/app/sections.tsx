'use client'
import dynamic from "next/dynamic";

const ReactApexCharts = dynamic(() => import("react-apexcharts"), {ssr: false});

import {ReactNode, useState} from "react";
import {Button} from "antd";
import {ApexOptions} from "apexcharts";
import {COLOR_SECONDARY} from "@/ultil/const";


type Props = {
  classname?: string
  children?: ReactNode
}
export const EcommerceGroupChartOne = (props: Props) => {
  return <div className={`${props?.classname ?? ''} flex flex-wrap md:grid md:grid-cols-3 md:grid-rows-2 gap-[20px]`}>
    <BoxSumaryChartSpline classname={'w-full'} label={'Total Revenue'} value={'$8365.00'} subValue={'8.5%'}
                          subTitle={'New Sessions Today'}
                          action={<Button color={'primary'} variant={'filled'}>View Report</Button>}/>
    <BoxSumaryChartSpline classname={'w-full col-span-2 row-span-2 order-3 md:order-2'}/>
    <BoxSumaryChartSpline classname={'w-full order-2'} label={'New Order'} value={'722'} subValue={'8.5%'}
                          subTitle={'New Sessions Today'}
                          action={<Button color={'orange'} variant={'filled'}>View Report</Button>}/>
  </div>
}

type BoxSumaryChartSplineProps = {
  classname?: string
  materialIconName?: string
  label?: string
  value?: string
  subValue?: string
  subTitle?: string
  action?: ReactNode
  children?: ReactNode
}
export const BoxSumaryChartSpline = (props: BoxSumaryChartSplineProps) => {
  const [stateData] = useState<ApexOptions['series']>([
    {
      name: '',
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ])

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: [COLOR_SECONDARY]
    },
    yaxis: {
      show: false,
      min: 0,
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    grid: {
      show: false,
      xaxis: {lines: {show: false}},
      yaxis: {lines: {show: false}}
    },
    tooltip: {
      x: {show: false},
      marker: {show: false},
    },
    fill: {
      colors: [COLOR_SECONDARY],
      gradient: {
        opacityTo: 0.2,
      }
    }
  }

  return <div className={`${props?.classname ?? ''} bg-bg shadow-1 rounded-radius-1`}>
    <div className={'grid grid-cols-[2fr_3fr] gap-[16px] p-[20px_20px_0]'}>
      <div>
        <div
          className={'w-[60px] h-[60px] flex items-center justify-center border border-solid border-[rgb(var(--color-secondary),0.6)] rounded-[50%]'}>
          <span className={'material-symbols-rounded text-sub !text-[30px] !font-[300]'}>money_bag</span>
        </div>
        <div className={'text-[14px] font-[500] mt-[10px] '}>{props?.label}</div>
      </div>
      <div className={'overflow-hidden'}>
        {stateData != null && <ReactApexCharts type={"area"} options={options} series={stateData} height={100}/>}
      </div>
    </div>
    {/*------*/}
    <div className={'p-[20px] border-t border-dashed border-border-low grid grid-cols-[3fr_2fr] gap-[16px]'}>
      <div>
        <p className={'m-0 font-[700] text-size-3'}>{props?.value}</p>
        <p className={'mb-0 mt-[5px] text-[13px] text-sub line-clamp-2 leading-[1.4]'}><span
          className={'text-secondary'}>{props?.subValue}</span> {props?.subTitle}</p>
      </div>
      {props?.action && <div className={'flex flex-wrap items-center justify-center'}>{props?.action}</div>}
    </div>
  </div>
}

