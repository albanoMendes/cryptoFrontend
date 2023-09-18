import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import Model from '../Model';

const rds = [
    {
        id: 1,
        name: 'BNB Smart Chain (BNP 20)',
        endereco: 'sdfgdwutr82736152351ueesdfuei',
        idCripto: 1
    },
    {
        id: 2,
        name: 'Bitcoin',
        endereco: 'R2538TF',
        idCripto: 1
    },
    {
        id: 3,
        name: 'BNB Smart Chain (BEP 2)',
        endereco: '218428ujefhevfc4t29831234',
        idCripto: 1
    },
    
]

function CriptoRedes({ moeda, setValue }) {
    const [redes, setRedes] = useState(rds);
    const [endereco, setEndereco] = useState('');
    const [openModel, setOpen] = useState(false);   
    const [title, setTitle] = useState('');

    const handleOpen = (moeda) => {       
        setTitle('ENDEREÇO');
        setEndereco(moeda);
        setOpen(true);
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
                <Typography 
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        p: 1,
                        fontFamily: 'Roboto, sans-serif',
                    }}
                >
                    SELECIONE A REDE
                </Typography>
                {
                    redes.map(rede => (
                        <Button
                            onClick={() =>  handleOpen(rede.endereco)}
                            key={rede.id}
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
                            {rede.name}
                        </Button>
                    ))

                }
            
            </Box>
            <Divider />
            <Box sx={{ mt: 1, float: 'right' }}>
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
                    onClick={() => setValue(2)}
                > 
                   Proximo
                </Button>
            </Box>
            <Model
                title={title}
                openModel = {openModel}
                setOpenModel = {setOpen}
            >
              {
               <Typography
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        p: 1,
                        fontFamily: 'Roboto, sans-serif',
                    }}
               >
                 {endereco}
               </Typography>
              }
            </Model>             
        </>
    );
}

export default CriptoRedes;
