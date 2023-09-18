/* eslint-disable no-unused-vars */
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import CurrencyForm from "./CurrencyForm";
import DeleteCurrency from "./DeleteCurrency";
import Model from "../Model";
import { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";

function createData(id, name, acronimo, valor, idCountry) {
  return {id, name, acronimo, valor, idCountry };
}

const rows = [
    createData(1, 'KWANZA', 'KZ', 150, 1),
    createData(2, 'REAIS', 'R$', 4, 2),
    createData(3, 'DOLAR', '$', 1, 3),
    createData(4, 'METICAL', 'MT', 250, 4),
];



function Currencies() {

    const [currencies, setCurrencies] = useState(rows)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(0);
    const [moeda, setMoeda] = useState({
        id: 0,
        name: '',
        acronimo: '',
        valor: 0,
        idCountry: id,
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
      setTitle('ADD MOEDA');
      setOpenModel(true);
    };

    const handleEditarCountry = (moeda) => {
      setOpcao('EDITAR');
      setTitle('EDITAR MOEDA');
      setOpenModel(true);
      setMoeda({
        id: moeda.id,
        name: moeda.name,
        acronimo: moeda.acronimo,
        valor: moeda.valor,
        idCountry: moeda.idCountry,
      })
    };

    const handleApagarCountry = (moeda) => {
      setOpcao('APAGAR');
      setTitle('APAGAR PAÍS');
      setOpenModel(true);
      setMoeda({
        id: moeda.id,
        name: moeda.name,
        acronimo: moeda.acronimo,
        valor: moeda.valor,
        idCountry: moeda.idCountry,
      })
    };

    const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
          return <CurrencyForm opcao={opcao} setCurrencies={setCurrencies} setOpenModel={setOpenModel}/>;
        case 'EDITAR':           
              return <CurrencyForm opcao={opcao} setCurrencies={setCurrencies} id={id} setOpenModel={setOpenModel} dinheiro={moeda}/>;
        case 'APAGAR':
          return <DeleteCurrency currency={moeda} setCurrencies={setCurrencies} setOpenModel={setOpenModel}/>; 
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
                    MOEDA DE PAÍSES
                </Typography>
                    <Button  
                        onClick={() => handleAddCountry()}
                        variant="contained"             
                        sx={{  
                            mr:1,                  
                            color: 'white',
                            backgroundColor: '#00809b',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '14px',
                            '&:hover': {                       
                                transition: 'all 400ms',
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
                                style={{ minWidth: 170 }}
                            >
                                ID
                            </TableCell>
                            
                            <TableCell                       
                                align={'center'}
                                style={{ minWidth: 170 }}
                            >
                                NOME
                            </TableCell>
                            
                            <TableCell                       
                                align={'center'}
                                style={{ minWidth: 170 }}
                            >
                                ACRONIMO
                            </TableCell>
                            
                            <TableCell                       
                                align={'center'}
                                style={{ minWidth: 170 }}
                            >
                                VALOR
                            </TableCell>
                            
                            <TableCell                       
                                align={'center'}
                                style={{ minWidth: 170 }}
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
                                    {row.name}
                                </TableCell>
                                
                                <TableCell align={'center'}>
                                    {row.acronimo}
                                </TableCell>
                                
                                <TableCell align={'center'}>
                                    {row.valor}
                                </TableCell>
                                    
                                <TableCell align={'center'}>
                                  <IconButton 
                                        onClick={() =>  handleEditarCountry(row)} 
                                        size="small" 
                                        aria-label="show 4 new mails" 
                                        color="inherit"
                                    >
                                        <Edit color="primary" />
                                    </IconButton>
                                    <IconButton 
                                        onClick={() => handleApagarCountry(row)}
                                        size="small" 
                                        aria-label="show 4 new mails" 
                                        color="inherit"
                                    >
                                        <Delete color="error"/>
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
    )
}

export default Currencies