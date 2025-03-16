import { BoxPostStatus } from "@/app/_components/box";
import { DashboardLayout } from "@/app/_components/system-layout";
import { BoxReviewDetailGeneral } from "@/app/reviews/review-detail/section-client";



export default  function ReviewDetailPage  () {
  return <DashboardLayout >
   <BoxPostStatus classname={'mx-default mb-[20px]'}/>
  <BoxReviewDetailGeneral classname={'mx-default mb-[20px]'}/>
  </DashboardLayout>
}