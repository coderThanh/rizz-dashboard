import { CheckCircleOutlined, CloseCircleOutlined, DollarCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { formatterNumber, getPriceWithCurrency } from "@/presentation/product-controller";

import { Card } from "antd";
import React from "react";
import { UserType } from "@/domain/type";

interface BoxUserSpendProps {
  user: UserType;
}

const SpendItem: React.FC<{
  icon: React.ReactNode;
  value: string | number | null;
  label: string,
  subLabel?: string;
  className?: string
}> = ({
  icon,
  value,
  label,
  className,
  subLabel
}) => (<div className={`grid grid-cols-[30px_1fr] gap-[20px] items-center border border-border-low border-solid rounded-radius-1 p-[20px_15px] ${className}`}>
    {icon}
    <div>
      <p className={'mb-[5px] font-[500] text-size-small'}>{label}</p>
      <p className={'mb-0 leading-[1.2]'}>
        <span className="font-[600] text-size-2">{value}</span>
        <span className="text-sub text-size-small-a"> {subLabel}</span>
      </p>
    </div>
  </div>);

export const BoxUserSpend: React.FC<BoxUserSpendProps> = ({user}) => {
  return (<div className="user-spend-section dashboard-box">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        <SpendItem
          icon={<DollarCircleOutlined className="!text-[28px] !text-teal-500"/>}
          value={getPriceWithCurrency(user.totalCost ?? 0)}
          label="Total Cost"
          subLabel="New 365 Days"
        />
        <SpendItem
          icon={<ShoppingCartOutlined className="!text-[28px] !text-purple-500"/>}
          value={formatterNumber(user.totalOrder ?? 0)}
          label="Total Order"
          subLabel="Order 365 Days"
        />
        <SpendItem
          icon={<CheckCircleOutlined className="!text-[28px] !text-success"/>}
          value="165"
          label="Completed"
          subLabel="Comp. Order 365 Days"
        />
        <SpendItem
          icon={<CloseCircleOutlined  className="!text-[28px] !text-alert"/>}
          value="25"
          label="Cacnceled"
          subLabel="Canc. Order 365 Days"
        />
      </div>
      <div className="mt-[20px] p-[12px_14px] border border-dashed border-success bg-success/5 rounded-radius-1 text-success text-size-small">
        <span className="font-[500]">{user.userName}</span>'s best performance from last year
      </div>
    </div>);
};
