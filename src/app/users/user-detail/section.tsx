import { BoxUserProfile } from "@/app/_components/box/box-user-profile";
import { BoxUserSpend } from "@/app/_components/box/box-user-spend";
import { TableOrders } from "@/app/orders/sections";
import { UserType } from "@/domain/type";

type UserGeneralSectionProps = {
  className?: string;
  user: UserType;
};

export const UserGeneralSection = (props: UserGeneralSectionProps) => {
  return (
    <div className={`${props?.className ?? ''} mx-default mb-[20px] grid grid-cols-1 gap-[20px] xl:grid-cols-[2fr_3fr]`}>
      <BoxUserProfile/>
      <BoxUserSpend user={props.user}/>
    </div>);
};

type BoxUserOrdersProps = {
  className?: string
}

export const BoxUserOrders = (props: BoxUserOrdersProps) => {
  return <div className={`${props?.className ?? ''} dashboard-box`}>
    <h4 className={'dashboard-box-title]'}>Orders</h4>
    <TableOrders classname={'mt-[15px]'} hiddenAction={true}/>
  </div>
}