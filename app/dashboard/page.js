import { ThemeProvider } from "@mui/material";

import webTheme from "../theme";

import DashboardComponent from "./components/DashboardComponent/DashboardComponent";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  
  
  // get session from next auth package 
  const authData = await auth();

  console.log("authData: ", authData)
  // console.log("session-token: ", session?.user.token)
  if(!authData) redirect("/api/auth/signin");
  return (
    <main>
      <ThemeProvider theme={webTheme}>
        <DashboardComponent />
      </ThemeProvider>
    </main>
  );
}
