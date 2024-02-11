"use client"
import * as React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { curveCardinal } from "d3-shape";
import { LineChart } from "@mui/x-charts";

const data = [
  {
    name: "BPDP",
    uv: 300,
  },
  {
    name: "BREB",
    uv: 330,
  },
  {
    name: "DESCO",
    uv: 210,
  },
  {
    name: "DPDC",
    uv: 390,
  },
  {
    name: "WZPDCL",
    uv: 395,
  },
  {
    name: "NESCO",
    uv: 520,
  },
];
const cardinal = curveCardinal.tension(0.2);

const openedData = data.map((item) => item.uv);
const xLabels = data.map((item) => item.name);

export default function AreaCharts() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          left: "-15px",
          top: "50%",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography
          sx={{
            transform: "rotate(-90deg)",
            display: "block",
            textAlign: "center",
          }}
        >
          Ticket Count
        </Typography>
      </Box>
      <Card>
        <Stack
          sx={{ height: 460 }}
          direction="column"
          justifyContent="space-between"
        >
          <CardContent>
            <Typography variant="h5">Total Tickets</Typography>
            <Stack sx={{ mt: 3, pl: 2 }} direction="row" alignItems="center">
              <LineChart
                width={500}
                height={340}
                series={[
                  {
                    data: openedData,
                    label: "uv",
                    area: true,
                    showMark: true,
                
                    gradient: {
                      from: "#1ACBC0",
                      to: "#D9D9D9",
                    },
                  },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
                sx={{
                  "& path": {
                    fill: "url(#linear-gradient)",
                  },
                  ".MuiLineElement-root": {
                    display: "none",
                  },
                }}
              >
                <defs>
                  <linearGradient id="linear-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1ACBC0" stopOpacity={0.95} />
                    <stop offset="100%" stopColor="#D9D9D9" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </LineChart>
            </Stack>
          </CardContent>
        </Stack>
      </Card>
    </Box>
  );
}
