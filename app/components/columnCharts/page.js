"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  Card,
  CardContent,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";

const theme = createTheme();
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const width = isSmallScreen ? 360 : 500;
  const height = isSmallScreen ? 330 : 400;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Card>
          <Stack
            sx={{ height: 460 }}
            direction="column"
            justifyContent="space-between"
          >
            <CardContent>
              <Typography variant="h5">Total Tickets</Typography>
              <Stack sx={{ pl: 2 }} direction="row" alignItems="center">
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
    </ThemeProvider>
  );
}
