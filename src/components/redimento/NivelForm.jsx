import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";

function NivelForm({ opcao, nivel, setNivel, setOpenModel, setNiveis, redimento }) {
    
    const handleChannge=(e)=>{
		setNivel({...nivel,[e.target.name]: e.target.value})
    };
    
    return (
        <Box>
            <div
                style={{                        
                    display: 'flex',
                    alignItems: 'center',
                    padding: 5,
                    marginBottom: 1
                }}
            >
                <img                  
                    src={new URL(`../../images/cryptoMoedas/${redimento.logo}`, import.meta.url)}
                    width={25}
                    height={25}
                />
                <Typography 
                    sx={{
                        ml: 1,
                        fontWeight: 'bold',
                        fontSize: '15px',                    
                        fontFamily: 'Roboto, sans-serif',
                    }}>
                    {redimento.moeda}
                </Typography>       
            </div>
            <Divider />
            <Typography sx={{mt: 1, mb: 1 }}>
                INTERVALO DE VALORES
            </Typography>
            
            <Grid sx={{ flexGrow: 1, mb: 1 }} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={1}>

                        <Grid item>
                            <TextField 
                                size="small"						
                                label="MIN" 
                                placeholder="Insere o minimo valor"
                                type="number"
                                name="min"
                                onChange={handleChannge}
                                value={nivel.min}  
                                fullWidth 
                                required
                            />	
                        </Grid>
                        
                        <Grid item>
                                <TextField 
                                size="small"						
                                label="MAX" 
                                placeholder="Insere o maximo valor"
                                type="number"
                                name="max"
                                onChange={handleChannge}
                                value={nivel.max}  
                                fullWidth 
                                required
                            />	
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <TextField 
                size="small"						
                label="Redimento ao dia" 
                placeholder="Insere o minimo valor"
                type="number"
                name="lastname"
                onChange={handleChannge}
                value={nivel.lucrod}  
                fullWidth 
                required
            />
            <Box sx={{mt: 1}}>
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
                    
                    //onClick={submitForm}
                > 
                    {opcao}
                </Button>
                    <Button 
                        onClick={() =>  setOpenModel(false)}
                        sx={{
                            ml: 0.5,
                            color: '#00809b',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '12px',
                            '&:hover': {
                            color: '#FF0000',                           
                            transition: 'all 400ms',
                            },
                        }}
                        //className={classes.btn}
                    > 
                    FECHAR
                </Button>   
            </Box>      
        </Box>
    );
}

export default NivelForm;
