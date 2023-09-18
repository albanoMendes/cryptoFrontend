import { Box, Divider, List, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import BoxSaque from './BoxSaque';

function UserSaques({ name, id }) {
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
        }
       
    ];
    const [total, setTotal] = useState(0);
    let tot = 0;

    
    useEffect(() => {
        for(let i = 0; i < saques.length; i = i + 1 ) {
            tot += saques[i].total;
        }
        setTotal(tot);
    }, [tot]);

    return (
        <>
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
                        fontSize: '.8rem',               
                    }}
                    >
                    INVESTIDOR:
                </Typography>
                <Typography
                    component={'div'}
                    sx={{  
                        fontWeight: 'bold',
                        color: 'green',                        
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1rem',  
                        
                    }}
                    >
                    {name}                    
                </Typography>
            </Box>
            <Divider />
            <List sx={{ width: '100%', minWidth: 360, bgcolor: 'white' }}>
                {
                    saques.map(saque =>
                        <BoxSaque key={saque.id} saque={saque} />
                    )        
                }        
            </List>
            <Divider />
            <Paper>
                <Typography 
                    component={'h1'}    
                    sx={{                            
                        ml: 1,
                        textAlign: 'center',                            
                        display: 'flex',
                        alignItems: 'center',                      

                    }}
                >
                    <Typography sx={{ mt: 2, mr: 1, fontSize: '0.5', fontWeight: 'bold',   }}>{'TOTAL $:'}</Typography>
                    <Typography sx={{                                                                            
                            fontSize: '2.5rem',
                            color: 'black',
                            fontFamily: 'Roboto, sans-serif',
                        }}
                    >
                        {total}
                    </Typography> 
                </Typography>
            </Paper>
    
      
        </>
    );
}

export default UserSaques;
