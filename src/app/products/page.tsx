'use client'

import { DashboardLayout } from "@/app/_components/system-layout";
import { TableProducts, TableProductsActions } from "@/app/products/sections";
import React from "react";

export default function ProductsPage() {
  return (<DashboardLayout>
    <div className="dashboard-box mb-[20px] mx-default mt-[10px]">
      <TableProductsActions/>
      <TableProducts/>
    </div>
  </DashboardLayout>)
}