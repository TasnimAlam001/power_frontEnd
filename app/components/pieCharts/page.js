"use client";
import * as React from "react";

// import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";

const data = [
  { label: "Opened", value: 273, color: "#04984A" },
  { label: "Processing", value: 236, color: "#10C6FF" },
  { label: "Solved", value: 374, color: "#3382EF" },
  { label: "Reopened", value: 310, color: "#00BBC7" },
];

const sizing = {
  width: 410,
  height: 250,
};

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChars() {
  return (
    <div>
      <Card >
        <Stack sx={{ height: 460 }} direction="column" justifyContent="space-between">
          <CardContent className="p-0">
            <Typography variant="h5">Total Tickets</Typography>
            <PieChart
              series={[
                {
                  outerRadius: 100,
                  innerRadius: 50,
                  data,
                  arcLabel: getArcLabel,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 13,
                },
              }}
              {...sizing}
            />{" "}
            <Divider sx={{ pt: 4 }}></Divider>
            <Grid container columnSpacing={1} sx={{ mt: 4, pl: 3 }}>
              {data.map((name, index) => (
                <Grid item xs={6} key={name.label}>
                  <Typography sx={{ listStyle: "" }} className="list-disc  ">
                    {index + 1}. {name.label} Tickets-{name.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <Typography bgcolor="#ecedeb" pt={0.5} textAlign="center" variant="caption" sx={{fontWeight:550, color: "#048943"}} className=" bg-slate-200 text-green-700 align-bottom font-bold py-2 text-center">
            Total Tickets : {TOTAL}
          </Typography>
        </Stack>
      </Card>
    </div>
  );
}
         