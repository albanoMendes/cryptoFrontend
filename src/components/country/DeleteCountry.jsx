//import React from 'react'

import { Box, Button, Divider, Paper, Typography } from "@mui/material"
import { useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function DeleteCountry({ pais, setOpenModel, setCurrencies }) {

    const [message, setMessage] = useState('');

   
    const handleDelete = (e) => { 
        e.preventDefault();
        setMessage('');
        
    }

    return (
        <Box
            sx={{
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Paper
                elevation={0}
            >
                <Box sx={{mb: 2}}>
                    <Typography
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',	
                            fontSize: '15px',                        
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 600px)': { fontSize: '10px' },
                        }}  
                    >
                        {`Tem certeza que dezeja excluir o pais ${pais.name} ?`}
                    </Typography>
                    <Typography
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',	
                            fontSize: '10px',
                            color: 'red',
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 600px)': { fontSize: '8px' },
                        }}  
                    >
                        {message}
                    </Typography>
                </Box >
                <Divider/>
                <Box sx={{mt: 0.2}}>
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
                            backgroundColor: 'red',
                            '&:hover': {
                            color: '#013039',
                            cursor: 'pointer',
                            transition: '0.3s ease-in',
                            },
                        }}			
                        onClick={()=> handleDelete()}
                    > 
                            {'EXCLUIR'}
                    </Button>
                    <Button
                        onClick={() => setOpenModel(false)}
                        type="submit" 
                        sx={{
                            ml: 0.5,
                            color: 'black',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '12px',
                            '&:hover': {
                            color: '#00809b',
                            transition: 'all 400ms',
                            },
                        }}
                        > 
                        SAIR
                    </Button>   
                </Box>       
            </Paper>
        </Box>
    )
}

export default DeleteCountry