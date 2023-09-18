import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function InvestirEm({setValue}) {
  return (
    <Box  sx={{display: 'flex', flexDirection: 'column', justifyItems: 'center'}}>
        <Typography 
          sx={{
            fontWeight: 'bold',
            fontSize: '20px',
            p: 1,
            fontFamily: 'Roboto, sans-serif',
          }}
        >
            INVESTIR EM:
        </Typography>
        <Button 
          fullWidth
          onClick={() => setValue(1)}
          sx={{
            mb: 1, 
            p: 1,          
            color: 'white',            
            borderStyle: 'inset',
            cursor: 'pointer',		
            textDecoration: 'none',
            fontSize: '20px',
            fontFamily: 'Roboto, sans-serif',  
            bgcolor: 'rgba(0, 128, 155, 0.6)',
            '&:hover': {
                color: '#013039',
                cursor: 'pointer',
                transition: '0.3s ease-in',
            '@media (max-width: 600px)': { fontSize: '15px' },
                
            },
          }}
        >
            MOEDAS CONVENCIONAIS
        </Button>
        <Button 
          fullWidth
           onClick={() => setValue(2)}
          sx={{      
            p: 1,          
            color: 'white',            
            borderStyle: 'inset',
            cursor: 'pointer',		
            textDecoration: 'none',
            fontSize: '20px',
            fontFamily: 'Roboto, sans-serif',  
            bgcolor: 'rgba(0, 128, 155, 0.6)',
            '&:hover': {
                color: '#013039',
                cursor: 'pointer',
                transition: '0.3s ease-in',
            '@media (max-width: 600px)': { fontSize: '15px' },
                
            },
          }}
        >
          CRIPTOMOEDAS
        </Button>
    </Box>
  );
}

export default InvestirEm;
