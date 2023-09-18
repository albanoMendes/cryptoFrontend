//import React from 'react';

import { Button, Divider, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";

function Formanuncio({anuncio, opcao, setAnuncios}) {

    const [anunciar, setAnunciar] = useState({
        id: 0,
        title: '',
        conteudo: '',
        data: '',    
    });

    useEffect(() => { 
		
        if (opcao === "EDITAR") {
			setAnunciar({
                id: anuncio.id,
                title: anuncio.title,
                conteudo: anuncio.conteudo,
                data: anuncio.data,    
			})
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

    const handleChannge=(e)=>{
		setAnunciar({...anunciar,[e.target.name]: e.target.value})
	};

    return (
        <Paper elevation={0}>
            <TextField 
                sx={{mt: 1}}	
                size="small"					
                label="Titulo" 
                placeholder="Inserir o titlo do anúncio"
                name="title"
                onChange={handleChannge}
                value={anunciar.title}  
                fullWidth 
                required
            />	
            <TextField 
                //variant="standard"
                sx={{mt: 1, mb: 1}}
                size="small"
                label="Conteúdo"						
                type="text" 
                //sx={{padding: '2px 2px'}}
                multiline
                rows={5}
                name="conteudo"
                onChange={handleChannge}
                value={anunciar.conteudo}  
                fullWidth 
                required
            />
            <Divider />
            <Button
                type="submit" 
                sx={{
                    mt: 1,
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',		
                    textDecoration: 'none',
                    fontSize: '10px',
                    fontFamily: 'Roboto, sans-serif',
                    backgroundColor: '#00809b',
                    '&:hover': {
                    color: '#013039',
                    cursor: 'pointer',
                    transition: '0.3s ease-in',
                    },
                }}			
                
                //onClick={submitForm}
			> 
				{opcao}
			</Button>
        
        </Paper>
    );
}

export default Formanuncio;
