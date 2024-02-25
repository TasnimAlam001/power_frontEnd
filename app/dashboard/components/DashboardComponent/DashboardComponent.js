"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Date from "../date/page";
import Utilities from "../../utilities/page";
import AllCharts from "../allCharts/page";
import useAxiosSecure from "../../Hooks/useAxiousSecure";

const DashboardComponent = () => {
  const [utility, setUtility] = useState([]);

  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    axiosSecure("/web-app/dashboard").then((res) => {
      console.log(res);
      const utilities = res.data.data.companyListWithTickets;
      setUtility(utilities);
      console.log("data: ", utilities);
      // console.log("data1: ",  res.data.data.companyListWithTickets);
    });
  }, [axiosSecure]);



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
      <Box my={6}>
        <Utilities utility={utility}></Utilities>
      </Box>
      <Box>
        <AllCharts></AllCharts>
      </Box>
    </Box>
  );
};

export default DashboardComponent;
