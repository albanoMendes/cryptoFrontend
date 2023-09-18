//import React from 'react'

import { Box, Button, Paper, Typography } from "@mui/material"

function BoxDeposito({deposito, setOpenModel}) {
  return (
    <Paper sx={{p: 1}}>
        <Box
          sx={{ 
          mt: 1,
          mb: 1,                
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', 
          justifyItems: 'center',
          }}
      >

          <Typography
              variant="caption"
              sx={{  
                  fontWeight: 'bold',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '.5rem',               
              }}
              >
              TOTAL $:
          </Typography>
          <Typography
              component={'div'}
              sx={{  
                  fontWeight: 'bold',
                  color: 'green',                        
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '.8rem',  
                  
              }}
              >
              {deposito.total}                    
          </Typography>
      </Box>
      
        <Box
            sx={{ 
            mt: 1,
            mb: 1,                
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            justifyItems: 'center',
            }}
        >

          <Typography
              variant="caption"
              sx={{  
                  fontWeight: 'bold',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '.5rem',               
              }}
              >
              DATA:
          </Typography>
          <Typography
              component={'div'}
              sx={{  
                  fontWeight: 'bold',
                  color: 'green',                        
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '.8rem',  
                  
              }}
              >
              {deposito.data}                    
          </Typography>
      </Box>
      <Box>
          <img    
            src={new URL(`../../images/depositos/${deposito.comprovante}`, import.meta.url)}//{ foto : }
            //style={styles.image}
            width={225}
            height={250}
            alt="Thumb"
          />
      </Box>
      <Button 
					type="submit" 							
          sx={{
            m: '2px 0',
            color: 'white',
            border: 'none',
            cursor: 'pointer',		
            textDecoration: 'none',
            fontSize: '12px',
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: '#00809b',
            '&:hover': {
            color: '#013039',
            cursor: 'pointer',
            transition: '0.3s ease-in',
            },
          }}			
          onClick={()=> setOpenModel(false)}
        > 
          OK
      </Button>
    </Paper>
  )
}

export default BoxDeposito