 import {Typography, Box, List} from "@mui/material";
 import RedimentoBox from "../redimento/RedimentoBox";
 import { useState } from "react";
 
 const yields = [
  {
    id: 1,
    moeda: 'BITCOIN',
    logo: 'BitcoinBTC.png',
    acronimo: 'BTC',
    idCrypto: 1,
  },
  {
    id: 2,
    moeda: 'ETHERENEUN',
    logo: 'EthereunETH.png',
    acronimo: 'ETH',
    idCrypto: 2,
  },
  {
    id: 3,
    moeda: 'KWANZA',
    logo: 'kwanza.png',
    acronimo: 'kz',
    idCrypto: 3,
  },
]

 function Yieldsup() {

    const [redimentos, setRedimentos] = useState(yields);

    return(
        <>
            <div style={{marginBottom: 50}}>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',                   
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 800px)': { fontSize: '15px' },
                    }}
                >
                    RENDIMENTOS
                </Typography>
                <Typography
                    sx={{                    
                        fontSize: '15px',                                       
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 800px)': { fontSize: '10px' },
                    }}
                >
                    Consulte aqui os rendimentos associado as cryptomoedas
                </Typography>     
            </div>
            <Box sx={{m: 'auto', justifyContent: 'center', justifyItems: 'center'}}>
                <List sx={{
                    width: '100%',        
                    bgcolor: 'white',        
                }}>
                    {
                        redimentos.map(yielld =>
                            <RedimentoBox key={yielld.id} redimento={yielld} setRedimentos={setRedimentos} />
                        )        
                    }        
                </List>
            </Box>

        </>
    );  
 }

 export default Yieldsup;