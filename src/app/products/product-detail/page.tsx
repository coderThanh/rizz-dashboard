import { BoxPostStatus } from "@/app/_components/box/box-status";
import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxProductDetailGeneral } from "@/app/products/product-detail/sections";
import { getSymbolCurrency } from "@/presentation/product-controller";
import { BoxContent } from "@/app/_components/box/box-content";
import { BoxDescriptionSort } from "@/app/_components/box/box-description";

export default function ProductDetail() {
  getSymbolCurrency()
  return <DashboardLayout>
    <BoxPostStatus classname={'mx-default mb-[20px]'}/>
    <BoxProductDetailGeneral classname={'mx-default mb-[20px]'}/>
    <BoxDescriptionSort classname={'mx-default mb-[20px]'}/>
    <BoxContent classname={'mx-default mb-[20px]'}/>
  </DashboardLayout>
}