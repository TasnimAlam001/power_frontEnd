
import { Box, Stack, ThemeProvider, Typography } from "@mui/material";
import Date from "./components/date/page";
import Utilities from "./utilities/page";
import AllCharts from "./components/allCharts/page";
import webTheme from "../theme";
import { usePathname } from "next/navigation";
import NavBarDrawer from "./components/navBar/page";


export default function Dashboard() {

  return (
    <main>
      <ThemeProvider theme={webTheme}>
        

        <Box
          
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{ fontSize: 19, fontWeight: 600, color: "success.main" }}
            >
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
