import { BoxContent } from "@/app/_components/box/box-content";
import { BoxDescriptionSort } from "@/app/_components/box/box-description";
import { BoxPostStatus } from "@/app/_components/box/box-status";
import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxPostDetailGeneral } from "@/app/posts/post-detail/section-client";

export default function PostDetailPage() {
  return <DashboardLayout>
    <BoxPostStatus classname={'mx-default mb-[20px]'}/>
    <BoxPostDetailGeneral classname={'mx-default mb-[20px]'}/>
    <BoxDescriptionSort classname={'mx-default mb-[20px]'}/>
    <BoxContent classname={'mx-default mb-[20px]'}/>
  </DashboardLayout>
}