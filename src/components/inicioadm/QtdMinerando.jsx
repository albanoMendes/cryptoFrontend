import { Box, Typography } from "@mui/material";
import mining from '../../images/minerando.png';

function QtdMinerando() {
    return (
        <Box
            sx={{            
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="caption"
                sx={{                   
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1rem',
                }}
                >
                MIMERANDO PEDENTES
            </Typography>
            <Box
                sx={{
                    mt: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <img         
                    alt="Remy Sharp"
                    src={mining}
                    style={{ width: 60, height: 60 }}
                />
                <Typography 
                    component={'h1'}    
                    sx={{                            
                        ml: 1,
                        textAlign: 'center',                                                                
                        fontSize: '2.5rem',
                        color: 'black',
                        fontFamily: 'Roboto, sans-serif',
                    }}
                >
                    {'50'}
                </Typography>
            </Box>                    
           
        </Box>
    )
}

export default QtdMinerando