import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

const status = [
  {
    value: 'PEDENTE',
    label: 'PEDENTE',
  },
  {
    value: 'EFETUADO',
    label: 'EFETUADO',
  },
];

function EditSaque({ saque, setOpenModel }) {

    const foto = "sem-foto.jpg";
    const [selectedImage, setSelectedImage] = useState();
    const selectFile = useRef();
    const [draw, setDraw] = useState({
        id: saque.id,
        total: saque.total,
        moeda: saque.moeda,
        cambio: saque.cambio,
        status: saque.status,
        data: saque.data,
        foto: [],
        idInvest: saque.idInvest,
        idUser: saque.idUSer
    });

    const handleChannge=(e)=>{
		setDraw({...draw,[e.target.name]: e.target.value})
	};

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImage(e.target.files[0]);
        }
    };


    return (
        <Paper elevation={0} sx={{ p: 0, mb: 1 }}>
            <Typography 
              sx={{  
                  fontWeight: 'bold',                                                   
                  fontSize: '15px',                    
                  fontFamily: 'Roboto, sans-serif',
              }}>
              {'ID INVESTIMENTO: '} {`${saque.idInvest}`}
          </Typography>
          <Divider/>
           <TextField 
                //variant="standard"
                size="small"
                sx={{mt: 2, mb: 1}}
                label="Total" 
                placeholder="Insere o seu nome"
                name="total"
                type="number"
                onChange={handleChannge}
                value={saque.total}  
                fullWidth 
                required
            />
            <TextField
                size="small"    
                sx={{mt: 2, mb: 1}}
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue={saque.status}
                helperText="Please select your currency"
                 fullWidth
                >
                {status.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>

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
             <Divider />
            <Box sx={{mt: 1}} >		
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
                    Editar
                </Button>
                <Button 
                    type="submit" 
                    sx={{
                        ml: 0.5,
                        color: '#00809b',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '12px',
                        '&:hover': {
                        color: 'white',
                        backgroundColor: '#FF0000',
                        transition: 'all 400ms',
                        },
                    }}
                    onClick={() => setOpenModel(false)}
                > 
                    Sair
                </Button>   
            </Box>

        </Paper>
    );
}

export default EditSaque;
