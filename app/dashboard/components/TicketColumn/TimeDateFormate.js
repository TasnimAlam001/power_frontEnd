import { Box } from "@mui/material";
import React from "react";

export default function TimeDateFormate({ params }) {
  const dateTime = params.formattedValue;

  const split_string = dateTime.split(" ");
  // console.log(split_string)
  const formatted_string = split_string.join("\n");
  // console.log(formatted_string)

  return <Box>{formatted_string}</Box>;
}
