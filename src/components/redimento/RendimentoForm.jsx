import { Box, Button, Grid, ListItemIcon, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

function createData(id, acronimo, descricao, logo, rede) {
  return {id, acronimo, descricao, logo, rede };
}

const currencies = [
    createData(1, 'BTC', 'BITCOIN', 'BitcoinBTC.png', 1),
    createData(2, 'ETH', 'ETHEREUM', 'EthereunETH.png', 2),
    createData(3, 'ADA', 'CARDANO ', 'cardanoADA.png', 3),  
];

function RendimentoForm({setRedimentos}) {

    const [id, setId] = useState(0)
    const [yielld, setYielld] = useState({        
        idCrypto: id,
        min: 0,
        max: 0,
        lucro: 0,
    })

    return (
        <Box>
            <TextField
                fullWidth
                sx={{mr: 1}}
                id="outlined-select-currency"
                select
                label="Moedas"                
                //helperText="Please select your currency"
                onChange={(e) => { setId(e.target.value); } }
                >
                {currencies.map((option) => (
                    <MenuItem              
                        key={option.id} value={option.id}                             
                    >
                       
                        <img                  
                            src={new URL(`../../images/cryptoMoedas/${option.logo}`, import.meta.url)}
                            width={25}
                            height={25}
                            style={{ justifyItems: 'center' }}
                        />    
            
                        <Typography 
                            sx={{ 
                                ml: 1,                                 
                                fontWeight: 'bold',
                                fontSize: '15px',                    
                                fontFamily: 'Roboto, sans-serif',
                                alignItems: 'center',                                  
                            }}
                        >
                        
                        {option.acronimo}
                        </Typography>          
                    
                    </MenuItem>
                ))}
            </TextField>
            <Typography sx={{mt: 1, }}>
                INTERVALO DE VALORES
            </Typography>
            
            <Grid sx={{ flexGrow: 1, mb: 1 }} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={1}>

                        <Grid item>
                            <TextField 
                                size="small"						
                                label="MIN" 
                                placeholder="Insere o minimo valor"
                                type="number"
                                name="min"
                                //onChange={handleChannge}
                                //value={data.lastname}  
                                fullWidth 
                                required
                            />	
                        </Grid>
                        
                        <Grid item>
                                <TextField 
                                size="small"						
                                label="MAX" 
                                placeholder="Insere o maximo valor"
                                type="number"
                                name="max"
                                //onChange={handleChannge}
                                //value={data.lastname}  
                                fullWidth 
                                required
                            />	
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <TextField 
                size="small"						
                label="Redimento ao dia" 
                placeholder="Insere o minimo valor"
                type="number"
                name="lastname"
                //onChange={handleChannge}
                //value={data.lastname}  
                fullWidth 
                required
            />
            <Box sx={{mt: 1}}>
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
                    
                    //onClick={submitForm}
                > 
                    {'ADD'}
                </Button>
                    <Button 
                        type="submit" 
                        sx={{
                            ml: 0.5,
                            color: '#00809b',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '12px',
                            '&:hover': {
                            color: 'white',
                            backgroundColor: '#FF0000',
                            transition: 'all 400ms',
                            },
                        }}
                        //className={classes.btn}
                    > 
                    FECHAR
                </Button>   
            </Box>
        </Box>
    );
}

export default RendimentoForm;
