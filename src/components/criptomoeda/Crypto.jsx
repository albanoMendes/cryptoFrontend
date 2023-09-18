/* eslint-disable no-unused-vars */
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import Model from "../Model";
import { AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import CriptoContainer from "./CriptoContainer";
import Deletar from "./Deletar";
//import ShowRede from "./ShowRede";
import RedeContainer from "./RedeContainer";
import ShowRedes from "./ShowRedes";
import ShowRede from "./ShowRede";

function createData(id, acronimo, descricao, logo, tipo, rede) {
  return {id, acronimo, descricao, logo, tipo, rede };
}

const rows = [
    createData(1, 'BTC', 'BITCOIN', 'BitcoinBTC.png', 'CRIPTOMOEDA', 1),
    createData(2, 'ETH', 'ETHEREUM', 'EthereunETH.png', 'CRIPTOMOEDA', 2),
    createData(3, 'ADA', 'CARDANO', 'cardanoADA.png', 'CRIPTOMOEDA', 3),
    createData(4, 'kz', 'KWANZA', 'kwanza.png', 'FUNDIARIA', 4),
    
];

function Crypto() {

    const [currencies, setCurrencies] = useState(rows)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');

    const [id, setId] = useState(0);
    const [moeda, setMoeda] = useState({
        id: 0,
        acronimo: '',
        descricao: '',
        logo: '',
        tipo: '',
        rede: 0,       
    });

  const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAddCountry = () => {
      setOpcao('ADD');
      setTitle('ADD CRIPTOMOEDA');
      setOpenModel(true);
      setMoeda({
        id: 0,
        acronimo: '',
        descricao: '',
        logo: '',
        rede: 0,  
      })
    };

    const handleEditarCountry = (moeda) => {
      setOpcao('EDITAR');
      setTitle('EDITAR MOEDA');
      setOpenModel(true);
      setMoeda({
        id: moeda.id,
        acronimo: moeda.acronimo,
        descricao: moeda.descricao,
        logo: moeda.logo,
        tipo: moeda.tipo,
        rede: moeda.rede
      })
    };

    const handleApagarCountry = (moeda) => {
      setOpcao('APAGAR');
      setTitle('APAGAR MOEDA');
      setOpenModel(true);
      setMoeda({
        id: moeda.id,
        acronimo: moeda.acronimo,
        descricao: moeda.descricao,
        logo: moeda.logo,
        tipo: moeda.tipo,
        rede: moeda.rede
      })
    };

    const handleConta = (moeda) => {  
        setOpcao('SHOW')     
        setTitle('REDES');
        setOpenModel(true);
        setMoeda({
            id: moeda.id,
            acronimo: moeda.acronimo,
            descricao: moeda.descricao,
            logo: moeda.logo,
            tipo: moeda.tipo,
            rede: moeda.rede
        })
    };

    const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
              return <CriptoContainer moeda={moeda} setMoeda={setMoeda} opcao={'SALVAR'} />; 
        case 'EDITAR':           
              return <CriptoContainer moeda={moeda} setMoeda={setMoeda} opcao={opcao} />; 
        case 'APAGAR':
              return <Deletar currency={moeda} setOpenModel={setOpenModel} setCurrencies={setCurrencies} />;   
        case 'SHOW':
            if(moeda.tipo == 'CRIPTOMOEDA'){
                return <ShowRedes moeda={moeda} setOpenModel={setOpenModel} />
            } else {
                return <ShowRede  moeda={moeda} setOpenModel={setOpenModel}/>
            }
        default: 
          return null;
      }
    }

    return (
      <Box>
          <Paper 
              elevation={1}
              sx={{  
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
              }}
          >
              <Typography
                  sx={{
                      fontWeight: 'bold',
                      fontSize: '20px',
                      p: 1,
                      fontFamily: 'Roboto, sans-serif',
                  }}
              >
                  CRYPTOMOEDA
              </Typography>
                  <Button  
                    onClick={() => handleAddCountry()}
                    //variant="contained"             
                    sx={{  
                        mr:1,                  
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',		
                        textDecoration: 'none',
                        fontSize: '15px',
                        fontFamily: 'Roboto, sans-serif',
                        backgroundColor: '#00809b',
                        '&:hover': {
                            color: '#013039',
                            cursor: 'pointer',
                            transition: '0.3s ease-in',
                        },
                    }}
                  >
                  +
              </Button>
          </Paper>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                      <TableRow>
                      
                          <TableCell                       
                              align={'center'}
                              style={{ minWidth: 100 }}
                          >
                              ID
                          </TableCell>
                          
                          <TableCell                       
                              align={'center'}
                              style={{ minWidth: 150 }}
                          >
                              LOGO
                          </TableCell>
                          
                          <TableCell                       
                              align={'center'}
                              style={{ minWidth: 150 }}
                          >
                              ACRONIMO
                          </TableCell>
                          
                          <TableCell                       
                              align={'center'}
                              style={{ minWidth: 150 }}
                          >
                              DESCRICÃO
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
                      {currencies
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                          return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>        
                          
                              <TableCell align={'center'}>
                                  {row.id}
                              </TableCell>
                              
                              <TableCell align={'center'}>
                                    <img                  
                                        src={new URL(`../../images/cryptoMoedas/${row.logo}`, import.meta.url)}
                                        width={35}
                                        height={35}
                                    />                                 
                              </TableCell>
                              
                              <TableCell align={'center'}>
                                  {row.acronimo}
                              </TableCell>
                              
                              <TableCell align={'center'}>
                                  {row.descricao}
                              </TableCell>
                                  
                                <TableCell align={'center'}>
                                    <IconButton
                                        onClick={() =>  handleConta(row)} 
                                        size="small" 
                                        aria-label="show 4 new mails"                     
                                    >
                                        <AccountBalance sx={{ color: '#00809b', fontSize: '20px'}} />
                                    </IconButton>
                                    <IconButton 
                                        onClick={() =>  handleEditarCountry(row)} 
                                        size="small" 
                                        aria-label="show 4 new mails" 
                                        color="inherit"
                                    >
                                        <Edit sx={{ color: '#00809b', fontSize: '20px'}} />
                                    </IconButton>
                                    <IconButton 
                                        onClick={() => handleApagarCountry(row)}
                                        size="small" 
                                        aria-label="show 4 new mails" 
                                        color="inherit"
                                    >
                                        <Delete sx={{ color: 'red', fontSize: '20px'}}/>
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
      </Box>
    );
}

export default Crypto;
