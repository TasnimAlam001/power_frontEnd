import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <Box>
        Requested page is not found. <br></br>

        Go Back to <Link href="/" color='success.main' > Home</Link>
      
    </Box>
  )
}
