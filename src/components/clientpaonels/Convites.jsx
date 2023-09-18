///import React from 'react';
///import { FixedSizeList } from 'react-window';
import { ForwardToInbox, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, List, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Convite from "./Convite";
import Model from "../Model";
import ConvitForm from "./ConvitForm";

const invites = [
    {
        id: 1,
        name: 'Paulo Gustavo',
        email: 'paulogust@gmail.com',
        data: '12 de Maio de 2023',
        ganhou: 0,
        idUser: 1,
    },
    {
        id: 2,
        name: 'Miranda josé',
        email: 'paulogust@gmail.com',
        data: '17 de Março de 2023',
        ganhou: 1,
        idUser: 1,
    },
    {
        id: 3,
        name: 'Miranda josé',
        email: 'paulogust@gmail.com',
        data: '20 de Agosto de 2023',
        ganhou: 2,
        idUser: 1,
    },
    {
        id: 4,
        name: 'Matilde Eduardo',
        email: 'paulogust@gmail.com',
        data: '12 de Agosto de 2023',
        ganhou: 1,
        idUser: 1,
    }
]

// eslint-disable-next-line react/prop-types
function Convites({user}) {

    const [total, setTotal] = useState(0);
    const [convites, setConvites] = useState(invites)
    const [showPassword, setShowPassword] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [title, setTitle] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleAdd = () => {
      setTitle('ENVIAR CONVITE');
      setOpenModel(true);
      
    };

    useEffect(() => {
        let tot = 0;        
        convites.map(deposito => (
            tot += deposito.ganhou
        ))
        setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
    // eslint-disable-next-line no-undef
    }, [])


    return (
        <>
            <Paper 
                elevation={0}
                    sx={{  
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                <div>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '25px',                   
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 800px)': { fontSize: '15px' },
                        }}
                    >
                        MEUS CONVITES
                    </Typography>
                    <Typography
                            sx={{                    
                                fontSize: '15px',                                       
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 800px)': { fontSize: '10px' },
                            }}
                        >
                        Consulte a situação dos convites enviados por você.
                    </Typography>     
                </div>
                <Box
                    sx={{
                        p: 1,
                        //bgcolor: '#E6E6E6',
                        mb: 1,
                        minWidth: 200,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,

                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',               
                            fontSize: '12px',
                            pl: 1,
                            pt: 1,
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 800px)': { fontSize: '8px' },
                        }}
                    >
                        Total ganho com os convites
                    </Typography>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography
                                sx={{
                                    pl: 1,
                                    fontWeight: 'bold',
                                    fontSize: '20px',                                
                                    
                                    '@media (max-width: 800px)': { fontSize: '15px' },
                                }}
                            >
                                {showPassword ? `${total.toLocaleString("en-US", {style:"currency", currency:"USD"})}`: '****'}
                            </Typography>
                            <IconButton
                                size="small"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}                           
                                >
                                {showPassword ? <VisibilityOff sx={{ color: 'black', fontSize: '20px'}} /> : <Visibility  sx={{ color: 'black', fontSize: '20px'}} />}
                            </IconButton>
                        </div>              
                </Box>
            </Paper>
            <Box sx={{ float: 'right' }}>
                <Button 
                    type="submit" 							
                    sx={{
                        m: '2px 0',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',		
                        textDecoration: 'none',
                        fontSize: '10px',
                        fontFamily: 'Roboto, sans-serif',
                        backgroundColor: '#00809b',
                        '&:hover': {
                        color: '#013039',
                        cursor: 'pointer',
                        transition: '0.3s ease-in',
                        },
                    }}			
                    onClick={() => handleAdd()}
                > 
                   <ForwardToInbox sx={{mr: 0.5, fontSize: '20px'}} /> Enviar convite
                </Button>
            </Box>
            <List
                sx={{
                    width: '100%',                    
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',                    
                    
                }}
            >
                {convites.length == 0 ?
                    'Você ainda não convidou ninguém!'
                    :
                    convites.map(convite => (
                        <Box
                            key={convite.id}
                            sx={{
                                p: 1,
                                mb: 1,
                                border: '1px solid #C2BEB7',
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderBottomLeftRadius: 5,
                                borderBottomRightRadius: 5,
                            }}
                        >
                            <Convite convite={convite} />
                        </Box>
                    ))
                }
            </List>
            <Model
                title={title}
                openModel = {openModel}
                setOpenModel = {setOpenModel}
            >
              <ConvitForm user={user}/>
          </Model>     

        </>
    );
}

export default Convites;
