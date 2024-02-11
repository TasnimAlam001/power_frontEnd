"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Card, CardContent, Stack, Typography } from "@mui/material";

const chartSetting = {
  xAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    name: "Recharge Related",
    ticketCount: 530,
  },
  {
    name: "Voltage Related",
    ticketCount: 400,
  },
  {
    name: "Fuse Releted",
    ticketCount: 320,
  },
  {
    name: "Transformer Releted",
    ticketCount: 300,
  },
  {
    name: "Shutdown Releted",
    ticketCount: 220,
  },
  {
    name: "Load Releted",
    ticketCount: 130,
  },
  {
    name: "Query BPDB Releted",
    ticketCount: 30,
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function ColumnCharts() {
  return (
    <div>
      <Card>
        <Stack
          sx={{ height: 460 }}
          direction="column"
          justifyContent="space-between"
        >
          <CardContent>
            <Typography variant="h5">Total Tickets</Typography>
            <Stack sx={{  pl: 2 }} direction="row" alignItems="center">
              <BarChart
                sx={{ pl: 4 }}
                dataset={dataset}
                yAxis={[{ scaleType: "band", dataKey: "name" }]}
                series={[{ dataKey: "ticketCount", valueFormatter }]}
                layout="horizontal"
                {...chartSetting}
              />
            </Stack>
          </CardContent>
        </Stack>
      </Card>
    </div>
  );
}
