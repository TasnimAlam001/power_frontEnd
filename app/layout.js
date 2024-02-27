import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import webTheme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={webTheme}>
            <CssBaseline/>
            {children}</ThemeProvider>
      </body>
    </html>
  );
}
