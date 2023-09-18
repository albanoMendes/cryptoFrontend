///import React from 'react';

import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import { Delete, Edit } from "@mui/icons-material";
import Formanuncio from "./Formanuncio";
import Deletaranuncio from "./Deletaranuncio";

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#00809b"
        },
    }
});

const rows = [
    {
        id: 1,
        title: 'Lucra fazendo convite',
        conteudo: 'A cada convite vc recebe 0.05 do valor investido, não perca a oportunidade de fazer crescer o teu lucro',
        data: '10/07/2023 10:50'
    },
    {
        id: 2,
        title: 'Criptomoedas nova na plataforma',
        conteudo: 'Brevemente vamos disponibilizar novas criptomedas que estão em alta no mercado de criptomoedas, fique atento e seja o primeiro a investir',
        data: '10/07/2023 10:50'
    },
    {
        id: 3,
        title: 'Lucra fazendo convite',
        conteudo: 'A cada convite vc recebe 0.05 do valor investido, não perca a oportunidade de fazer crescer o teu lucro',
        data: '10/07/2023 10:50'
    },
    {
        id: 4,
        title: 'Criptomoedas nova na plataforma',
        conteudo: 'Brevemente vamos disponibilizar novas criptomedas que estão em alta no mercado de criptomoedas, fique atento e seja o primeiro a investir',
        data: '10/07/2023 10:50'
    },
]
function Anuncios() {
    
    const [notificacao, setNotificacao] = useState(rows);
    const classes = useStyles();    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');

    const [id, setId] = useState(0);
    const [anuncio, setAnuncio] = useState({
        id: 0,
        title: '',
        conteudo: '',
        data: '',      
    });

  const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAdd = () => {
        setOpcao('ADD');
        setTitle('ADD ANÚNCIO');
        setOpenModel(true);
        setAnuncio({
            id: 0,
            title: '',
            conteudo: '',
            data: '',    
        })
    };

    const handleEditar = (moeda) => {
        setOpcao('EDITAR');
        setTitle('EDITAR ANÚNCIO');
        setOpenModel(true);
        setAnuncio({
            id: moeda.id,
            title: moeda.title,
            conteudo: moeda.conteudo,
        })
    };

    
    const handleDelete = (moeda) => {  
        setOpcao('DELETE')     
        setTitle('EXCLUIR ANÚNCIO');
        setOpenModel(true);
        setAnuncio({
            id: moeda.id,
            title: moeda.title,
            conteudo: moeda.conteudo,
        })
    };

    const getComponent = () =>{
        switch (opcao) {
            case 'ADD':
                return <Formanuncio opcao={opcao} setAnuncios={setNotificacao} />;
            case 'EDITAR':           
                return  <Formanuncio anuncio={anuncio} opcao={opcao} setAnuncios={setNotificacao}/>;
            case 'DELETE':
                return <Deletaranuncio anuncio={anuncio} setAnuncios={setNotificacao} setOpenModel={setOpenModel} />
            default: 
                return null;
        }
    }

    return (
        <>
             <div style={{marginBottom: 50}}>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',                   
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 800px)': { fontSize: '15px' },
                    }}
                >
                    ANÚNCIOS
                </Typography>
                <Typography
                    sx={{                    
                        fontSize: '15px',                                       
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 800px)': { fontSize: '10px' },
                    }}
                >
                    Crie anúncios sobre novas atividades ou atualizações na plataforma
                </Typography>     
            </div>
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
                    onClick={()=> handleAdd()}
                > 
                    +
                </Button>
            </Box>
             <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                      <TableRow className={classes.root}>
                      
                          <TableCell                       
                              align={'left'}
                              style={{ minWidth: 100 }}
                          >
                              TITULO
                          </TableCell>
                          
                          <TableCell                       
                              align={'left'}
                              style={{ minWidth: 170 }}
                          >
                              CONTEÚDO
                          </TableCell>
                          
                          <TableCell                       
                              align={'center'}
                              style={{ minWidth: 150 }}
                          >
                              DATA
                          </TableCell>
                          
                          <TableCell                       
                              align={'center'}
                              style={{ minWidth: 150 }}
                          >
                              OPCÕES
                          </TableCell>
                  
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {notificacao
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                          return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>        
                          
                              <TableCell align={'left'}>
                                  {row.title}
                              </TableCell>

                              <TableCell align={'left'}>
                                
                                 <Typography
                                    sx={{                    
                                        fontSize: '15px',                                       
                                        fontFamily: 'Roboto, sans-serif',
                                        '@media (max-width: 800px)': { fontSize: '10px' },
                                    }}
                                >
                                    {row.conteudo}
                                    
                                </Typography>     
                              </TableCell>
                              
                              <TableCell align={'center'}>
                                  {row.data}
                              </TableCell>
                                  
                                <TableCell align={'center'}>
                                   
                                    <IconButton 
                                        onClick={() =>  handleEditar(row)} 
                                        size="small" 
                                        aria-label="show 4 new mails" 
                                        color="inherit"
                                    >
                                        <Edit sx={{ color: '#00809b', fontSize: '20px'}} />
                                      </IconButton>
                                      
                                     <IconButton
                                        onClick={() =>  handleDelete(row)} 
                                        size="small" 
                                        aria-label="show 4 new mails"                     
                                    >
                                        <Delete sx={{ color: 'red', fontSize: '20px'}} />
                                    </IconButton>
                              </TableCell>
                          
                          </TableRow>
                          );
                      })}
                  </TableBody>
                  </Table>
              </TableContainer>
              <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
              />
          </Paper>
          
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

export default Anuncios;
