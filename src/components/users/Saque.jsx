import { Grid, Paper, Typography } from "@mui/material";
import deposit from '../../images/depositBank.png';
import BoxSaque from "./BoxSaque";
import { useState } from "react";

const saques = [
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
    

function Saque() {

    const [drows, setDrows] = useState(saques)

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
                    }}
                >
                    SAQUES
                </Typography>
                
                <img         
                    alt="Remy Sharp"
                    src={deposit}
                    style={{ width: 40, height: 40, padding: 2}}
                />   
            </Paper>

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={2}>
                        {
                            drows.map(saque =>
                                <Grid key={saque.id} item xs={12}  sm={6} md={4}>
                                    <BoxSaque saque={saque} setSaques={ setDrows } />
                                </Grid>
                            )  
                        }  
                    </Grid>
                </Grid>
            </Grid>      
            
      
        </>
    );
}

export default Saque;
