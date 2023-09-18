import { Box, Grid, Paper, Typography } from "@mui/material";
import ClientContainer from "./ClientContainer";
import Investir from "./Investir";
import { useState } from "react";

const yields = [
  {
    id: 1,
    moeda: 'BITCOIN',
    logo: 'BitcoinBTC.png',
    acronimo: 'BTC',
    tipo: 'CRIPTOMOEDA',
    idCrypto: 1,
  },
  {
    id: 2,
    moeda: 'ETHERENEUN',
    logo: 'EthereunETH.png',
    acronimo: 'ETH',
    tipo: 'CRIPTOMOEDA',
    idCrypto: 2,
  },
  {
    id: 3,
    moeda: 'KWANZA',
    logo: 'kwanza.png',
    acronimo: 'kz',
    tipo: 'FUNDIARIA',
    idCrypto: 3,
  },
]

function ClientHome({ user }) {
  const [redimentos, setRedimentos] = useState(yields);

  return (
    <Grid container >
      <Grid item xs={12} sm={8} sx={{ display: { xs: 'flex', md: 'grid' } }}>
        <Grid container justifyContent="start" spacing={1}>

          {redimentos.length == 0 ? <Typography>Não há redimentos</Typography> :
            redimentos.map(redimento =>
                <Grid key={redimento.id} item xs={12} md={6} sm={12}>
                  <Investir redimento={redimento} idUser={user.id} />
                </Grid>
                
              )        
            }

        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>

         <Paper elevation={0} sx={{ p: 1 }}>
              <Box>
                <ClientContainer user={ user } />
              </Box> 
          </Paper>
        
      </Grid>

    </Grid>
  );
}

export default ClientHome;
