'use client'

import SystemImage from "@/app/_components/img";
import SystemLink from "@/app/_components/link";
import dayjs from "dayjs";
import Link from "next/link";
import {ReactNode, useState} from "react";
import {Button, DatePicker, Dropdown, MenuProps} from "antd";
import {ApexOptions} from "apexcharts";
import {COLOR_PRIMARY, COLOR_SECONDARY, COLOR_TEXT_TITLE} from "@/ultil/const";
import {Chart} from "@/app/chart";
import {Option} from "@/domain/type";
import {CalendarOutlined} from "@ant-design/icons";

const {RangePicker} = DatePicker

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
          className={'w-[60px] h-[60px] flex items-center justify-center border border-solid border-[rgb(var(--color-secondary),0.6)] rounded-[50%]'}
        >
          <span className={'material-symbols-rounded text-sub !text-[30px] !font-[300]'}>money_bag</span>
        </div>
        <div className={'text-[14px] font-[500] mt-[10px] '}>{props?.label}</div>
      </div>
      <div className={'overflow-hidden'}>
        {stateData != null && <Chart
          type={"area"}
          options={options}
          series={stateData}
          height={100}
        />}
      </div>
    </div>
    {/*------*/}
    <div className={'p-[20px] border-t border-dashed border-border-low grid grid-cols-[3fr_2fr] gap-[16px]'}>
      <div>
        <p className={'m-0 font-[700] text-size-3'}>{props?.value}</p>
        <p className={'mb-0 mt-[5px] text-[13px] text-sub line-clamp-2 leading-[1.4]'}><span
          className={'text-secondary'}
        >{props?.subValue}</span> {props?.subTitle}</p>
      </div>
      {props?.action && <div className={'flex flex-wrap items-center justify-center'}>{props?.action}</div>}
    </div>
  </div>
}

type BoxMonthlyIncomeAvgProps = {
  classname?: string
  children?: ReactNode
}

export const BoxMonthlyIncomeAvg = (props: BoxMonthlyIncomeAvgProps) => {
  const items: MenuProps['items'] = [
    {
      'key': '1',
      label: 'To day',
    }, {
      'key': '2',
      label: 'Last week',
    }, {
      'key': '3',
      label: 'Last onth',
    }, {
      'key': '4',
      label: 'This year',
    }
  ]

  const sum: Option[] = [
    {
      value: '$24,500',
      title: 'Today\'s Revenue'
    }, {
      value: '82.8%',
      title: 'Conversion Rate'
    }, {
      value: '$9982.00',
      title: 'Total Expenses'
    }, {
      value: '80.5',
      title: 'Avg. Value'
    },
  ]


  const serieData = [
    1000, 500, 3000, 6000, 8000, 11000, 5000, 3520, 2000, 6000, 9000, 1500
  ]

  const series: ApexOptions['series'] = [
    {
      name: '',
      data: serieData
    }
  ]

  const total = serieData.reduce((total: number, num: number) => total + num, 0)

  let theMostData: number = 0;

  serieData.forEach(item => {
    if(item >= theMostData) {
      theMostData = item
    }
  })


  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: 20,
        borderRadius: 5,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter(val: number,): string | number | string[] {
        return (val / total * 100).toFixed(1) + '%';
      },
      offsetY: -20,
      background: {enabled: false},
      style: {colors: [COLOR_TEXT_TITLE]}
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      position: 'top',
      axisBorder: {show: false},
      axisTicks: {show: false},
      tooltip: {enabled: false},
      labels: {style: {fontWeight: 500}}
    },
    yaxis: {
      labels: {
        style: {fontWeight: '500'},
        formatter(val: number,): string | string[] {
          return '$' + (val / 1000).toFixed(0) + 'k';
        }
      }
    },
    colors: [
      function({
        value
      }: { value: number }) {
        if(value >= theMostData) {
          return COLOR_PRIMARY
        }
        return COLOR_SECONDARY
      },
    ],
    tooltip: {
      x: {show: false},
      y: {
        formatter(val: number,): string {
          return `$${val}`;
        }
      }
    }

  }

  return <div className={`${props?.classname ?? ''} bg-bg shadow-1 rounded-radius-1`}>
    {/* Label ------ */}
    <div className={'flex items-center gap-[14px] p-[20px]'}>
      <p className={'mb-0 font-[500] text-title flex-1'}>Monthly Abg. Income</p>
      <Dropdown
        menu={{items: items}}
        trigger={['click']}
      >
        <Button
          icon={<CalendarOutlined/>}
          variant={'filled'}
          type={'primary'}
          color={'default'}
        >This Year</Button>
      </Dropdown>
    </div>
    <div className={''}>
      <Chart
        height={300}
        series={series}
        options={options}
        type={'bar'}
      />
    </div>
    {/*  */}
    <div className={'grid grid-cols-4 gap-[10px_10px] p-[0_20px_20px]'}>
      {sum.map((item, index) => {
        return <div
          key={`sum-${index}`}
          className={'p-[20px_14px] border border-solid border-border-low rounded-radius-1 '}
        >
          <p className={'mb-[5px] font-[600] text-size-2'}>{item.value}</p>
          <span className={'text-size-small text-sub leading-[1.4] block'}>{item.title}</span>
        </div>
      })}
    </div>
  </div>
}

type BoxBarSmallProps = {
  classname?: string
  title: string
  isShowPeople: boolean
}

export const BoxBarSmall = (props: BoxBarSmallProps) => {
  const series: ApexOptions['series'] = [
    {
      name: '',
      data: [44, 55, 13,]
    }
  ]

  const options: ApexOptions = {
    chart: {toolbar: {show: false}},
    labels: ['Curentet', 'New', 'Retargeted'],
    plotOptions: {
      bar: {
        columnWidth: 30,
        borderRadius: 4,
      }
    },
    xaxis: {
      axisBorder: {show: false},
      axisTicks: {show: false}
    },
    tooltip: {
      x: {show: false}
    }
  }

  return <div className={`${props?.classname ?? ''} bg-bg rounded-radius-1 shadow-1 p-[20px]`}>
    <div className={'flex gap-[14px] items-center mb-[15px]'}>
      <p className={'mb-0 font-[600] text-title flex-1'}>{props.title}</p>
      {props.isShowPeople && <div className={'flex gap-[5px] items-center'}>
        <div className={'flex'}>
          {Array(4).fill(true).map((item, index) => {
            return <SystemImage
              ratio={100}
              radius={300}
              key={`user-${index}`}
              src={`/asset/dashboard/people-${index + 1}.jpg`}
              alt={'people'}
              className={'w-[36px] h-[36px] ml-[-12px]'}
            />
          })}
        </div>
        <div className={'w-[36px] h-[36px] flex items-center justify-center text-size-small bg-bg-2nd rounded-[50%] font-[500]'}>+6</div>
      </div>}
    </div>
    {/* chart */}
    <Chart
      type={'bar'}
      series={series}
      options={options}
      height={200}
    />
    {/*  actions */}
    <div className={'text-center '}>
      <RangePicker maxDate={dayjs()}/>
      <p className={'text-size-small text-sub mb-0 mt-[10px]'}>To review the new order by
        Jems. <Link
          href={'#'}
          className={'text-primary underline'}
        >detail</Link></p>
    </div>
  </div>
}

type BoxRencentOrderProps = {
  classname?: string
  children?: ReactNode
}

export const BoxRencentOrder = (props: BoxRencentOrderProps) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Today'
    }, {
      key: '2',
      label: 'Last week'
    }, {
      key: '3',
      label: 'Last month'
    }, {
      key: '4',
      label: 'This year'
    },
  ]
  return <div className={`${props?.classname ?? ''} bg-bg rounded-radius-1 shadow-1 p-[20px]`}>
    <div className="flex gap-[14px] items-center ">
      <p className={'mb-0 font-[600] text-title flex-1'}>Recents Order</p>
      <Dropdown
        menu={{items: items}}
        trigger={['click']}
      >
        <Button
          icon={<CalendarOutlined/>}
          variant={'filled'}
          color={'default'}
        >This month</Button>
      </Dropdown>
    </div>
    {/*  */}
    <div className={'mt-[20px]'}>
      {Array(5).fill(true).map((item, index) => {
        return <SystemLink url={'#'} key={`order-${index}`} className={`flex items-center gap-[14px] text-size-small ${index > 0 ? 'mt-[12px] pt-[12px] border-t border-dashed border-border-low': ''}`}>
          <SystemImage
            src={`/asset/dashboard/people-${index + 1}.jpg`}
            alt={'order'}
            ratio={100}
            radius={5}
            className={'w-[36]'}
          />
          <div className={'flex-1 overflow-hidden'}>
            <div className={'line-clamp-1 text-title font-[500]'}>Scott Holland asd jhas gjdhg ajsh</div>
            <div className={'text-sub '}>#365{index}</div>
          </div>
          <div className={'text-primary text-right'}>$332{index}.00</div>
        </SystemLink>
      })}
    </div>
  </div>
}