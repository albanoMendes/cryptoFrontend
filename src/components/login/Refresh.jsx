//import React from 'react'
//import React from 'react'

import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

function Refresh() {
  return (
    <form style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
          <Grid fullWidth>
            <Paper
                elevation={0}
                style={{
                    padding: '3px 10px 10px 30px',		
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
                        fontSize: '25px',
                        mb: 1,
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 600px)': { fontSize: '15px' },
                    }}
                    >
                    New Password
                </Typography>						
                </Grid>
                    <TextField 						
                    label="Senha" 
                    placeholder="Senha" 
                    type="password"
                    name="password"
                    sx={{mb: 1}}
                    //onChange={handleChannge}
                    //value={data.password}  
                    fullWidth 
                    required
                />
                <TextField 						
                    label="Confirma a senha" 
                    placeholder="Confirma a senha" 
                    type="password"
                    name="repassword"
                    //onChange={handleChannge}
                    //value={data.repassword}  
                    fullWidth 
                    required
                  />	
                  <Button 
                    type="submit"
                    //onClick={handleChange("event", 1)}
                    sx={{
                        margin: '8px 0',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        height: '50px',
                        textDecoration: 'none',
                        fontSize: '15px',
                        backgroundColor: '#00809b',
                        '&:hover': {
                        color: '#013039',
                        cursor: 'pointer',
                        transition: '0.3s ease-in',
                        },
                    }}												
                    fullWidth
                > 
                    Update
                </Button>
            </Paper>
          </Grid>   
    </form> 
    
  )
}

export default Refresh;