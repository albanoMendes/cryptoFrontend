import { Grid, Paper, Typography } from '@mui/material';
//import React from 'react';
import QtdDepositos from '../inicioadm/QtdDepositos';
import Notifications from '../inicioadm/Notifications';
import QtdCrypto from '../inicioadm/QtdCrypto';
import QtdInvestors from '../inicioadm/QtdInvestors';
import QtdInvestidos from '../inicioadm/QtdInvestidos';

function Homesup() {

    return (
        <Grid container >
            <Grid item xs={12} sm={8} sx={{ display: { xs: 'flex', md: 'grid' } }}>
                <Grid container justifyContent="start" spacing={2}>

                    <Grid item xs={12} md={6} sm={12}>
                        <Paper elevation={0} sx={{ p: 3,  maxWidth: '100%', maxHeight: '100%' }}>
                            <QtdCrypto /> 
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} sm={12}>
                        <Paper elevation={0} sx={{ p: 3, maxWidth: '100%', maxHeight: '100%' }}>
                            <QtdDepositos />  
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} sm={12}>
                        <Paper elevation={0} sx={{ p: 3,  maxWidth: '100%', maxHeight: '100%' }}>
                            <QtdInvestors />  
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} sm={12}>
                        <Paper elevation={0} sx={{ p: 3, maxWidth: '100%', maxHeight: '100%' }}>
                            <QtdInvestidos /> 
                        </Paper>
                    </Grid>


                </Grid>
            </Grid>

            <Grid item xs={12} sm={4}>
             <div>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',                   
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 800px)': { fontSize: '15px' },
                    }}
                >
                    MENSAGENS
                </Typography>
                <Typography
                    sx={{                    
                        fontSize: '15px',                                       
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 800px)': { fontSize: '10px' },
                    }}
                >
                    Novas mensagens enviadas
                </Typography>     
            </div>    
            <Notifications />
            </Grid>
        </Grid>
    );
}

export default Homesup;
