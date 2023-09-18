import { ArrowUpward, Delete, Edit, RemoveRedEye } from "@mui/icons-material"
import { Box, Divider, IconButton, Paper, Typography } from "@mui/material"
import Model from "../Model";
import BoxDeposito from "./BoxDeposito";
import { useState } from "react";
import EditInvest from "./EditInvest";
import DeleteInvst from "./DeleteInvst";

function BoxInvest({ investimento }) {

    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');

    const [investment, setInvestment] = useState({
        id: 0,
        logo: '',
        moeda: '',
        acronimo: '',
        lucro: 0,
        total: 0,
        status: '',
        idUser: 0
    });

    const [deposito, setDeposito] = useState({
        id: 1,
        total: 0,
        moeda: 'KWANZA (KZ)',
        cambio: 90000,
        comprovante: 'comprovante.jpeg',
        data: '10:43 12/07/2023',
        idUser: 1
        
    });

    const getCor = (stado) => {
       switch (stado) {
            case 'PEDENTE':
                return 'red';
            case 'ATIVO':
                return 'green';
           case 'MINERANDO':
               return '#00809b';        
            default:
               return 'green';
       }
    }

    const handleViewComp = (total) => {
        setOpcao('VIEW');
        setTitle('DEPOSITO');
        setOpenModel(true);
        setDeposito({
            id: 1,
            total: total,
            moeda: 'KWANZA (KZ)',
            cambio: 90000,
            comprovante: 'comprovante.jpeg',
            data: '10:43 12/07/2023',
            idUser: 1
        })
    };

    const handleEditInves = () => {
        setOpcao('EDITAR');
        setTitle('EDITAR INVESTIMENTO');
        setOpenModel(true);
        setInvestment({
            id: investimento.id,
            logo: investimento.logo,
            moeda: investimento.moeda,
            acronimo: investimento.acronimo,
            lucro: investimento.lucro,
            total: investimento.total,
            status: investimento.status
        })
    };

    const handleDeleteInves = () => {
        setOpcao('APAGAR');
        setTitle('APAGAR INVESTIMENTO');
        setOpenModel(true);
        setInvestment({
            id: investimento.id,
            logo: investimento.logo,
            moeda: investimento.moeda,
            acronimo: investimento.acronimo,
            lucro: investimento.lucro,
            total: investimento.total,
            status: investimento.status,
            idUser: investimento.idUser
        })
    };

    const getComponent = () =>{
      switch(opcao){
          case 'VIEW':
              return <BoxDeposito deposito={deposito} setOpenModel={setOpenModel} />; //<CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel}/>;
          case 'EDITAR':
              return <EditInvest investimento={investment} setOpenModel={setOpenModel} />; //<CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel} pais={pais}/>;
          case 'APAGAR':
              return <DeleteInvst investimento={investment} setOpenModel={setOpenModel} />; //<DeleteCountry pais={pais} setCountries={setCountries} setOpenModel={setOpenModel}/>;           
        default: 
          return null;
      }
    }

    return (
        <>
            <Paper sx={{p: 2, mb: 1}}>
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
                            width={20}
                            height={20}
                        />
                        <Typography 
                            sx={{
                                 ml: .5,
                                mt: .5,
                                fontSize: '12px',  
                               fontWeight: 'bold',
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 800px)': { fontSize: '.6rem' },
                            }}
                        >
                            {investimento.moeda} {`(${investimento.acronimo})`}
                        </Typography>       
                    </div>
                   <div
                        style={{                        
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <ArrowUpward sx={{  color: 'green', fontSize: '1rem', '@media (max-width: 800px)': { fontSize: '.6rem' }, }} />
                         <Typography 
                            sx={{
                                ml: .5,                                          
                                fontSize: '14px',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto, sans-serif',
                                color: 'green',
                                '@media (max-width: 800px)': { fontSize: '.6rem' },

                            }}
                        >
                         {investimento.lucro}{'%'}
                        </Typography>   
                    </div>
                </Box>
               <Divider />
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
                             '@media (max-width: 1025px)': { fontSize: '.6rem',  mt: 1.5, mr: 0.5 },
                        }}>{'TOTAL $:'}</Typography>
                        <Typography sx={{                                                                            
                                fontSize: '1.8rem',
                                mt: 1,
                                color: 'black',
                                fontWeight: 'bold',
                                '@media (max-width: 425px)': { fontSize: '.1px',  mt: 1, fontWeight: 200  },
                                '@media (max-width: 755px)': { fontSize: '.2rem',  mt: 1, mr: 1,  },
                                '@media (max-width: 800px)': { fontSize: '.6rem',  mt: 1, mr: 1 },
                                '@media (max-width: 835px)': { fontSize: '1.5rem',  mt: 0.5, mr: 0.5 },
                                '@media (max-width: 1025px)': { fontSize: '1.5rem',  mt: 0.5, mr: 0.5 },
                            }}
                        >
                           {investimento.total.toLocaleString("en-US", { style: "currency", currency: "USD" })}
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
                                '@media (max-width: 1024px)': { fontSize: '.6rem' },
                            }}
                            >
                            STATUS:
                        </Typography>
                        <Typography
                            component={'div'}
                            sx={{  
                                fontWeight: 'bold',
                                color:  `${getCor(investimento.status)}`,   
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '.8rem',  
                                '@media (max-width: 800px)': { fontSize: '.5rem' },
                                '@media (max-width: 1024px)': { fontSize: '.6rem' },
                                
                            }}
                            >
                            {investimento.status}                    
                        </Typography>
                    </Box>
                </Box>
                
                <Divider />
                <Box>
                    <IconButton
                        onClick={() =>  handleViewComp(investimento.total)} 
                        size="small" 
                        aria-label="show 4 new mails"                    
                    >
                        <RemoveRedEye sx={{ color: '#00809b',  fontSize: '20px'}} />
                    </IconButton>                    
                     <IconButton 
                    onClick={() => handleEditInves()} 
                    size="small" 
                    aria-label="show 4 new mails" 
                    
                >
                    <Edit sx={{  color: '#00809b', fontSize: '20px'}} />
                </IconButton>
                <IconButton 
                    onClick={() =>  handleDeleteInves()}
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

export default BoxInvest