"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";

const theme = createTheme();

const data = [
  { label: "Opened", value: 273, color: "#04984A" },
  { label: "Processing", value: 236, color: "#10C6FF" },
  { label: "Solved", value: 374, color: "#3382EF" },
  { label: "Reopened", value: 310, color: "#00BBC7" },
];

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChars() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const width = isSmallScreen ? 360 : 410;
  const markH = isSmallScreen ? 9 : 15;
  const markFont = isSmallScreen ? 14 : 18;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Card>
          <Stack sx={{ height: 460 }} direction="column" justifyContent="space-between">
            <CardContent >
              <Typography variant="h5">Total Tickets</Typography>
              <PieChart
                series={[
                  {
                    outerRadius: 95,
                    innerRadius: 50,
                    data,
                    arcLabel: getArcLabel,
                  },
                ]}
                slotProps={{
                  legend: {
                    itemMarkWidth: markH,
                    itemMarkHeight: markH,
                    labelStyle:{
                      fontSize:14
                    }
                  }
                }}
                width={width}
                height={250}   
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: "white",
                    fontSize: 13,
                  },
                }}
              />
              <Divider sx={{ pt: 4 }} />
              <Grid container columnSpacing={1} sx={{ mt: 4, pl: 3 }}>
                {data.map((name, index) => (
                  <Grid item xs={6} key={name.label}>
                    <Typography sx={{fontSize:{xs:13, sm:15}}} className="list-disc  ">
                      {index + 1}. {name.label} Tickets-{name.value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
            <Typography
              bgcolor="#ecedeb"
              pt={0.5}
              textAlign="center"
              variant="caption"
              sx={{ fontWeight: 550, color: "#048943" }}
              className=" bg-slate-200 text-green-700 align-bottom font-bold py-2 text-center"
            >
              Total Tickets : {TOTAL}
            </Typography>
          </Stack>
        </Card>
      </div>
    </ThemeProvider>
  );
}
