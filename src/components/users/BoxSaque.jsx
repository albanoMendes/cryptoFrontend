//import React from 'react'

import { AccountBalance, Check, Delete, Edit } from "@mui/icons-material"
import { Box, Divider, IconButton, Paper, Typography } from "@mui/material"
import { useState } from "react"
import Model from "../Model";
import ConfirmSaque from "./ConfirmSaque";
import BoxAccount from "./BoxAccount";
import EditSaque from "./EditSaque";
import DeleteSaque from "./DeleteSaque";

function BoxSaque({ saque, setSaques }) {

  const [openModel, setOpenModel] = useState(false);  
  const [title, setTitle] = useState('');
    const [id, setId] = useState(0);
   const [opcao, setOpcao] = useState('');
  const [pagar, setPagar] = useState({
    total: 0,
    moeda: '',
    cambio: 0,
    data: '',
    foto: [],
    idInvest: 0,
    idUser: 0
  })
    
    

    const handlePagarInvst = () => {  
        setOpcao('CONFIRM')     
        setTitle('APROVAR SAQUE');
        setOpenModel(true);
        setPagar({
          total: saque.total,
          moeda: saque.moeda,
          cambio: saque.cambio,
          data: 'Sat Aug 19 2023 01:30:33',
          foto: [],
          idInvest: saque.idInvest,
          idUser: saque.idUser,
          idSaque: saque.id
        })
    };
    const getCor = (stado) => {
       switch (stado) {
            case 'PEDENTE':
                return 'red';
            case 'EFETUADO':
                return 'green';       
            default:
               return 'green';
       }
    }
    const handleConta = (id) => {  
        setOpcao('CONTA')     
        setTitle('ENDEREÇO');
        setOpenModel(true);
        setId(id)
    };

    const handleEditSaque = () => {  
        setOpcao('EDITAR')     
        setTitle('EDITAR SAQUE');
        setOpenModel(true);
        
    };

    const handleDeleteSaque = () => {  
        setOpcao('APAGAR')     
        setTitle('EXCLUIR SAQUE');
        setOpenModel(true);
        
    };
   
   
    const getComponent = () =>{
      switch(opcao){
          case 'CONFIRM':
              return <ConfirmSaque pagar={pagar} setPagar={setPagar} setOpenModel={setOpenModel} />; //<CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel}/>;
          case 'CONTA':
              return <BoxAccount id={id} setOpenModel={setOpenModel} />;
          case 'EDITAR':
              return <EditSaque saque={ saque } setOpenModel={setOpenModel} />; //<CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel} pais={pais}/>;
          case 'APAGAR':
              return <DeleteSaque saque={saque} setOpenModel={setOpenModel} />; //<DeleteCountry pais={pais} setCountries={setCountries} setOpenModel={setOpenModel}/>;           
        default: 
          return null;
      }
    }

  return (
    <>
      <Paper sx={{ p: 2, mb: 1 }}>
           <Typography 
              sx={{  
                  fontWeight: 'bold',                                                   
                  fontSize: '15px',                    
                  fontFamily: 'Roboto, sans-serif',
                  '@media (max-width: 800px)': { fontSize: '10px' },
              }}>
              {'ID INVESTIMENTO: '} {`${saque.idInvest}`}
          </Typography>
         <Divider/>
          <Box
              sx={{  
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }} 
            >
                <Typography 
                    component={'h1'}    
                    sx={{                            
                        mt: 1,
                        textAlign: 'center',                            
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'start',

                    }}
                >
                      <Typography sx={{
                            mt: 2,
                            mr: 1,
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            '@media (max-width: 390px)': { fontSize: '.1rem',  },
                            '@media (max-width: 800px)': { fontSize: '0.3rem' },
                            '@media (max-width: 835px)': { fontSize: '0.4rem' },
                             '@media (max-width: 755px)': { fontSize: '0.5rem' },
                      }}>{'TOTAL:'}</Typography>
                    <Typography sx={{                                                                            
                            fontSize: '1.8rem',
                            mt: 1,
                            color: 'black',
                            fontWeight: 'bold',
                            '@media (max-width: 425px)': { fontSize: '.1px',  mt: 1, fontWeight: 200  },
                            '@media (max-width: 755px)': { fontSize: '.2rem',  mt: 1, mr: 1,  },
                            '@media (max-width: 800px)': { fontSize: '.6rem',  mt: 1, mr: 1 },
                            '@media (max-width: 835px)': { fontSize: '1.5rem',  mt: 0.5, mr: 0.5 },
                        }}
                    >
                        {saque.total.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </Typography> 
                </Typography>            
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
                            '@media (max-width: 800px)': { fontSize: '.5rem' },
                            '@media (max-width: 425px)': { fontSize: '2px', },
                           
                            '@media (max-width: 755px)': { fontSize: '4px', },
                            
                            '@media (max-width: 865px)': { fontSize: '8px' }
                        }}
                        >
                        STATUS:
                    </Typography>
                    <Typography
                        component={'div'}
                        sx={{  
                            fontWeight: 'bold',
                            color:  `${getCor(saque.status)}`,                        
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '1rem',  
                            '@media (max-width: 800px)': { fontSize: '.6rem' },
                            '@media (max-width: 425px)': { fontSize: '2px', },
                           
                            '@media (max-width: 755px)': { fontSize: '4px', },
                            
                            '@media (max-width: 865px)': { fontSize: '8px' }
                            
                        }}
                        >
                        {saque.status}                    
                    </Typography>
                </Box>
            </Box>
            <Typography 
              sx={{
                    fontWeight: 'bold',                                  
                    fontSize: '12px',                    
                    fontFamily: 'Roboto, sans-serif',
                    '@media (max-width: 425px)': { fontSize: '8px' },
              }}>
              {'DATA: '} {`${saque.data}`}
          </Typography>
          <Divider />
            <Box>
                <IconButton
                    onClick={() =>  handlePagarInvst()} 
                    size="small" 
                    aria-label="show 4 new mails"                     
                >
                    <Check sx={{ color: '#00809b', fontSize: '20px'}} />
                </IconButton>           
                <IconButton
                    onClick={() =>  handleConta(saque.idInvest)} 
                    size="small" 
                    aria-label="show 4 new mails"                     
                >
                    <AccountBalance sx={{ color: '#00809b', fontSize: '20px'}} />
                </IconButton>
                  <IconButton 
                    onClick={() =>  handleEditSaque()} 
                    size="small" 
                    aria-label="show 4 new mails" 
                    
                >
                    <Edit sx={{  color: '#00809b', fontSize: '20px'}} />
                </IconButton>
                <IconButton 
                    onClick={() => handleDeleteSaque()}
                    size="small" 
                    aria-label="show 4 new mails" 
                    color="inherit"
                >
                    <Delete sx={{fontSize: '20px'}} color="error"/>
                </IconButton>
            </Box>
      </Paper>
       <Model
            title={title}
            openModel = {openModel}
            setOpenModel = {setOpenModel}
          >   
            { 
                getComponent()
            }
           
        </Model>
    </>
  )
}

export default BoxSaque