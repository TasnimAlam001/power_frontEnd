
import getAllUtilities from "@/lib/getAllUtilities";
import { Box, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";


export default async function Utilities() {
  const result = await getAllUtilities();
  // console.log(result)
  return (
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
            <Link href={`/dashboard/utilities/${utility.id}`}>
              <Box px={2} pt={2} pb={1}>
                <img
                  height={95}
                  width="100%"
                  src={utility.logo}
                  alt="logo"
                ></img>
              </Box>
            </Link>
            <Typography sx={{ fontSize: { xs: 13, md: 17 } }}>
              Total Complaints
            </Typography>
            <Typography
              sx={{ color: "success.main" }}
              mb={3}
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
  );
}
