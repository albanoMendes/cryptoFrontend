import { Box, Button, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function CriptoRede({opcao, setValue, rcripto, setRedes}) {

    const [rede, setRede] = useState({
        id: 0,
        name: '',
        endereco: '',
        idCripto: 0
    })

    const handleChannge=(e)=>{
		setRede({...rede,[e.target.name]: e.target.value})
    };
    
    useEffect(() => { 
		
        if (opcao === "EDITAR") {
			setRede({
                id: rcripto.id,
                name: rcripto.name,
                endereco: rcripto.endereco,
                idCripto: rcripto.idCripto
        })
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

    return (
        <Paper elevation={0} sx={{ p: 0}}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12} >
                    <Grid container justifyContent="space-between" spacing={2}>
                        
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                //maxWidth={250}
                                size="small"
                                label="Rede" 
                                placeholder="Ex BNB Smart Chain (BEP20)"
                                name="name"
                                onChange={handleChannge}
                                value={rede.name}  
                                fullWidth 
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Endereço" 
                                placeholder="Ex 28382912nh21"
                                name="name"
                                onChange={handleChannge}
                                value={rede.endereco}  
                                fullWidth 
                                required
                            />
                        </Grid>

                    </Grid>  
                </Grid> 
            </Grid>
            <Box sx={{ float: 'right' , mt: 1}}>
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
                    //onClick={()=> setValue(2)}
                > 
                    {opcao}
                </Button>
            </Box>
        </Paper>
    );
}

export default CriptoRede;
