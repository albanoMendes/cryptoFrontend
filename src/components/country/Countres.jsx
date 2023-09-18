import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";
import CountryForm from "./CountryForm";
import DeleteCountry from "./DeleteCountry";
import Model from '../Model';


function createData(id, name, acronimo, code) {
  return {id, name, acronimo, code };
}

const rows = [
    createData(1, 'ESTADOS UNIDOS DA AMERICA', 'USA', '+1'),
    createData(2, 'ANGOLA', 'AN', '+244'),
    createData(3, 'BRASIL', 'BR', '+55'),
    createData(4, 'MOZAMBIQUE', 'MOZ', '+258'),
    createData(5, 'ESTADOS UNIDOS DA AMERICA', 'USA', '+1'),
    createData(6, 'ESTADOS UNIDOS DA AMERICA', 'USA', '+1'),
 
];

function Countres() {
    
    const [countries, setCountries] = useState(rows)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(0);
    const [pais, setPais] = useState({
        id: 0,
        name: '',
        acronimo: '',
        code: '',
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
      setTitle('ADD PAÍS');
      setOpenModel(true);
    };

    const handleEditarCountry = (pais) => {
      setOpcao('EDITAR');
      setTitle('EDITAR PAÍS');
      setOpenModel(true);
      setPais({
        id: pais.id,
        name: pais.name,
        acronimo: pais.acronimo,
        code: pais.code,
      })
      

    };

    const handleApagarCountry = (pais) => {
      setOpcao('APAGAR');
      setTitle('APAGAR PAÍS');
      setOpenModel(true);
      setPais({
        id: pais.id,
        name: pais.name,
        acronimo: pais.acronimo,
        code: pais.code,
      })
    };

    const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
          return <CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel}/>;
        case 'EDITAR':           
              return <CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel} pais={pais}/>;
        case 'APAGAR':
          return <DeleteCountry pais={pais} setCountries={setCountries} setOpenModel={setOpenModel}/>; 
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
                PAÍSES
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
                            PREFIXO
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
                    {countries
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
                                {row.code}
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

export default Countres