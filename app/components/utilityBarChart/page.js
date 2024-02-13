"use client"
import { BarChart } from "@mui/x-charts";
import React from "react";

const seriesA = {
  data: [
    2, 3, 1, 4, 5, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1,
    2, 4, 5, 1, 5, 1,
  ],
  label: "Series A",
};
const seriesB = {
  data: [
    3, 1, 4, 2, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1,
    2, 4, 5, 1, 5, 1,
  ],
  label: "Series B",
};
const seriesC = {
  data: [
    3, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1,
    2, 4, 5, 1, 5, 1,
  ],
  label: "Series C",
};
const seriesD = {
  data: [
    3, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 1,
    2, 4, 5, 1, 5, 1,
  ],
  label: "Series D",
};
export default function UtilityBarChart() {
  return (
    <BarChart
      width={1000}
      height={300}
      series={[
        { ...seriesA, stack: "total" },
        { ...seriesB, stack: "total" },
        { ...seriesC, stack: "total" },
        { ...seriesD, stack: "total" },
      ]}
    />
  );
}
