//import React from 'react';

import { ArrowUpward } from "@mui/icons-material";
import { Box, Button, Divider, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

const status = [
  {
    value: 'PEDENTE',
    label: 'PEDENTE',
  },
  {
    value: 'ATIVO',
    label: 'ATIVO',
  },

];

function EditInvest({ investimento, setInstimentos, setOpenModel }) {

    const [investment, setInvestment] = useState({
        id: 3,
        logo: investimento.logo,
        moeda: investimento.moeda,
        acronimo: investimento.acronimo,
        lucro: investimento.lucro,
        total: investimento.total,
        status: investimento.status
    });

    const handleChannge=(e)=>{
		setInvestment({...investment,[e.target.name]: e.target.value})
	};

    return (
        <Paper sx={{ p: 2, mb: 1 }}>
            <Box
                sx={{  
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{                        
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <img                  
                        src={new URL(`../../images/cryptoMoedas/${investimento.logo}`, import.meta.url)}
                        width={25}
                        height={25}
                    />
                    <Typography 
                        sx={{
                            ml: 1,                                           
                            fontSize: '15px',                    
                            fontFamily: 'Roboto, sans-serif',
                        }}>
                        {investimento.moeda} {`(${investimento.acronimo})`}
                    </Typography>       
                </div>
                <Typography 
                    sx={{
                        ml: 1,                                           
                        fontSize: '15px',                    
                        fontFamily: 'Roboto, sans-serif',
                        color: 'green',
                    }}>
                    <ArrowUpward /> {investimento.lucro}{'%'}
                </Typography>   
            </Box>
            <Divider />
            <TextField 
                //variant="standard"
                sx={{mt: 2, mb: 1}}
                label="Total" 
                placeholder="Insere o seu nome"
                name="total"
                type="number"
                onChange={handleChannge}
                value={investment.total}  
                fullWidth 
                required
            />
            <TextField
                sx={{mt: 2, mb: 1}}
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue={investment.status}
                helperText="Please select your currency"
                 fullWidth
                >
                {status.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            <Divider />
            <Box sx={{mt: 1}} >		
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
                    
                    //onClick={submitForm}
                > 
                    Editar
                </Button>
                <Button 
                    type="submit" 
                    sx={{
                        ml: 0.5,
                        color: '#00809b',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '12px',
                        '&:hover': {
                        color: 'white',
                        backgroundColor: '#FF0000',
                        transition: 'all 400ms',
                        },
                    }}
                    onClick={() => setOpenModel(false)}
                > 
                    Sair
                </Button>   
            </Box>
        </Paper>
    );
}

export default EditInvest;
