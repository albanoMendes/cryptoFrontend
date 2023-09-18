  import {Typography, Box,  Paper, IconButton, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BoxInvest from "../users/BoxInvest";

const investers = [
    {
        id: 1,
        logo: 'BitcoinBTC.png',
        moeda: 'BITCOIN',
        acronimo: 'BTC',
        lucro: 2.22,
        total: 145,
        status: 'PEDENTE',
        idUser: 1        
    },
    {
        id: 2,
        logo: 'cardanoADA.png',
        moeda: 'CARDANO',
        acronimo: 'ADA',
        lucro: 1.05,
        total: 245,
        status: 'MINERANDO',
        idUser: 1
    },
     {
        id: 3,
        logo: 'EthereunETH.png',
        moeda: 'ETHERENEUN',
        acronimo: 'ETH',
        lucro: 2.45,
        total: 100,
        status: 'ATIVO',
        idUser: 1
    },
      {
        id: 4,
        logo: 'EthereunETH.png',
        moeda: 'ETHERENEUN',
        acronimo: 'ETH',
        lucro: 2.45,
        total: 100,
        status: 'ATIVO',
        idUser: 1
    },
     {
        id: 5,
        logo: 'EthereunETH.png',
        moeda: 'ETHERENEUN',
        acronimo: 'ETH',
        lucro: 2.45,
        total: 100,
        status: 'ATIVO',
        idUser: 1
    },
      {
        id: 6,
        logo: 'EthereunETH.png',
        moeda: 'ETHERENEUN',
        acronimo: 'ETH',
        lucro: 2.45,
        total: 100,
        status: 'ATIVO',
        idUser: 1
    }
];
function Investmentsup() {

    const [total, setTotal] = useState(0);
    const [investimentos, setInvestimentos] = useState(investers)
    const [showPassword, setShowPassword] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [title, setTitle] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

     useEffect(() => {
        let tot = 0;       
        investimentos.forEach((deposito) => {
            if (deposito.status === "ATIVO") {
                tot += deposito.total
            }
        })
        setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
    // eslint-disable-next-line no-undef
    }, [])

    return(
        <>
            <Paper 
            elevation={0}
            sx={{  
                mb: 2,
            }}
        >
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: '25px',                   
                    fontFamily: 'Roboto, sans-serif',
                    '@media (max-width: 800px)': { fontSize: '15px' },
                }}
            >
                MEUS INVESTIMENTOS
            </Typography>
            <Typography
                    sx={{                    
                        fontSize: '15px',                                       
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 800px)': { fontSize: '10px' },
                    }}
                >
                Consulte o montante investido em cada criptomoeda e seus respectivos rendimentos
            </Typography>                
            </Paper>
            <Box
                sx={{
                    p: 1,
                    bgcolor: '#E6E6E6',
                    mb: 1, maxWidth: 250,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',               
                        fontSize: '10px',
                        pl: 1,
                        pt: 1,
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 800px)': { fontSize: '8px' },
                    }}
                >
                    Total Investido
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
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={2}>
                        {
                            investimentos.map(investimento =>
                                <Grid key={investimento.id} item xs={12}  sm={6} md={4}>
                                    <BoxInvest  investimento={investimento} setInvestimentos={setInvestimentos} />
                                </Grid>
                            )  
                        }  
                    </Grid>
                </Grid>
            </Grid>      
        </>
    );

 }

  export default Investmentsup;