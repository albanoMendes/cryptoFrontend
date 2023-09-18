import { Add, Delete, Edit } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useState } from "react";
import Model from "../Model";
import CriptoRede from "./CriptoRede";
import DeletarRede from "./DeletarRede";

const rds = [
    {
        id: 1,
        name: 'BNB Smart Chain (BNP 20)',
        endereco: 'R2538TF',
        idCripto: 1
    },
    {
        id: 2,
        name: 'Bitcoin',
        endereco: 'R2538TF',
        idCripto: 1
    },
    {
        id: 3,
        name: 'BNB Smart Chain (BEP 2)',
        endereco: 'R2538TF',
        idCripto: 1
    },
    
]
// eslint-disable-next-line react/prop-types
function ShowRedes({ moeda, setOpenModel }) {
   
    const [redes, setRedes] = useState(rds);
    const [openModel, setOpen] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');

    const [redec, setRedec] = useState({
        id: 0,
        name: '',
        endereco: '',
        idCripto: 0
    })

    
    const handleAdd = () => {
      setOpcao('ADD');
      setTitle('ADD REDE');
      setOpen(true);
      setRedec({
        id: 0,
        name: '',
        endereco: '',
        idCripto: 0
      })
    };

    const handleEditar = (moeda) => {
        setOpcao('EDITAR');
        setTitle('EDITAR REDE');
        setOpen(true);
        setRedec({
            id: moeda.id,
            name: moeda.name,
            endereco: moeda.endereco,
            idCripto: moeda.idCripto
        })
        
    };

    const handleApagar = (moeda) => {
        setOpcao('APAGAR');
        setTitle('APAGAR REDE');
        setOpen(true);
        setRedec({
            id: moeda.id,
            name: moeda.name,
            endereco: moeda.endereco,
            idCripto: moeda.idCripto
        })
    };

     const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
              return <CriptoRede opcao={opcao} rcripto={redec} setRedes={setRedes} />; 
        case 'EDITAR':           
              return <CriptoRede opcao={opcao} rcripto={redec} setRedes={setRedes} />; 
        case 'APAGAR':
              return <DeletarRede rede={ redec } setOpenModel={setOpen}  setRedes={setRedes}/>;   
        default: 
          return null;
      }
    }

    return (
        <Paper sx={{ p: 2, mb: 1, maxWidth: 400 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography 
                sx={{  
                    fontWeight: 'bold',                                                   
                    fontSize: '25px',                    
                    fontFamily: 'Roboto, sans-serif',
                }}>
                    Redes {moeda.descricao}
                </Typography>
                <IconButton 
                    onClick={() =>  handleAdd()} 
                    size="small" 
                    aria-label="show 4 new mails" 
                    color="inherit"
                >
                    <Add sx={{ color: '#00809b', fontSize: '20px'}} />
                </IconButton>
            </Box>
            
            <Divider />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    redes.map(rede => (
                        <ListItem key={rede.id} sx={{bgcolor: '#00809b', mb: 1}}>
                            <ListItemText
                                
                                primary={
                                    <Typography
                                        component={'div'}
                                        sx={{  
                                            fontWeight: 'bold',
                                            color: 'white',                        
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.8rem',  
                                            
                                        }}
                                        >
                                        {rede.name}                    
                                    </Typography>
                                }
                                secondary={
                                    <Typography
                                        component={'div'}
                                        sx={{  
                                            fontWeight: 'bold',
                                            color: 'white',                        
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '.8rem',  
                                            
                                        }}
                                        >
                                        {rede.endereco}                    
                                    </Typography>
                                }
                            />
                            <Box>
                                <IconButton 
                                    onClick={() =>  handleEditar(rede)} 
                                    size="small" 
                                    aria-label="show 4 new mails" 
                                    color="inherit"
                                >
                                    <Edit sx={{ color: 'white', fontSize: '20px'}} />
                                </IconButton>
                                <IconButton 
                                    onClick={() => handleApagar(rede)}
                                    size="small" 
                                    aria-label="show 4 new mails" 
                                    color="inherit"
                                >
                                    <Delete sx={{ color: 'red', fontSize: '20px'}}/>
                                </IconButton>                                    
                            </Box>
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
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
            <Model
                title={title}
                openModel = {openModel}
                setOpenModel = {setOpen}
            >
              {
              getComponent()
              }
          </Model>             
            
        </Paper>
    );
}

export default ShowRedes;
