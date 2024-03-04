import { ThemeProvider } from "@mui/material";

import webTheme from "../theme";

import DashboardComponent from "./components/DashboardComponent/DashboardComponent";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  console.log("session: ", session)
  // console.log("session-token: ", session?.user.token)
  if(!session) redirect("/api/auth/signin");
  return (
    <main>
      <ThemeProvider theme={webTheme}>
        <DashboardComponent />
      </ThemeProvider>
    </main>
  );
}
