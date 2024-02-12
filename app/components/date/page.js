"use client";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, Stack } from "@mui/material";

export default function Date() {
  return (
    <Box sx={{display: { xs: "none", sm: "block" }}}>
      <Stack direction="row" spacing={3} alignItems="center" width={550}>
        <p>From</p>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={3} alignItems="center">
              <DatePicker
                slotProps={{
                  textField: { size: "small", color: "success" },
                  openPickerButton: { color: "success" },
                }}
              />{" "}
              <span>To </span>
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
          <Button variant="contained" sx={{ backgroundColor: "#04984A" }}>
            Filter
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
