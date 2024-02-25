import { ThemeProvider } from "@mui/material";

import webTheme from "../theme";

import DashboardComponent from "./components/DashboardComponent/DashboardComponent";

export default function Dashboard() {
  return (
    <main>
      <ThemeProvider theme={webTheme}>
        <DashboardComponent />
      </ThemeProvider>
    </main>
  );
}
