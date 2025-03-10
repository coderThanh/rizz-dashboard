import { DashboardLayout } from "@/app/_components/system-layout";
import {
  BoxOrderInfo, BoxOrderAction, BoxOrderAddItem, BoxOrderSummaryPrice
} from "@/app/orders/order-detail/sections";

export default function PageOrderDetail() {
  return <DashboardLayout>
    <div className={'grid xl:grid-cols-[1fr_350px] gap-[25px_30px] mx-default mb-[25px]'}>
      <div className={'xl:order-2 '}>
        <div className={'sticky top-[20px]'}>
          <BoxOrderAction classname={'mb-[25px]'}/>
          <BoxOrderSummaryPrice/>
        </div>
      </div>
      <div className={'overflow-hidden'}>
        <BoxOrderInfo classname={'mb-[25px]'}/>
        <BoxOrderAddItem/>
      </div>
    </div>
  </DashboardLayout>
}