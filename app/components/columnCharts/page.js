"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  Box,
  Card,
  CardContent,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";

const theme = createTheme();
// const chartSetting = {
//   xAxis: [
//     {
//       label: "rainfall (mm)",
//     },
//   ],

// };
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

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function ColumnCharts() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const width = isSmallScreen ? 270 : 500;
  const height = isSmallScreen ? 300 : 380;
  const fontS = isSmallScreen ? 9 : 12;
  const boxHeight = isSmallScreen ? 400 : 460;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Card>
          <Stack
            sx={{ height: boxHeight }}
            direction="column"
            justifyContent="space-between"
          >
            <CardContent sx={{ alignContent: "end" }}>
              <Typography variant="h6">Long Pending Tickets Categories</Typography>
              <Stack
                sx={{ pl: 0, textAlign: "right" }}
                direction="row"
                alignContent="flex-end"
                justifyContent="flex-end"
              >
                
                  <BarChart
                    margin={{
                      right:0
                    }}
                    width={width}
                    height={height}
                    dataset={dataset}
                    yAxis={[
                      {
                        scaleType: "band",
                        dataKey: "name",
                        tickLabelStyle: {
                          fontSize: fontS,
                        },
                      },
                    ]}
                    series={[{ dataKey: "ticketCount" , color: "#CEB900"}]}
                    layout="horizontal"
                    xAxis={[
                      {
                        label: "Ticket Count",
                      },
                    ]}
                  />
               
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </div>
    </ThemeProvider>
  );
}
