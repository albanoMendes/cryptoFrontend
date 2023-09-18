//import React from 'react'

import { Box, Divider, List, Paper, Typography } from "@mui/material"
import BoxInvest from "./BoxInvest"
import { useEffect, useState } from "react";
//import { useState } from "react";

function InvstList({ investimentos, setInvestimentos, nome }) {
    const [total, setTotal] = useState(0);
    let tot = 0;

    
    useEffect(() => {
        for(let i = 0; i < investimentos.length; i = i + 1 ) {
            tot += investimentos[i].total;
        }
        setTotal(tot);
    }, [tot]);
    
    return (
        <>
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
                        fontSize: '.8rem',               
                    }}
                    >
                    INVESTIDOR:
                </Typography>
                <Typography
                    component={'div'}
                    sx={{  
                        fontWeight: 'bold',
                        color: 'green',                        
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1rem',  
                        
                    }}
                    >
                    {nome}                    
                </Typography>
            </Box>
             <Divider />
            <List sx={{ width: '100%', minWidth: 360, bgcolor: 'white' }}>
                {
                    investimentos.map(investimento =>
                        <BoxInvest key={investimento.id} investimento={investimento} />
                    )        
                }        
            </List>
            <Divider />
            <Paper>
                <Typography 
                    component={'h1'}    
                    sx={{                            
                        ml: 1,
                        textAlign: 'center',                            
                        display: 'flex',
                        alignItems: 'center',                      

                    }}
                >
                    <Typography sx={{ mt: 2, mr: 1, fontSize: '0.5', fontWeight: 'bold',   }}>{'TOTAL $:'}</Typography>
                    <Typography sx={{                                                                            
                            fontSize: '2.5rem',
                            color: 'black',
                            fontFamily: 'Roboto, sans-serif',
                        }}
                    >
                        {total}
                    </Typography> 
                </Typography>
            </Paper>
        </>
      
    )
}

export default InvstList