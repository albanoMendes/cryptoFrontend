//import React from 'react'

import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const countries = [
    {
    id: 1, 
    acronimo: 'AN',
	code: '+244',    
    name: 'ANGOLA',    
    },
    {
        id: 2,
        acronimo: 'BR',
        code: '+55',    
        name: 'BRASIL',  
    },
    {
        id: 3, 
        acronimo: 'USA',
        code: '+244',    
        name: 'ESTAOS UNIDOS DA AMERICA',    
    },
    {
        id: 4,
        acronimo: 'MOZ',
        code: '+258',    
        name: 'MOZAMBIQUE',  
    },
];

// eslint-disable-next-line react/prop-types
function CurrencyForm({ opcao, setOpenModel, setCurrencies, dinheiro }) {

    // eslint-disable-next-line react/prop-types
    const [id, setId] = useState(0);
    const [currency, setCurrency] = useState({
        id: 0,
        name: '',
        acronimo: '',
        valor: 0,
        idCountry: id,
    })

    const handleChannge =(e)=>{
            setCurrency({...currency,[e.target.name]: e.target.value})
    };
    
    const submitForm = (e)=>{
        e.preventDefault();
        setCurrencies([])
        
    }
    useEffect(() => { 
        
        if (opcao === "EDITAR") {
        setCurrency({
            // eslint-disable-next-line react/prop-types
            id: dinheiro.id,
            // eslint-disable-next-line react/prop-types
            name: dinheiro.name,
            // eslint-disable-next-line react/prop-types
            acronimo: dinheiro.acronimo,
            // eslint-disable-next-line react/prop-types
            valor: dinheiro.valor,
            // eslint-disable-next-line react/prop-types
            idCountry: dinheiro.idCountry,
        })
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            <form style={{ maxWidth: 500, display: 'flex', alignContent: 'center', alignItems: 'center'}} onSubmit={submitForm}>
                <Paper elevation={0} >
                    <TextField 
                        sx={{m: 1}}
                        id="outlined-basic" 
                        label="Nome" 
                        variant="outlined"
                        value={currency.name}
                        name="name"
                        onChange={handleChannge} 
                        fullWidth
                    />
                    <TextField 
                        sx={{m: 1}}
                        id="outlined-basic" 
                        label="Acronimo" 
                        variant="outlined" 
                        name="acronimo"
                        onChange={handleChannge} 
                        value={currency.acronimo}
                        fullWidth
                    />
                    <TextField 
                        sx={{m: 1}}
                        id="outlined-basic" 
                        label="Indicativo" 
                        variant="outlined" 
                        type="number"
                        name="valor"
                        onChange={handleChannge} 
                        value={currency.valor}
                        fullWidth
                    />   
                    <TextField
                        fullWidth
                        sx={{m: 1}}
                        id="outlined-select-currency"
                        select
                        label="SELECIONE O PAIS"                
                        helperText="Please select your currency"
                        onChange={(e) => { setId(e.target.value); } }
                    >
                        {countries.map((option) => (
							<MenuItem            
								key={option.id} value={option.id}
							>							
                                <Typography 
                                    sx={{
                                        ml: 1,                                           
                                        fontSize: '15px',                    
                                        fontFamily: 'Roboto, sans-serif',
                                    }}>
								{option.name}
								</Typography>          
							
							</MenuItem>
						))}
                    
                    </TextField>                     
                    <Box sx={{m: 1}}>
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
                            onClick={submitForm}
                        > 
                                {opcao}
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
            </form> 
          
        </>
    )
}

export default CurrencyForm