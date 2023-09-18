import { Button, Divider, Paper, TextField,  Box, IconButton, Typography  } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { PhotoCamera } from "@mui/icons-material";

function Formpublicidades({anuncio, opcao, setAnuncios}) {

     const foto = "sem-foto.jpg";
    const [selectedImage, setSelectedImage] = useState();
    const selectFile = useRef();

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImage(e.target.files[0]);
        }
    };

    const [anunciar, setAnunciar] = useState({
        id: 0,
        title: '',
        url: '',
        data: '',    
    });

    useEffect(() => { 
		
        if (opcao === "EDITAR") {
			setAnunciar({
                id: anuncio.id,
                title: anuncio.title,
                url: anuncio.url,
                data: anuncio.data,    
			})
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

     const handleChannge=(e)=>{
		setAnunciar({...anunciar,[e.target.name]: e.target.value})
	};

    return (
        <Paper  elevation={0}>
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
           <Box>
                <IconButton size="small" sx={{borderRadius: 0, color: '#00809b'}}  aria-label="upload picture" component="label">
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

export default Formpublicidades;
