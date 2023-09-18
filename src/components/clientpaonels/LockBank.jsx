import React, { useState } from 'react';
import ShowRede from '../criptomoeda/ShowRede';
import { Box, Button } from '@mui/material';

function LockBank({ id, setValue, value }) {
    const [moeda, setMoeda] = useState({
        id: id,
        acronimo: '',
        descricao: '',
        logo: '',
        rede: 0,    
    })
    return (
        <>
            <ShowRede moeda={moeda} />
            <Box sx={{ mt: 1, float: 'right' }}>
                <Button 
                    type="submit" 							
                    sx={{
                        m: '2px 0',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',		
                        textDecoration: 'none',
                        fontSize: '12px',
                        fontFamily: 'Roboto, sans-serif',
                        backgroundColor: '#00809b',
                        '&:hover': {
                        color: '#013039',
                        cursor: 'pointer',
                        transition: '0.3s ease-in',
                        },
                    }}			
                    onClick={() => setValue(2)}
                >
                    Proximo
                </Button>
            </Box>

        </>
    );
}

export default LockBank;
