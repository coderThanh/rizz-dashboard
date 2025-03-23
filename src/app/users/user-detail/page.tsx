import { DATA_USERS } from "@/domain/data-demo";
import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxUserOrders, UserGeneralSection } from "@/app/users/user-detail/section";

export default function UsersPage() {
  const user = DATA_USERS[0]; // Example user data

  return (<DashboardLayout>
      <UserGeneralSection user={user}/>
      <BoxUserOrders className={'mx-default mb-[20px]'}/>
    </DashboardLayout>);
}