import { Box, Typography } from "@mui/material"
import deposit from '../../images/investment.png';

function NovoInvest() {
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
                NOVOS INVESTEMENTOS
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
                    src={deposit}
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
                    {'100'}
                </Typography>
            </Box>                  
        </Box>
    )
}

export default NovoInvest