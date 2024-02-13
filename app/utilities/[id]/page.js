// "use client";
import UtilityBarChart from "@/app/components/utilityBarChart/page";
import theme from "@/app/theme";
import getUtility from "@/lib/getUtility";
import { Box, ThemeProvider, Typography } from "@mui/material";
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

export default async function UtilityPage({ params }) {
  const { id } = params;
    console.log(id);
  const utility = await getUtility(id);
    // console.log("vitoreeee",utility);

  return (
    <ThemeProvider theme={theme}>
      <Box >
        <Box sx={{ width: 200 }}>
          <img width="100%" src={utility.logo} />
        </Box>
        <Typography variant="h6" color="success.main">
          Dhaka Electric Supply Company Limited : {id}
        </Typography>

        <Box>
          <UtilityBarChart></UtilityBarChart>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
