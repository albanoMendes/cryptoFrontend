//import React from 'react'

import { Box, Button, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function CountryForm({opcao, id, setOpenModel, setCountries, pais}) {

  const [country, setCountry] = useState({
    id: 0,
    name: '',
    acronimo: '',
    code: '',
  })

  const handleChannge =(e)=>{
		setCountry({...country,[e.target.name]: e.target.value})
  };
  
  const submitForm = (e)=>{
    e.preventDefault();
    
  }
  useEffect(() => { 
    
    if (opcao === "EDITAR") {
      setCountry({
        // eslint-disable-next-line react/prop-types
        id: pais.id,
        // eslint-disable-next-line react/prop-types
        name: pais.name,
        // eslint-disable-next-line react/prop-types
        acronimo: pais.acronimo,
        // eslint-disable-next-line react/prop-types
        code: pais.code,
      })
    }
  // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
  }, [])
    
  return (
    <>
      <form style={{ maxWidth: 500, display: 'flex', alignContent: 'center', alignItems: 'center'}} onSubmit={submitForm}>
        <Paper elevation={0} >
            <TextField 
                sx={{ m: 1 }}
                size="small"
                id="outlined-basic" 
                label="Nome" 
                variant="outlined"
                value={country.name}
                name="name"
                onChange={handleChannge} 
                fullWidth
            />
          <TextField 
                size="small"
                sx={{m: 1}}
                id="outlined-basic" 
                label="Acronimo" 
                variant="outlined" 
                name="acronimo"
                onChange={handleChannge} 
                value={country.acronimo}
                fullWidth
            />
          <TextField 
                size="small"
                sx={{m: 1}}
                id="outlined-basic" 
                label="Indicativo" 
                variant="outlined" 
                name="code"
                onChange={handleChannge} 
                value={country.code}
                fullWidth
            />   
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

export default CountryForm;