import {DashboardLayout} from "@/app/_components/system-layout";
import {BoxBarSmall, BoxMonthlyIncomeAvg, BoxRencentOrder, BoxSumaryChartSpline} from "@/app/sections";
import {Button} from "antd";

export default function HomePage() {
  return (<DashboardLayout>
    <div className={`px-default flex flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-[20px]`}>
      <BoxSumaryChartSpline
        classname={'w-full'}
        label={'Total Revenue'}
        value={'$8365.00'}
        subValue={'8.5%'}
        subTitle={'New Sessions Today'}
        action={<Button
          color={'primary'}
          variant={'filled'}
        >View Report</Button>}
      />
      <BoxMonthlyIncomeAvg classname={'w-full col-span-2 row-span-2 order-3 lg:order-2'}/>
      <BoxSumaryChartSpline
        classname={'w-full order-2'}
        label={'New Order'}
        value={'722'}
        subValue={'8.5%'}
        subTitle={'New Sessions Today'}
        action={<Button
          color={'orange'}
          variant={'filled'}
        >View Report</Button>}
      />
    </div>
    <div className={'px-default grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px] mt-[30px] mb-[20px]'}>
      <BoxBarSmall
        title={"Customers"}
        isShowPeople={true}
      />
      <BoxBarSmall
        title={"Orders"}
        isShowPeople={false}
      />
      <BoxRencentOrder/>
    </div>
  </DashboardLayout>)
}
