"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Date from "../date/page";
import Utilities from "../../utilities/page";
import AllCharts from "../allCharts/page";

import useAllData from "@/lib/useAllData";

const DashboardComponent = () => {
  const utility = useAllData();

  // console.log(utility);

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          sx={{ fontSize: 19, fontWeight: 600, color: "success.main" }}
        >
          All Utilities
        </Typography>

        <Date />
      </Stack>
      {utility && (
        <>
          <Box my={6}>
            <Utilities utility={utility} />
          </Box>
          <Box>
            <AllCharts></AllCharts>
          </Box>
        </>
      )}
    </Box>
  );
};

export default DashboardComponent;
