import dynamic from "next/dynamic";

import {ApexOptions} from "apexcharts";

const ReactApexCharts = dynamic(() => import("react-apexcharts"), {ssr: false});

type ChartProps = {
  type?: | "line" | "area" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap";
  series?: ApexOptions["series"];
  width?: string | number;
  height?: string | number;
  options?: ApexOptions;
  [key: string]: any;
} // get from ReactApexChart.props

export const Chart = (props: ChartProps) => {
  return <ReactApexCharts {...props}/>
}