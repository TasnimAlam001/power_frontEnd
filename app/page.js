import { Box, Stack, ThemeProvider, Typography } from "@mui/material";
import Date from "./components/date/page";

import AllCharts from "./components/allCharts/page";
import theme from "./theme";
import Utilities from "./utilities/page";

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        
        <Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography sx={{ fontSize: 19, fontWeight: 600, color: "success.main" }}>
              All Utilities
            </Typography>

            <Date />
          </Stack>
          <Box my={6}>
            <Utilities></Utilities>
          </Box>
          <Box>
            <AllCharts></AllCharts>
          </Box>
        </Box>
      </ThemeProvider>
    </main>
  );
}
