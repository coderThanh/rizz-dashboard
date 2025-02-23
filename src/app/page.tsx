import {DashboardLayout} from "@/app/_components/system-layout";
import {EcommerceGroupChartOne} from "@/app/sections";

export default function HomePage() {
  return (
    <DashboardLayout>
      <EcommerceGroupChartOne classname={'px-default'}/>
      <div className='min-h-[300vh] px-default mt-[20px]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia est
        facilis distinctio animi. Vero sit ducimus, ad alias quidem deserunt
        officia commodi enim doloribus voluptates illo asperiores animi! Magnam,
        rerum.
      </div>
    </DashboardLayout>
  )
}
