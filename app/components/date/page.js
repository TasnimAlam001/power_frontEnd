"use client";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, Stack, ThemeProvider, Typography } from "@mui/material";
import theme from "@/app/theme";

export default function Date() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Stack direction="row" spacing={3} alignItems="center" width={550}>
          <Typography variant="body2">From</Typography>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack direction="row" spacing={3} alignItems="center">
                <DatePicker
                  slotProps={{
                    textField: { size: "small", color: "success" },
                    openPickerButton: { color: "success" },
                  }}
                />{" "}
                <Typography variant="body2">To </Typography>
                <DatePicker
                  slotProps={{
                    textField: { size: "small", color: "success" },
                    openPickerButton: { color: "success" },
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </Box>

          <Box>
            <Button variant="contained" sx={{ backgroundColor: "success.main" , "&:hover": {backgroundColor: "success.dark"} }}>
              Filter
            </Button>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
