// "use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
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

const data = [
  {
    name: "BPDB",
    Solved: 1000,
    Opened: 800,
  },
  {
    name: "BREB",
    Solved: 2700,
    Opened: 1600,
  },
  {
    name: "DESCO",
    Solved: 300,
    Opened: 200,
  },
  {
    name: "DPDC",
    Solved: 1400,
    Opened: 1650,
  },
  {
    name: "WZPDCL",
    Solved: 1400,
    Opened: 1000,
  },
  {
    name: "NESCO",
    Solved: 490,
    Opened: 800,
  },
];

const solvedData = data.map((item) => item.Solved);
const openedData = data.map((item) => item.Opened);
const xLabels = data.map((item) => item.name);

export default function BarCharts() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));

  // const width = isSmallScreen ? 360 : 600;
  // const height = isSmallScreen ? 330 : 400;
  const width = isSmallScreen? 260 : isMediumScreen ? 360 : isLgScreen ? 560: 599;
  const height = isMediumScreen ? (isSmallScreen ? 290 : 330) : 400;
  const boxHeight = isMediumScreen ? (isSmallScreen ? 410 : 460) : 460;
  const fontS = isSmallScreen ? 9 : 12;
  // const boxHeight = isSmallScreen ? 400 : 460;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative" }}>
        <Box
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
        </Box>
        <Card>
          <Stack
            sx={{ height: boxHeight }}
            direction="column"
            justifyContent="space-between"
          >
            <CardContent>
              <Typography variant="h6">
                Utility Wise Tickets ( Opened and Solved)
              </Typography>
              <Stack sx={{ mt: 3 }} direction="row" alignItems="center">
                <BarChart
                  margin={{
                    top: 60,
                    bottom: 90,
                    right: 20,
                  
                  }}
                  width={width}
                  height={height}
                  series={[
                    {
                      data: openedData,
                      label: "Opened",
                      id: "openedId",
                      color: "#04984A",
                    },
                    {
                      data: solvedData,
                      label: "Solved",
                      id: "solvedId",
                      color: "#3382EF",
                    },
                  ]}
                  slotProps={{
                    legend:{
                      itemMarkHeight: 9,
                      itemMarkWidth:9,
                      labelStyle: {
                        fontSize: 15,
                      },
                    }
                  }}
                  xAxis={[
                    {
                      data: xLabels,
                      
                      scaleType: "band",
                      tickLabelStyle: {
                        angle: isMediumScreen? 90: 0,
                        textAnchor: 'start',
                        fontSize: fontS,
                      },
                    },
                  ]}
                />
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
