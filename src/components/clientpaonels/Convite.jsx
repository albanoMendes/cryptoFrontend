//import React from 'react';

import { InsertInvitation } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";

function Convite({ convite }) {
    
     const [total, setTotal] = useState(convite.ganhou);

    return (
        <>
            <Box
                sx={{  
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{  
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                    
                    }}
                >
                    <Typography
                        sx={{                          
                            fontSize: '15px',  
                            fontWeight: 'bold',
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 800px)': { fontSize: '.6rem' },
                        }}
                    >
                        Enviado para:
                    </Typography>
                    <Typography
                        sx={{ 
                            ml: 1, 
                            fontSize: '15px',                            
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 800px)': { fontSize: '.6rem' },
                        }}
                    >
                        {convite.name}
                    </Typography>
                </div>
                <div
                    style={{  
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                         sx={{                          
                            fontSize: '12px',                           
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 800px)': { fontSize: '.6rem' },
                        }}
                    >
                        Ganhou: {total.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </Typography>
                    <InsertInvitation sx={{fontSize: '20px', color: '#00809b', fontWeight: 'bold', ml: 0.5}} />
                </div>
            </Box>           
            <Divider />
            <Typography
                sx={{  
                    mt: 1,
                    fontSize: '12px',  
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    '@media (max-width: 800px)': { fontSize: '.6rem' },
                }}
            >
                Convite enviando em {convite.data}
            </Typography>
        </>
    );
}

export default Convite;
