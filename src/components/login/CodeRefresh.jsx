//import React from 'react'

import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
function CodeRefresh({handleChange}) {
  return (
    <form style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
        <Grid fullWidth>
            <Paper
                elevation={0}                
                sx={{                    
                    p: '3px 20px 10px 20px',		
                    fontSize: '20px',             		
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
             <Grid align="center">						
                <Typography
                    component="h5"
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',	
                        fontSize: '20px',
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 600px)': { fontSize: '15px' },
                    }}
                >
                code in to continue
                </Typography>              
            </Grid>   
            <TextField							
                type="number"
                placeholder="Insere o codigo" 
                name="codigo"
                //onChange={handleChange("event", 4)}							
                //value={user.email} 
                fullWidth 
                required
                sx={{								
                    mb: 1,
                    mt: 1,
                    fontFamily: 'Roboto, sans-serif',
                }}
            /> 
            <Box>		
                <Button 
                    //type="submit" 
                    onClick={()=> handleChange("event", 4)}						
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
                    //onClick={submitForm}
                > 
                    OK
                </Button>
                <Button 
                type="submit" 
                    sx={{
                        ml: 0.5,
                        color: '#677F88',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '12px',
                        '&:hover': {
                        color: 'white',
                        backgroundColor: '#677F88',
                        transition: 'all 400ms',
                        },
                    }}
                > 
                Reenviar
            </Button>   
			</Box>    
                  
            </Paper>
        </Grid>  
    </form>
  )
}

export default CodeRefresh