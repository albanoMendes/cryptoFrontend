//import React from 'react';

import { Box, Button, Grid, MenuItem, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const tipos = [
  {
    value: 'CORRENTE',
    label: 'CORRENTE',
  },
  {
    value: 'POUPANÇA',
    label: 'POUPANÇA',
  }
];

// eslint-disable-next-line react/prop-types
function FormRede({ moeda, setValue, opcao }) {

    const [banco, setBanco] = useState({
        id: 0,
        nome: '',
        email: '',
        bank: '',
        agencia: '',
        nconta: '',
        tipoConta: '',
        nIdentidade: '',
        cell: ''
    });

    const handleChannge=(e)=>{
		setBanco({...banco,[e.target.name]: e.target.value})
	};

    useEffect(() => { 
        
        if (opcao === "EDITAR") {
            setBanco({
                id: moeda.rede,
                nome: 'Ana Pedro Maria',
                email: 'anamaria2@gmail.com',
                bank: 'Banco Sol AN 220',
                agencia: '0002',
                nconta: '28392832-12',
                tipoConta: 'CORRENTE',
                nIdentidade: '25362532M233',
                cell: '923847898'
            })
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

   
    return (
        <Paper elevation={0} sx={{ p: 2, }}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Email"
                                type='email'
                                placeholder="insere o email"
                                name="email"
                                onChange={handleChannge}
                                value={banco.email}  
                                fullWidth 
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Nome Completo" 
                                placeholder="Insere o nome completo"
                                name="nome"
                                onChange={handleChannge}
                                value={banco.nome}  
                                fullWidth 
                                required
                            />
                        </Grid>

                         <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Nome do Banco" 
                                placeholder="Ex: Banco Sol (AN)"
                                name="bank"
                                onChange={handleChannge}
                                value={banco.bank}  
                                fullWidth 
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Código da Agência" 
                                placeholder="insere o código da agência"
                                name="agencia"
                                onChange={handleChannge}
                                value={banco.agencia}  
                                fullWidth 
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Número da conta" 
                                placeholder="Insere o numero da conta"
                                name="nconta"
                                onChange={handleChannge}
                                value={banco.nconta}  
                                fullWidth 
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                id="outlined-select-currency"
                                select
                                name="tipoConta"
                                value={banco.tipoConta}
                                onChange={handleChannge}                                 
                                label="Tipo de Conta"                               
                                fullWidth 
                            >
                                {tipos.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Telefone" 
                                placeholder="insere a telefone do beneficiario"
                                name="cell"
                                onChange={handleChannge}
                                value={banco.cell}  
                                fullWidth 
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Número de Identificação" 
                                placeholder="insere a nº de identificação do beneficiario"
                                name="identificacao"
                                onChange={handleChannge}
                                value={banco.nIdentidade}  
                                fullWidth 
                                required
                            />
                        </Grid>                         

                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ float: 'right', mt: 1 }}>
                <Button 
                    type="submit" 
                    sx={{
                        mr: 0.5,
                        color: '#00809b',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '12px',
                        '&:hover': {
                            color: '#013039',                       
                            transition: 'all 400ms',
                        },
                    }}
                    onClick={() => setValue(0)}
                    
                > 
                    voltar
                </Button>   
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
                    //onClick={()=> setOpenModel(false)}
                > 
                    {opcao}
                </Button>
            </Box>
        </Paper>
    );
}

export default FormRede;
