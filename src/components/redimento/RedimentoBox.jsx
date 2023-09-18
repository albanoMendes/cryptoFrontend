import { Add, Delete } from "@mui/icons-material";
import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import Niivel from "./Niivel";
import { useState } from "react";
import Model from "../Model";
import NivelForm from "./NivelForm";
import DeletarRnd from "./DeletarRnd";
import DeletarNivel from "./DeletarNivel";

function createData(id, min, max, lucrod, idRedimento) {
  return { id, min, max, lucrod, idRedimento };
}

const rows = [
  createData(1, 15, 1999, 5.5, 1),
  createData(2, 2000, 5999, 8.0, 1),
  createData(3, 6000, 15999, 10.25, 1),
  createData(4, 16000, 100000, 15, 1),
  
];

// eslint-disable-next-line react/prop-types
function RedimentoBox({ redimento, setRedimentos }) {

    const [niveis, setNiveis] = useState(rows);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');
    const [nivel, setNivel] = useState({
        id: 0,
        min: 0,
        max: 0,
        lucrod: 0,
        idRedimento: 0
    })

    const handleAdd = () => {
        setOpcao('ADD');
        setOpenModel(true);
        setTitle('ADD NÍVEL');
        setNivel({
            id: 0,
            min: 0,
            max: 0,
            lucrod: 0,
            idRedimento: 0
        })
    }
    
    const handleApagar = (niv) => {
        setOpcao('APAGAR');
        setOpenModel(true);
        setTitle('EXCLUIR NÍVEL');
        setNivel({
            id: niv.id,
            min: niv.min,
            max: niv.max,
            lucrod: niv.lucrod,
            idRedimento: niv.idRedimento
        })
    }

     const handleApagarRnd = () => {
        setOpcao('APAGAREND');
        setOpenModel(true);
        setTitle('EXCLUIR RENDIMENTO');        
    }

    const handleEditar = (niv) => {
        setOpcao('EDITAR');
        setOpenModel(true);
        setTitle('EDITAR NÍVEL');
        setNivel({
            id: niv.id,
            min: niv.min,
            max: niv.max,
            lucrod: niv.lucrod,
            idRedimento: niv.idRedimento
        })

    }


    const getComponent = () =>{
      switch(opcao){
          case 'ADD':
              return <NivelForm  opcao={opcao} nivel={nivel} setNivel={setNivel} setOpenModel={setOpenModel} setNiveis={setNiveis} redimento={redimento} />; ///<UserCreate foto="sem-foto.jpg" user={user} opcao={opcao} />; //<CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel}/>;
          case 'EDITAR':
              return <NivelForm opcao={opcao} nivel={nivel} setNivel={setNivel} setOpenModel={setOpenModel} setNiveis={setNiveis} redimento={redimento} />;//<UserCreate foto="sem-foto.jpg" user={user} opcao={opcao} />; //<CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel} pais={pais}/>;
          case 'APAGAR':
              return <DeletarNivel nivel={nivel} setNiveis={setNiveis} setOpenModel={setOpenModel} />; //<Deletar user={user} setOpenModel={setOpenModel} />; //<DeleteCountry pais={pais} setCountries={setCountries} setOpenModel={setOpenModel}/>; 
          case 'APAGAREND':
              return <DeletarRnd redimento={redimento} setOpenModel={setOpenModel} setRedimentos={setRedimentos} />;//<UserInfoContainer investimentos={investimentos} setInvestimntos={setInvestimentos} nome={ nome } />; //
        default: 
          return null;
      }
    }



    return (
        <>
            <Paper sx={{ m: 'auto', maxWidth: '90%', }}>
                <Box
                    sx={{ 
                        p: 2,                       
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
                            src={new URL(`../../images/cryptoMoedas/${redimento.logo}`, import.meta.url)}
                            width={25}
                            height={25}
                        />
                        <Typography 
                            sx={{
                                ml: 1,                                           
                                fontSize: '15px',                    
                                fontFamily: 'Roboto, sans-serif',
                            }}>
                            {redimento.moeda}
                        </Typography>       
                    </div>
                    <div
                        style={{                        
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            onClick={() =>  handleAdd()} 
                            size="small" 
                            aria-label="show 4 new mails" 
                            color="inherit"
                        >
                            <Add sx={{ color: '#00809b', fontSize: '20px'}} />
                        </IconButton>
                        <IconButton 
                            onClick={() =>  handleApagarRnd()}
                            size="small" 
                            aria-label="show 4 new mails" 
                            color="inherit"
                        >
                            <Delete sx={{ color: 'red', fontSize: '20px'}}/>
                        </IconButton>                  
                    </div>
                </Box>
                <Divider />
                <Box>
                    <Niivel niveis={niveis} handleApagar={handleApagar}  handleEditar={handleEditar} acronimo={redimento.acronimo} />
                </Box>        
            </Paper>
            <br/>
            <Model
                title={title}
                openModel = {openModel}
                setOpenModel = {setOpenModel}
            >
                {
                getComponent()
                }
            </Model>
        </>
    
    );
}

export default RedimentoBox;
