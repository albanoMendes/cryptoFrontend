import { ArrowUpward, PhotoCamera } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, Paper, TextField, Typography } from '@mui/material';
import  { useRef, useState } from 'react';

function FinishInvstment({ investimento, nivel, setOpenModel }) {
   
    const foto = "sem-foto.jpg";
    const [selectedImage, setSelectedImage] = useState();
    const selectFile = useRef();

    const [investment, setInvestment] = useState({
        id: 0,
        moeda: '',
        acronimo: '',
        logo: '',
        tipo: '',
        total: 0,
        idRendimento: 0,
        idUser: 0,
        idNivel: 0,
        idCripto: 0
    })


    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImage(e.target.files[0]);
        }
    };



    return (
        <Paper elevation={0} sx={{p: 1, mb: 1}}>
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
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <img                  
                        src={new URL(`../../images/cryptoMoedas/${investimento.logo}`, import.meta.url)}
                        width={20}
                        height={20}
                    />
                    <Typography
                        sx={{
                            ml: .5,
                            mt: .5,
                            fontSize: '12px',  
                            fontWeight: 'bold',
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 800px)': { fontSize: '.6rem' },
                        }}>
                        {investimento.moeda}
                    </Typography>       
                </div>
                <div
                    style={{                        
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <ArrowUpward sx={{  color: 'green', fontSize: '1rem', '@media (max-width: 800px)': { fontSize: '.6rem' }, }} />
                         <Typography 
                            sx={{
                                ml: .5,                                          
                                fontSize: '14px',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto, sans-serif',
                                color: 'green',
                                '@media (max-width: 800px)': { fontSize: '.6rem' },

                            }}
                        >
                         {nivel.lucrod}{'%'}
                        </Typography>   

                </div>            
            </Box>
            <Divider />
            <Typography
                variant="caption"
                sx={{
                    mt: 1,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '.8rem', 
                    '@media (max-width: 800px)': { fontSize: '.5rem' },
                }}
            >
                Intervalo de valores
            </Typography><br/>
            <Typography
                variant="caption"
                sx={{
                     mb: 1,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '.8rem', 
                    '@media (max-width: 800px)': { fontSize: '.5rem' },
                }}
            >
                ${nivel.min} - ${nivel.max}
            </Typography>
             <TextField 
                sx={{mt: 1}}
                //variant="standard"
                size="small"
                label="Total a investir" 
                placeholder="Insere o valor a investir"
                name="valor"
                //onChange={handleChannge}
                //value={moeda.descricao}  
                fullWidth 
                required
            />
            <Box>
                <IconButton sx={{borderRadius: 0, color: '#00809b'}}  aria-label="upload picture" component="label">
                    <input 
                        hidden
                        accept="image/*" 
                        type="file" 
                        ref={selectFile}  
                        onChange={imageChange}                          
                        required 
                    />
                        <PhotoCamera />
                        <Typography variant="overline" display="block" gutterBottom margin={1}>
                           COMPROVANTE
                        </Typography>	                       	
                </IconButton>  
                    
                    <Box style={{
                            marginTop: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <img							
                            src={(selectedImage === undefined) ? new URL(`../../images/usuarios/${foto}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
                            style={{ maxWidth: "40%", maxHeight: 175 }}
                            alt="Thumb"
                        />
                    </Box>
            </Box>
             <Divider />
            <Box sx={{ mt: 1, float: 'right' }}>
                <Button 
                    type="submit" 
                    sx={{
                        mr: 0.5,
                        color: '#00809b',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '12px',
                        '&:hover': {
                            color: '#013039',                       
                            transition: 'all 400ms',
                        },
                    }}
                    //onClick={() => setValue(value-1)}
                    
                > 
                    FINALIZAR DEPOIS
                </Button>   

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
                    //onClick={()=> setValue(value+1)}
                > 
                    INVESTIR
                </Button>
            </Box>
        </Paper>
    );
}

export default FinishInvstment;
