"use client";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import React from "react";
import NavBarDrawer from "./components/navBar/page";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });
const drawerWidth = 223;
export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const noNavbar = pathname.includes("login");

  return (
    <html lang="en">
      <body className={inter.className}>
      
          <Box>{noNavbar || <NavBarDrawer></NavBarDrawer>}</Box>

          <Box
            sx={{
              mt: 10,
              ml: { xs: 2, md: `${drawerWidth}px` },
              mr: { xs: 2, md: 3 },
            }}
          >
            {children}
          </Box>
     
      </body>
    </html>
  );
}
