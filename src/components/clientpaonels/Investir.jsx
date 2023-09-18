import { Box, Button, Divider, List, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import Nivel from './Nivel';
import Model from '../Model';
import InvestirContainer from './InvestirContainer';


function Investir({redimento, idUser}) {

    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');
    const [nivel, setNivel] = useState({
        id: 0,
        min: 0,
        max: 0,
        lucrod: 0,
        idRedimento: 0
    });
    const [investir, setInvestir] = useState({
        moeda: '',
        acronimo: '',
        logo: '',
        tipo: '',
        total: 0,
        idRendimento: 0,
        idUser: 0,
        idNivel: 0,
        idCripto: 0
    })

    const handleInvestir = () => {
        if (nivel.id == 0) {
            setOpcao('ERRO');
            setTitle('ERRO');
            setOpenModel(true);
        } else {
            setOpcao('INVESTIR');
            setTitle('INVESTIR');
            setOpenModel(true);
            setInvestir({
                moeda: redimento.moeda,       
                logo: redimento.logo,
                tipo: redimento.tipo,
                total: 0,
                idRendimento: redimento.id,
                idUser: idUser,
                idNivel: nivel.id,
                idCripto: redimento.idCripto
            })
        }
    };

     const getComponent = () =>{
      switch(opcao){
        case 'ERRO': 
              return <Typography>Selecione o nivel de investimento!</Typography> 
        case 'INVESTIR':           
              return <InvestirContainer investimento={investir} nivel={nivel} setOpenModel={ setOpenModel } /> 
        default: 
          return null;
      }
    }

    return (
        <>
            <Paper elevation={0} sx={{ m: 'auto', maxWidth: '100%', p: 1,  border: '1px solid #C2BEB7'}}>
                    <Box
                        sx={{ 
                            p: 2,                       
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
                                src={new URL(`../../images/cryptoMoedas/${redimento.logo}`, import.meta.url)}
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
                                }}>
                                {redimento.moeda}
                            </Typography>       
                        </div>
                        <div
                            style={{                        
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                               
                        </div>
                    </Box>
                <Divider />
                <Box sx={{m: 'auto', justifyContent: 'center', justifyItems: 'center'}}>
                    <List sx={{
                        width: '100%',        
                        bgcolor: 'white',        
                    }}>
                        <Nivel id={redimento.id} setNivel={ setNivel } acronimo={redimento.acronimo}/>    
                    </List>
                </Box>
                <Divider />
                 <Button  
                    onClick={() => handleInvestir()}
                    //variant="contained"
                    
                    sx={{  
                        mt:1,                  
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
                >
                INVESTIR
            </Button>
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
    );
}

export default Investir;
