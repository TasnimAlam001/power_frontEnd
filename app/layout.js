import { Inter } from "next/font/google";
import "./globals.css";
import NavBarDrawer from "./components/navBar/page";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import webTheme from "./theme";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Power Division",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={webTheme}>
          <CssBaseline/>
          <Box>
            <NavBarDrawer>{children}</NavBarDrawer>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
