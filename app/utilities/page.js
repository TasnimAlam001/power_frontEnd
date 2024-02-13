// "use client";
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
import Link from "next/link";
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

export default async function Utilities() {
  const result = await getAllUtilities();
  // console.log(result)
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {result.map((utility) => (
          <Grid item xs={12} sm={6} lg={4} xl={2} key={utility.id}>
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                borderRadius: "0.5rem",
              }}
            >
              <Link href={`/utilities/${utility.id}`}>
                <Box px={2} pt={2} pb={1}>
                  <img
                    height={95}
                    width="100%"
                    src={utility.logo}
                    alt="logo"
                  ></img>
                </Box>
              </Link>
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
