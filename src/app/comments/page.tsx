import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxComments } from "@/app/comments/sections-client";
import { BoxReviews } from "@/app/reviews/sections";
import { ROUTERS } from "@/ultil/router";
import { Button } from "antd";

export default function CommentsPage() {
  return <DashboardLayout>
    <div className="dashboard-box mx-default mb-[20px]">
      {/* Title */}
      <div className={'flex items-center gap-[15px]'}>
        <h4 className={'text-[1rem] font-[600] flex-1'}>Comment</h4>
        <Button
          href={ROUTERS.reviewDetail}
          color={'primary'}
          variant={'solid'}
        >New comment</Button>
      </div>
      <BoxComments classname={'mt-[20px]'}/>
    </div>
  </DashboardLayout>
}