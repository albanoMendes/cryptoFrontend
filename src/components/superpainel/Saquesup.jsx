import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Paper, Grid } from "@mui/material";
import BoxSaque from "../users/BoxSaque";

const rows = [
    {
        id: 2,
        total: 100,
        moeda: 'KWANZA (KZ)',
        cambio: 90000,
        status: 'PEDENTE',
        data: '20:10:06 15/05/2023',
        idInvest: 1,
        idUser: 1
    },
    {
        id: 3,
        total: 150,
        moeda: 'KWANZA (KZ)',
        cambio: 12000,
        status: 'EFETUADO',
        data: '20:10:06 15/05/2023',
        idInvest: 24,
        idUser: 1
    },
    {
        id: 4,
        total: 50,
        moeda: 'KWANZA (KZ)',
        cambio: 40500,
        status: 'PEDENTE',
        data: '20:10:06 15/05/2023',
        idInvest: 5,
        idUser: 1
    },
     {
        id: 5,
        total: 150,
        moeda: 'KWANZA (KZ)',
        cambio: 12000,
        status: 'EFETUADO',
        data: '20:10:06 15/05/2023',
        idInvest: 24,
        idUser: 1
    },
    {
        id: 6,
        total: 50,
        moeda: 'KWANZA (KZ)',
        cambio: 40500,
        status: 'PEDENTE',
        data: '20:10:06 15/05/2023',
        idInvest: 5,
        idUser: 1
    },
     {
        id: 7,
        total: 150,
        moeda: 'KWANZA (KZ)',
        cambio: 12000,
        status: 'EFETUADO',
        data: '20:10:06 15/05/2023',
        idInvest: 24,
        idUser: 1
    },
    {
        id: 8,
        total: 50,
        moeda: 'KWANZA (KZ)',
        cambio: 40500,
        status: 'PEDENTE',
        data: '20:10:06 15/05/2023',
        idInvest: 5,
        idUser: 1
    }
       
 ];

function Saquesup() {

    //const classes = useStyles()
    const [saques, setSaques] = useState(rows);
    const [total, setTotal] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    

    useEffect(() => {
        let tot = 0;        
        saques.map(deposito => (
        tot += deposito.total
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
                        SAQUES
                    </Typography>
                    <Typography
                            sx={{                    
                                fontSize: '15px',                                       
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 800px)': { fontSize: '10px' },
                            }}
                        >
                        Consulte os saques realisados pelos investidores
                    </Typography>     
                </div>
                <Box
                    sx={{
                        p: 1,
                        //bgcolor: '#F2F2F2',
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
                        Total Saques
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
             <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={2}>
                        {
                            saques.map(saque =>
                                <Grid key={saque.id} item xs={12}  sm={6} md={4}>
                                    <BoxSaque saque={saque} setSaques={ setSaques } />
                                </Grid>
                            )  
                        }  
                    </Grid>
                </Grid>
            </Grid>      
        </>
    )
}
  export default Saquesup;