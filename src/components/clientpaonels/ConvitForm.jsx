import { Button, Divider, Paper, TextField } from '@mui/material';
import { useState } from 'react';



function ConvitForm({ user }) {
    
    const [convite, setConvite] = useState({
        name: '',
        email: '',
        to: user.email,
        ganhou: 0,
        idUser: user.id,
    });

    const handleChannge=(e)=>{
		setConvite({...convite,[e.target.name]: e.target.value})
	};

    return (
        <Paper elevation={0} sx={{p: 0,}}>
            <TextField 
                sx={{mt: 1}}	
                size="small"					
                label="Nome" 
                placeholder="Insere o nome do convidado"
                name="name"
                onChange={handleChannge}
                value={convite.name}  
                fullWidth 
                required
            />	
            <TextField 
                //variant="standard"
                sx={{mt: 1, mb: 1}}
                size="small"
                label="Email"						
                type="email"
                name="email"
                onChange={handleChannge}
                value={convite.email}  
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
				ENVIAR
			</Button>
        </Paper>
    );
}

export default ConvitForm;
