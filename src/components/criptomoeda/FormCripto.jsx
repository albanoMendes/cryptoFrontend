import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

const currencies = [
  {
    id: 1,   
    name: 'CRIPTOMOEDA',    
  },
  {
    id: 2,   
    name: 'FIDUCIÁRIA',  
  },
];
// eslint-disable-next-line react/prop-types
function FormCripto({moeda, setMoeda, setValue}) {

    const foto = "sem-foto.jpg";
    const [selectedImage, setSelectedImage] = useState();
    const selectFile = useRef();

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImage(e.target.files[0]);
        }
    };

    const handleChannge=(e)=>{
		setMoeda({...moeda,[e.target.name]: e.target.value})
	};

    return (
        <Paper elevation={0} sx={{ p: 0 }}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12} >
                    <Grid container justifyContent="space-between" spacing={2}>                        

                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Acronimo" 
                                placeholder="Ex BTC"
                                name="acronimo"
                                onChange={handleChannge}
                                value={moeda.acronimo}  
                                fullWidth 
                                required
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                //variant="standard"
                                size="small"
                                label="Descrição" 
                                placeholder="Ex BITCOIN"
                                name="descricao"
                                onChange={handleChannge}
                                value={moeda.descricao}  
                                fullWidth 
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>						
                                <InputLabel
                                    id="menu"
                                    sx={{
                                        ml: 1,
                                        mr: 1,								
                                        fontSize: '15px',
                                        fontFamily: 'Roboto, sans-serif',
                                    }}
                                >
                                    TIPO DE MOEDA
                                </InputLabel>
                                <Select
                                    size="small"
                                    labelId="menu" id="menu-list"
                                    label="SELECIONE SEU PAIS"	
                                    name="tipo"
                                    onChange={handleChannge}
                                    >
                                    {currencies.map((option) => (
                                    <MenuItem            
                                        key={option.id} value={option.name}
                                    >							
                                    <Typography 
                                        sx={{
                                            ml: 1,                                           
                                            fontSize: '15px',                    
                                            fontFamily: 'Roboto, sans-serif',
                                        }}>
                                        {option.name}
                                        </Typography>          
                                    
                                    </MenuItem>
                                    ))}

                                </Select>
                            </FormControl> 			
                        </Grid>

                        <Grid item xs={12} sm={6}>
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
                                            LOGO DA MOEDA
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
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ float: 'right' }}>
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
                    onClick={()=> setValue(1)}
                > 
                    PROXIMO
                </Button>
            </Box>
        </Paper>
    );
}

export default FormCripto;
