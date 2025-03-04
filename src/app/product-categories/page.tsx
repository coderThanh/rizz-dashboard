import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxCreateProductCategory, BoxTableProductCategory } from "@/app/product-categories/sections";

export default function ProductCategoryPage() {
  return <DashboardLayout>
    <div className={'grid xl:grid-cols-[420px_1fr] gap-[30px_30px] px-default mb-[20px] '}>
      {/* for sticky */}
      <div>
        <BoxCreateProductCategory classname={'sticky top-[20px]'}/>
      </div>
      <BoxTableProductCategory classname={'overflow-hidden'}/>
    </div>
  </DashboardLayout>
}