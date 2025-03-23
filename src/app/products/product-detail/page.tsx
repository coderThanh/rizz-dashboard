import { BoxContent, BoxDescriptionSort, BoxPostStatus } from "@/app/_components/box/box-status";
import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxProductDetailGeneral } from "@/app/products/product-detail/sections";
import { getSymbolCurrency } from "@/presentation/product-controller";

export default function ProductDetail() {
  getSymbolCurrency()
  return <DashboardLayout>
    <BoxPostStatus classname={'mx-default mb-[20px]'}/>
    <BoxProductDetailGeneral classname={'mx-default mb-[20px]'}/>
    <BoxDescriptionSort classname={'mx-default mb-[20px]'}/>
    <BoxContent classname={'mx-default mb-[20px]'}/>
  </DashboardLayout>
}