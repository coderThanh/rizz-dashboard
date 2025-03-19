import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxTagCreate, BoxTagTable } from "@/app/tags/sections";

export default function TagsPage() {
  return <DashboardLayout>
    <div className={'grid xl:grid-cols-[420px_1fr] gap-[30px_30px] px-default mb-[20px] '}>
      {/* for sticky */}
      <div>
        <BoxTagCreate classname={'sticky top-[20px]'}/>
      </div>
      <BoxTagTable classname={'overflow-hidden'}/>
    </div>
  </DashboardLayout>
}