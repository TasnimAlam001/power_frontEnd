import { Box, Stack, Typography } from "@mui/material";
import Date from "./components/date/page";
import Utilities from "./components/utilities/page";
import AllCharts from "./components/allCharts/page";


export default function Home() {
  return (
    <main>
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography sx={{ fontSize: 19, fontWeight: 600, color: "green" }}>
            All Utilities
          </Typography>
          
        <Date/>
          
        </Stack>
        <Box my={6}>
          <Utilities></Utilities>
        </Box>
        <Box>
          <AllCharts></AllCharts>
        </Box>
      </Box>
    </main>
  );
}
