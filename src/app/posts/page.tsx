import { DashboardLayout } from "@/app/_components/system-layout";
import { TablePost, TablePostActions } from "@/app/posts/section-client";

export default function PostsPage() {
  return <DashboardLayout>
    <div className={'dashboard-box mx-default mb-[20px]'}>
      <TablePostActions/>
      <TablePost/>
    </div>

  </DashboardLayout>
}