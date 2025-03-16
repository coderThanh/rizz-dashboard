import { BoxPostStatus } from "@/app/_components/box";
import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxCommentGeneral } from "@/app/comments/comment-detail/sections-client";

export default function CommentDetailPage() {
  return <DashboardLayout>
    <BoxPostStatus classname={'mx-default mb-[20px]'}/>
    <BoxCommentGeneral classname={'mx-default mb-[20px]'}/>
  </DashboardLayout>
}
