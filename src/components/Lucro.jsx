//import React from 'react'
import Lucropng from '../images/Lucro.png';
import { Avatar, Paper, Typography } from "@mui/material"

function Lucro() {
  return (
    <Paper
        sx={{
            textAlign: 'center',
            mt: 1,
        }}
        elevation={1}
    >      <Avatar         
                alt="Remy Sharp"
                src={Lucropng}
                sx={{ width: 100, height: 100, m: 'auto' }}
            />
 
            <Typography
              variant="caption"
              sx={{
                pl: 1,
                pr: 1,
                fontWeight: 'bold',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '.6rem',
              }}
            >
             SALDO DOS INVESTIDORES
          </Typography>
          <Typography
                variant="h1"
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',           
                  
                  fontSize: '1.2rem',
                  color: 'black',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                {'$'} {'24.083'}
            </Typography>
    </Paper>
  )
}

export default Lucro