import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxUsers } from "@/app/users/section";

export default function UsersPage() {
  return <DashboardLayout>
    <div className={'mx-default mb-[20px]'}>
      <BoxUsers/>
    </div>
  </DashboardLayout>
}