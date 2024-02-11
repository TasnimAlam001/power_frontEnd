import { Grid } from '@mui/material'
import React from 'react'
import PieChars from '../pieCharts/page'

export default function AllCharts() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
            <PieChars></PieChars>
        </Grid>
        <Grid item xs={12} sm={7}>

        </Grid>
     

      
    </Grid>
  )
}
 