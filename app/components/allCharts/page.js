"use client"
import { Grid } from '@mui/material'
import React from 'react'
import PieChars from '../pieCharts/page'
import BarCharts from '../barCharts/page'
import AreaCharts from '../areaCharts/page'
import ColumnCharts from '../columnCharts/page'



export default function AllCharts() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
            <PieChars/>
        </Grid>
        <Grid item xs={12} sm={7}>
            <BarCharts/>
        </Grid>
        <Grid item xs={12} sm={5}>
            <AreaCharts/>
        </Grid>
        <Grid item xs={12} sm={7}>
            <ColumnCharts/>
        </Grid>
     

      
    </Grid>
  )
}
 