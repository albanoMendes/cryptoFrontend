//import { QueryStats } from "@mui/icons-material";
import { Grid, Paper, Typography } from "@mui/material";
import investimento from '../../images/investmentos.png';
import BoxInvest from "./BoxInvest";
import { useState } from "react";

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

function Investment() {
    const [investimentos, setInvestimentos] = useState(investers)
    return (
        <>
            <Paper 
                elevation={1}
                sx={{  
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    p: 1,
                    fontFamily: 'Roboto, sans-serif',
                    '@media (max-width: 800px)': { fontSize: '10px' },
                }}
               >
                    INVESTIMENTOS
                </Typography>
                
                <img         
                    alt="Remy Sharp"
                    src={investimento}
                    style={{ width: 40, height: 40, padding: 2}}
                />
                
                   
            </Paper>
           
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

export default Investment;
