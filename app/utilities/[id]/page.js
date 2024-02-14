// "use client";
import ColumnCharts from "@/app/components/columnCharts/page";
import UtilityBarChart from "@/app/components/utilityBarChart/page";
import UtilityPie from "@/app/components/utilityPie/page";
import UtilityPie2 from "@/app/components/utilityPie2/page";
import theme from "@/app/theme";
import getUtility from "@/lib/getUtility";
import { Box, Grid, Stack, ThemeProvider, Typography } from "@mui/material";
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
    <Box>
      <Box sx={{ width: 200 }}>
        <img width="100%" src={utility.logo} />
      </Box>
      <Typography variant="h6" color="success.main">
        Dhaka Electric Supply Company Limited : {id}
      </Typography>

      <Box mt={6}>
        <UtilityBarChart></UtilityBarChart>
      </Box>
      <Box mt={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={7}>
            <ColumnCharts></ColumnCharts>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Stack justifyContent="space-between" sx={{display: "flex", flexDirection: {xs: "column", md: "row", xl: "column"}}} spacing={{xs:3, md:0, xl:3 } }>
              <Grid item>

                  <UtilityPie></UtilityPie>

              </Grid>
              <Grid item>

                <UtilityPie2></UtilityPie2>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
