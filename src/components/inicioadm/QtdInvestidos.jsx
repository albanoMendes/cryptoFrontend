import { Box, Typography } from "@mui/material";
import investimento from '../../images/investmentos.png';

function QtdInvestidos() {
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
                TOTAL INVESTIMENTOS
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
                    src={investimento}
                    style={{ width: 60, height: 60 }}
                />
                <Typography 
                    component={'h1'}    
                    sx={{                            
                        ml: 1,
                        textAlign: 'center',                            
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                        <Typography sx={{ mt: 2, mr: 1, fontSize: '0.2', fontWeight: 'bold',   }}>{'$'}</Typography>
                        <Typography sx={{                                                                            
                                fontSize: '2.5rem',
                                color: 'black',
                                fontFamily: 'Roboto, sans-serif',
                            }}
                        >
                            {'24'}
                        </Typography> 
                </Typography>
            </Box>                    
        </Box>
    )
}

export default QtdInvestidos