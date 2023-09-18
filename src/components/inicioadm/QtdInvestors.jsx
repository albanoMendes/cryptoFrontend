import { Box,  Typography } from "@mui/material";
import investors from '../../images/Invester.png';

function QtdInvestors() {
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
                TOTAL DE INVESTIDORES
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
                    src={investors}
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
                    {'200'}
                </Typography>
            </Box>                    
        </Box>
    )
}

export default QtdInvestors