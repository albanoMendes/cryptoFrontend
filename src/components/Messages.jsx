//import React from 'react'
import { Paper, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
function Messages({message}) {
  return (
    <Paper
        elevation={0}
        sx={{
            p: 5,
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Typography
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',	
                fontSize: '15px',
                color: 'red',
                fontFamily: 'Roboto, sans-serif',
                '@media (max-width: 600px)': { fontSize: '10px' },
            }}  
        >
            {message}
        </Typography>
    </Paper>
  )
}

export default Messages