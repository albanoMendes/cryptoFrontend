import { Box, Grid, Paper, } from "@mui/material";
import NotificationContainer from './NotificationContainer';
import QtdDepositos from "./QtdDepositos";
import QtdMinerando from "./QtdMinerando";
import NovoInvest from "./NovoInvest";
import QtdInvestors from "./QtdInvestors";
import QtdInvestidos from "./QtdInvestidos";
import QtdCrypto from "./QtdCrypto";
//import { Home } from "@mui/icons-material";

function HomeAdm() {
    return (
        <Grid container >
            <Grid item xs={12} sm={7} sx={{ display: { xs: 'flex', md: 'grid' } }}>
                <Grid container justifyContent="start" spacing={5}>
                    <Grid item xs={12} md={6} sm={12}>
                        <Paper elevation={0} sx={{ p: 3, maxWidth: '100%', maxHeight: '100%' }}>
                            <QtdDepositos />  
                        </Paper>
                    </Grid>

                        <Grid item xs={12} md={6} sm={12}>
                        <Paper elevation={0} sx={{ p: 3,  maxWidth: '100%', maxHeight: '100%' }}>
                            <NovoInvest />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} sm={12}>
                        <Paper elevation={0} sx={{ p: 3,  maxWidth: '100%', maxHeight: '100%' }}>
                            <QtdMinerando />   
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

                    <Grid item xs={12} md={6} sm={12}>
                        <Paper elevation={0} sx={{ p: 3,  maxWidth: '100%', maxHeight: '100%' }}>
                            <QtdCrypto /> 
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12} sm={5}>
                <Paper elevation={0} sx={{ p: 1 }}>
                    <Box>
                        <NotificationContainer />
                    </Box> 
                </Paper>

            </Grid>

        </Grid>
       
    )
}

export default HomeAdm;