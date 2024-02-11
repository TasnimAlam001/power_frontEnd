"use client";
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

const theme = createTheme();

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

export default function CustomBarChart() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const width = isSmallScreen ? 360 : 600;
  const height = isSmallScreen ? 330 : 400;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", left: "-15px", top: "50%", display: { xs: 'none', sm: 'block' }, }}>
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
              <Stack sx={{mt:3}} direction="row" alignItems="center">
                <BarChart
                  width={width}
                  height={height}
                  series={[
                    { data: openedData, label: "Opened", id: "openedId", color: "#04984A" },
                    { data: solvedData, label: "Solved", id: "solvedId" , color: "#3382EF"},
                  ]}
                  xAxis={[{ data: xLabels, scaleType: "band" }]}
                />
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
