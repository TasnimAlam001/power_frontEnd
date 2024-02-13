"use client";
import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";

import { LineChart, axisClasses } from "@mui/x-charts";
import theme from "@/app/theme";

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 425,
//       md: 600,
//       lg: 1100,
//       xl: 1440,
//     },
//   },
// });
const chartSetting = {
  yAxis: [
    {
      label: 'Ticket Count',
    },
  ],

};
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


const openedData = data.map((item) => item.uv);
const xLabels = data.map((item) => item.name);

export default function AreaCharts() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));

  // const width = isSmallScreen ? 350 : 500;
  // const height = isSmallScreen ? 300 : 340;
  // const boxHeight = isSmallScreen ? 400 : 460;
  // const value = isSmallScreen ? 10 : 1;

  const width = isSmallScreen? 250 : isMediumScreen ? 360 : isLgScreen ? 560: 599;
  const height = isMediumScreen ? (isSmallScreen ? 280 : 330) : 400;
  const boxHeight = isMediumScreen ? (isSmallScreen ? 399 : 460) : 460;
  const fontS = isMediumScreen ? 10 : 15;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative" }}>
        {/* <Box
          sx={{
            position: "absolute",
            left: "-15px",
            top: "50%",
            display: { xs: "none", md: "block" },
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
        </Box> */}
        <Card>
          <Stack
            sx={{ height:  boxHeight }}
            direction="column"
            justifyContent="space-between"
          >
            <CardContent>
              <Typography variant="h6">Utility Wise Long Pending Opened Tickets</Typography>
              <Stack sx={{ mt: 3, pl: {md:2} }} direction="row" alignItems="center">
                <LineChart
                 
                  margin={{
                    top: 70,
                    left: isMediumScreen?30: 75,
                    right: 35,
                    bottom:60
                  }}
                  width={width}
                  height={height}
                  series={[
                    {
                      data: openedData,
                      label: "Opened Tickets",
                      area: true,
                      showMark: true,

                      gradient: {
                        from: "#1ACBC0",
                        to: "#D9D9D9",
                      },
                    },
                  ]}
                  slotProps={{
                    legend:{
                      itemMarkWidth: 10,
                      itemMarkHeight: 10,
                      labelStyle: {
                        fontSize: 15,
                      },
                    }
                  }}
                  xAxis={[
                    {
                      scaleType: "point",
                      data: xLabels,
                      tickLabelStyle: {
                        angle: isMediumScreen? 70: 0,
                        textAnchor: isMediumScreen? 'start': 'middle',
                        fontSize: fontS,
                      },
                    },
                  ]}
                  // bottomAxis={{
                  //   labelStyle: {
                  //     fontSize: 14,
                  //     // transform: `translateY(${
                  //     //       // Hack that should be added in the lib latter.
                  //     //       5 * Math.abs(Math.sin((Math.PI * props.angle) / 180))
                  //     //     }px)`
                  //   },
                  //   tickLabelStyle: {
                  //     angle: 90,
                  //     textAnchor: 'start',
                  //     fontSize: 12,
                  //   },
                  // }}

                  sx={{
                    "& path": {
                      fill: "url(#linear-gradient)",
                    },
                    ".MuiLineElement-root": {
                      display: "none",
                    },
                    [`.${axisClasses.left} .${axisClasses.label}`]: {
                      transform: 'translate(-20px, 0)',
                    },

                  }}
                  {...chartSetting}
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#1ACBC0"
                        stopOpacity={0.95}
                      />
                      <stop offset="100%" stopColor="#D9D9D9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </LineChart>
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
