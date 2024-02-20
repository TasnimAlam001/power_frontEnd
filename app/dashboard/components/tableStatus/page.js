import { Box } from '@mui/material'
import { deepOrange, green, orange } from '@mui/material/colors'
import React from 'react'

export default function TableStatusColumn({ params }) {
    // console.log("status page", params.formattedValue)
    const status = params.formattedValue;

    let backgroundColor;
    if (status === "Open") {
        backgroundColor = green[500];
    } else if (status === "Pending") {
        backgroundColor = orange[300];
    }else if (status === "Resolved") {
        backgroundColor = green[200];
    } else {
        backgroundColor = deepOrange[300];
    }

    return (
        <Box sx={{ p: 1, backgroundColor: backgroundColor, borderRadius: "10px" }}>
            {params.formattedValue}
        </Box>
    )
}
