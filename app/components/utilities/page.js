"use client";
import theme from "@/app/theme";
import getAllUtilities from "@/lib/getAllUtilities";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 425,
//       md: 600,
//       lg: 1024,
//       xl: 1440,
//     },
//   },
// });

export default async function utilities() {
  const result = await getAllUtilities();
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {result.map((utility) => (
          <Grid item xs={12} sm={6} lg={4} xl={2} key={utility.id}>
            {/* <Card>
              <CardActionArea>
                <CardContent
                  sx={{
                    height: "100",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    // boxShadow: "0px -4px 4px -4px rgba(0,0,0,0.2), 4px 0px 4px -4px rgba(0,0,0,0.2), -4px 0px 4px -4px rgba(0,0,0,0.2)" ,
                    //  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px rgba(0,0,0,0)',

                    // boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0)',

                    borderRadius: "0.5rem", // Set border radius for the corners
                  }}
                >
                  <Box px={2} pt={2} pb={1}>
                    <img
                      height={95}
                      width="100%"
                      src={utility.logo}
                      alt="logo"
                    ></img>
                  </Box>
                  <Typography sx={{ fontSize: { xs: 13, sm: 20 } }}>
                    Total Complaints
                  </Typography>
                  <Typography
                    sx={{ color: "success.main" }}
                    mb={4}
                    gutterBottom
                    variant="h5"
                  >
                    {utility.total_complaints}
                  </Typography>

                  <Box
                    py={0.5}
                    sx={{
                      fontSize: 10,
                      backgroundColor: "success.light",
                      width: "100%",
                      fontWeight: 550,
                      textAlign: "center",
                      borderBottomLeftRadius: 2,
                      borderBottomRightRadius: 2,
                    }}
                  >
                    {utility.timestamp}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card> */}

            <Paper
              elevation={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                // boxShadow: "0px -4px 4px -4px rgba(0,0,0,0.2), 4px 0px 4px -4px rgba(0,0,0,0.2), -4px 0px 4px -4px rgba(0,0,0,0.2)" ,
                //  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12), 0px 0px 0px 0px rgba(0,0,0,0)',

                // boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0)',

                borderRadius: "0.5rem", // Set border radius for the corners
              }}
            >
              <Box px={2} pt={2} pb={1}>
                <img
                  height={95}
                  width="100%"
                  src={utility.logo}
                  alt="logo"
                ></img>
              </Box>
              <Typography sx={{ fontSize: { xs: 13, sm: 20 } }}>
                Total Complaints
              </Typography>
              <Typography
                sx={{ color: "success.main" }}
                mb={4}
                gutterBottom
                variant="h5"
              >
                {utility.total_complaints}
              </Typography>

              <Box
                py={0.5}
                sx={{
                  fontSize: 10,
                  backgroundColor: "success.light",
                  width: "100%",
                  fontWeight: 550,
                  textAlign: "center",
                  // marginBottom: -1,
                  color: "black",
                  
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
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
