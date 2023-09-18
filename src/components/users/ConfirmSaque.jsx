//import React from 'react';

import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { useRef, useState } from "react";


function ConfirmSaque({ pagar, setPagar, setOpenModel }) {

    const foto = "sem-foto.jpg";
    const [selectedImage, setSelectedImage] = useState();
    const selectFile = useRef();

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImage(e.target.files[0]);
        }
    };

    return (
        <Paper sx={{p: 1}}>
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
                        fontSize: '.5rem',               
                    }}
                    >
                    TOTAL $:
                </Typography>
                <Typography
                    component={'div'}
                    sx={{  
                        fontWeight: 'bold',
                        color: '#00809b',                        
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '.8rem',  
                        
                    }}
                    >
                    {pagar.total}                    
                </Typography>
            </Box>
            
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
                        fontSize: '.5rem',               
                    }}
                    >
                    DATA:
                </Typography>
                <Typography
                    component={'div'}
                    sx={{  
                        fontWeight: 'bold',
                        color: '#00809b',                        
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '.8rem',  
                        
                    }}
                    >
                    {pagar.data}                    
                </Typography>
            </Box>

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
                            ADD UMA FOTO
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
                            style={{ maxWidth: "25%", maxHeight: 125 }}
                            alt="Thumb"
                        />
                    </Box>
            </Box>
            
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
                onClick={()=> setOpenModel(false)}
                > 
                OK
            </Button>
        </Paper>
    )
}

export default ConfirmSaque;
