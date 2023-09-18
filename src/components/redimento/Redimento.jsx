import { Box, Button, List, Paper, Typography } from "@mui/material";
import RedimentoBox from "./RedimentoBox";
import { useState } from "react";
import Model from "../Model";
import RendimentoForm from "./RendimentoForm";

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
function Redimento() {

  const [redimentos, setRedimentos] = useState(yields);
  const [openModel, setOpenModel] = useState(false); 
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    setOpenModel(true);
    setTitle('ADD REDIMENTO');
    
  }


  return (
    <Box      
    >
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
              }}
          >
            RENDIMENTOS
          </Typography>
              <Button  
                onClick={() => handleAdd()}
                //variant="contained"             
                sx={{  
                    mr:1,                  
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',		
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontFamily: 'Roboto, sans-serif',
                    backgroundColor: '#00809b',
                    '&:hover': {
                        color: '#013039',
                        cursor: 'pointer',
                        transition: '0.3s ease-in',
                    },
                }}
              >
              +
          </Button>
      </Paper>
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
     
      <Model
            title={title}
            openModel = {openModel}
            setOpenModel = {setOpenModel}
          >
            <RendimentoForm setRedimentos={setRedimentos} />
        </Model>         
    </Box>
  );
}

export default Redimento;
