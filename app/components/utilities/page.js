"use client"
import getAllUtilities from "@/lib/getAllUtilities";
import {
  Box,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 600,
      lg: 1024,
      xl: 1440,
    },
  },
});

export default async function utilities() {
  const result = await getAllUtilities();
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {result.map((utility) => (
          <Grid item xs={12} sm={6} lg={4} xl={2}  key={utility.id}>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box px={2} pt={2} pb={1}>
                <img
                  height={95}
                  width="100%"
                  src={utility.logo}
                  alt="logo"
                ></img>
                {/* <Image width={80} height={80} src={utility.logo} alt="logo"></Image> */}
              </Box>
              <Typography sx={{ fontSize: { xs: 13, sm: 20 } }}>
                Total Complaints
              </Typography>
              <Typography color="#04984A" mb={4} gutterBottom variant="h5">
                {utility.total_complaints}
              </Typography>

              <Box
                py={0.5}
                sx={{
                  fontSize: 10,
                  backgroundColor: "#dbf2d5",
                  width: "100%",
                  fontWeight: 550,
                  textAlign: "center",
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                }}
              >
                {utility.timestamp}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
