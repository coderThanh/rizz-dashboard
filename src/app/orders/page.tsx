import { DashboardLayout } from "@/app/_components/system-layout";
import { TableOrders } from "@/app/orders/sections";
import { ROUTERS } from "@/ultil/router";
import { Button } from "antd";

export default function PageOrders() {
  return <DashboardLayout>
    <div className="dashboard-box mx-default mb-[20px]">
      {/* Title */}
      <div className={'flex items-center gap-[15px]'}>
        <h4 className={'text-[1rem] font-[600] flex-1'}>Orders</h4>
        <Button
          href={ROUTERS.orderDetail}
          color={'primary'}
          variant={'solid'}
        >New order</Button>
      </div>
      <TableOrders classname={'mt-[20px]'}/>
    </div>
  </DashboardLayout>
}