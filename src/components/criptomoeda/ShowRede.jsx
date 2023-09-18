import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";

function ShowRede({ moeda, setOpenModel }) {

    const [banco, setBanco] = useState({
        id: moeda.id,
        nome: 'Ana Pedro Maria',
        email: 'anamaria2@gmail.com',
        bank: 'Banco Sol AN 220',
        agencia: '0002',
        nconta: '28392832-12',
        tipoConta: 'Corrente',
        nIdentidade: '25362532M233',
        cell: '923847898'
    });

    
    return (
        <Paper sx={{ p: 2, mb: 1, maxWidth: 400 }}>
            <Typography 
                sx={{  
                    fontWeight: 'bold',                                                   
                    fontSize: '25px',                    
                    fontFamily: 'Roboto, sans-serif',
                }}>
                {'DADOS BANCÁRIOS '}
           </Typography>
            <Divider/>
            <div
                style={{                   
                    display: 'flex', 
                    justifyContent: 'center', 
                    justifyItems: 'center',
                }}
            >
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="space-between" spacing={2}>

                            <Grid item>
                                <Box
                                    sx={{                                                       
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center', 
                                        justifyItems: 'center',
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{  
                                            fontWeight: 'bold',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.7rem',               
                                        }}
                                    >
                                        Email:
                                    </Typography>
                                    <Typography
                                        component={'div'}
                                        sx={{  
                                            fontWeight: 'bold',
                                            color: '#00809b',                        
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.8rem',  
                                            
                                        }}
                                        >
                                        {banco.email}                    
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item>
                                <Box
                                    sx={{ 
                                        mr: 5,
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center', 
                                        justifyItems: 'center',
                                    }}
                                >
                                    <Typography
                                            variant="caption"
                                            sx={{  
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.7rem',               
                                            }}
                                        >
                                            Nome completo:
                                        </Typography>
                                        <Typography
                                            component={'div'}
                                            sx={{  
                                                fontWeight: 'bold',
                                                color: '#00809b',                        
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.8rem',  
                                                
                                            }}
                                            >
                                            {banco.nome}                    
                                    </Typography>
                                </Box>

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </div>
            

           
            <div
                style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    justifyItems: 'center',
                }}
            >
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="space-between" spacing={2}>

                            <Grid item>
                                <Box
                                    sx={{                                      
                                        mt: 1,             
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center', 
                                        justifyItems: 'center',
                                    }}
                                >
                                <Typography
                                        variant="caption"
                                        sx={{  
                                            fontWeight: 'bold',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.7rem',               
                                        }}
                                        >
                                        Nome do banco:
                                    </Typography>
                                    <Typography
                                        component={'div'}
                                        sx={{  
                                            fontWeight: 'bold',
                                            color: '#00809b',                        
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.8rem',  
                                            
                                        }}
                                        >
                                        {banco.bank}                    
                                    </Typography>
                                </Box>
                            </Grid>
                            
                            <Grid item>
                                 <Box
                                    sx={{ 
                                        mt: 1,
                                        mr: 4,
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center', 
                                        justifyItems: 'center',
                                    }}
                                >
                                <Typography
                                        variant="caption"
                                        sx={{  
                                            fontWeight: 'bold',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.7rem',               
                                        }}
                                        >
                                        Código da Agência:
                                    </Typography>
                                    <Typography
                                        component={'div'}
                                        sx={{  
                                            fontWeight: 'bold',
                                            color: '#00809b',                        
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.8rem',  
                                            
                                        }}
                                        >
                                        {banco.agencia}                    
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </div>

             <div
                style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    justifyItems: 'center',
                }}
            >
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="space-between" spacing={2}>

                            <Grid item>
                                <Box
                                    sx={{ 
                                        mt: 1,
                                        mb: 1,                                                        
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center', 
                                        justifyItems: 'center',
                                    }}
                                >
                                <Typography
                                        variant="caption"
                                        sx={{  
                                            fontWeight: 'bold',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.7rem',               
                                        }}
                                        >
                                        Número da conta:
                                    </Typography>
                                    <Typography
                                        component={'div'}
                                        sx={{  
                                            
                                            fontWeight: 'bold',
                                            color: '#00809b',                        
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.8rem',  
                                            
                                        }}
                                        >
                                        {banco.nconta}                    
                                    </Typography>
                                </Box>

                            </Grid>

                            <Grid item>
                                <Box
                                    sx={{ 
                                        mt: 1,
                                        mb: 1,  
                                        mr: 7,
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center', 
                                        justifyItems: 'center',
                                    }}
                                >
                                <Typography
                                        variant="caption"
                                        sx={{  
                                            fontWeight: 'bold',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.7rem',               
                                        }}
                                        >
                                        Tipo de conta:
                                    </Typography>
                                    <Typography
                                        component={'div'}
                                        sx={{  
                                            fontWeight: 'bold',
                                            color: '#00809b',                        
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.8rem',  
                                            
                                        }}
                                        >
                                        {banco.tipoConta}                    
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </div>

            <div
                style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    justifyItems: 'center',
                }}
            >
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="space-between" spacing={2}>

                            <Grid item>
                                <Box
                                    sx={{ 
                                                                                            
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center', 
                                        justifyItems: 'center',
                                    }}
                                >
                                <Typography
                                        variant="caption"
                                        sx={{  
                                            fontWeight: 'bold',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.7rem',               
                                        }}
                                        >
                                        Número de identificação:
                                    </Typography>
                                    <Typography
                                        component={'div'}
                                        sx={{  
                                            fontWeight: 'bold',
                                            color: '#00809b',                        
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.8rem',  
                                            
                                        }}
                                        >
                                        {banco.nIdentidade}                    
                                    </Typography>
                                </Box>
                            </Grid>
                            
                            <Grid item>
                                <Box
                                    sx={{                 
                                        mb: 1,                
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center', 
                                        justifyItems: 'center',
                                        
                                    }}
                                >
                                <Typography
                                        variant="caption"
                                        sx={{  
                                            fontWeight: 'bold',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.7rem',               
                                        }}
                                        >
                                        Telefone do beneficiário:
                                    </Typography>
                                    <Typography
                                        component={'div'}
                                        sx={{  
                                            fontWeight: 'bold',
                                            color: '#00809b',                        
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.8rem',  
                                            
                                        }}
                                        >
                                        {banco.cell}                    
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </div>
            <Divider />           
        </Paper>
    );
}



export default ShowRede;
