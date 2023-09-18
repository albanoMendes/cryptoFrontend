import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { Add, Delete, Edit, Info, People } from '@mui/icons-material';
import investors from '../../images/Invester.png';
import Model from "../Model";
import { useState } from "react";
import UserInfoContainer from "./UserInfoContainer";
import UserCreate from "./UserCreate";
import Deletar from "./Deletar";

function createData(id, name, lastname, email, cell, foto, tipoUser, invest, idCountry) {
  return {id, name, lastname, email, cell, foto, tipoUser, invest, idCountry };
}

const rows = [
    createData(1, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(2, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(3, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(4, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(5, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(6, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(7, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(8, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(9, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(10, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(11, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
    createData(12, 'ANA', 'MARIA', 'anamaria2@gmail.com', '48 999-84983', 'ana.png', 'CLIENT', 'no', 1),
              
    
];

const investers = [
    {
        id: 1,
        logo: 'BitcoinBTC.png',
        moeda: 'BITCOIN',
        acronimo: 'BTC',
        lucro: 2.22,
        total: 145,
        status: 'PEDENTE',
        idUser: 1        
    },
    {
        id: 2,
        logo: 'cardanoADA.png',
        moeda: 'CARDANO',
        acronimo: 'ADA',
        lucro: 1.05,
        total: 245,
        status: 'MINERANDO',
        idUser: 1
    },
     {
        id: 3,
        logo: 'EthereunETH.png',
        moeda: 'ETHERENEUN',
        acronimo: 'ETH',
        lucro: 2.45,
        total: 100,
        status: 'ATIVO',
        idUser: 1
    }
];

function User() {

    const [countries, setCountries] = useState(rows)
    const [investimentos, setInvestimentos] = useState(investers)    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModel, setOpenModel] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');
    const [nome, setNome] = useState('');

     const [id, setId] = useState(0);
    const [user, setUser] = useState({
        nome: "",
		lastname: "",
		email: "",
		idcountry: id,
		cell: "'(100) 0000-0000'",		
		foto: [],
		tipoUser: ""
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
      setTitle('ADD USUARIO');
      setOpenModel(true);
    };

    const handleEditarCountry = (user) => {
      setOpcao('EDITAR');
      setTitle('EDITAR USUARIO');
      setOpenModel(true);
      setUser({
        nome: user.name,
		lastname: user.lastname,
		email: user.email,
		idcountry: user.idCountry,
		cell: user.cell,		
		foto: user.foto,
		tipoUser: user.tipoUser
      })
    };

    const handleOpenInfo = (nome) => {
      setOpcao('INFO');
      setTitle('INFO CLIENTE');
      setOpenModel(true);
        setNome(nome);
    };


    const handleApagarCountry = (user) => {
      setOpcao('APAGAR');
      setTitle('EXCLUIR USUARIO');
      setOpenModel(true);
      setUser({
        nome: user.name,
		lastname: user.lastname,
		email: user.email,
		idcountry: user.idCountry,
		cell: user.cell,		
		foto: user.foto,
		tipoUser: user.tipoUser
      })
    };

    const getComponent = () =>{
      switch(opcao){
          case 'ADD':
              return <UserCreate foto="sem-foto.jpg" user={user} opcao={opcao} />; //<CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel}/>;
          case 'EDITAR':
              return <UserCreate foto="sem-foto.jpg" user={user} opcao={opcao} />; //<CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel} pais={pais}/>;
          case 'APAGAR':
              return <Deletar user={user} setOpenModel={setOpenModel} />; //<DeleteCountry pais={pais} setCountries={setCountries} setOpenModel={setOpenModel}/>; 
          case 'INFO':
              return <UserInfoContainer investimentos={investimentos} setInvestimntos={setInvestimentos} nome={ nome } />; //
        default: 
          return null;
      }
    }


    return (
        <>
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
                    USUÁRIOS
                </Typography>
                <Box
                    sx={{  
                    display: 'flex', 
                   
                }}
                >
                    <Button  
                        //onClick={() => handleAddCountry()}
                        //variant="contained"
                        variant="outlined"
                        size="small"
                        sx={{  
                            mr:1,                  
                            color: 'white',                            
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '14px',
                            '&:hover': {                       
                                transition: 'all 400ms',
                                backgroundColor: '#00809b',
                            },
                        }}
                    >
                         <img         
                            alt="Remy Sharp"
                            src={investors}
                            style={{ width: 26, height: 26 }}
                        />
                    </Button>
                    <Button  
                        //onClick={() => handleAddCountry()}
                        
                        variant="outlined"
                        size="small"
                        sx={{  
                            mr:1,                  
                            color: 'black',                           
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '14px',
                            '&:hover': {                       
                                transition: 'all 400ms',
                                backgroundColor: '#00809b',
                                color: 'white',
                            },
                        }}
                    >
                     <People />
                    </Button>
                     <Button  
                        onClick={() => handleAddCountry()}                                    
                        sx={{  
                            mr:1,                  
                            color: 'white',
                            backgroundColor: '#00809b',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '14px',
                            '&:hover': {                       
                                transition: 'all 400ms',
                                color: '#00809b',
                            },
                        }}
                    >
                    <Add />
                    </Button>
                </Box>                   
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
                            NOME
                        </TableCell>
                        
                        <TableCell                       
                            align={'center'}
                            style={{ minWidth: 150 }}
                        >
                            SOBRENOME
                        </TableCell>
                        
                        <TableCell                       
                            align={'center'}
                            style={{ minWidth: 150 }}
                        >
                            EMAIL
                        </TableCell>
                        
                         <TableCell                       
                            align={'center'}
                            style={{ minWidth: 150 }}
                        >
                            TEL
                        </TableCell>
                        
                        <TableCell                       
                            align={'center'}
                            style={{ minWidth: 150 }}
                        >
                            TIPO USUARIO
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
                                {row.lastname}
                            </TableCell>
                            
                            <TableCell align={'center'}>
                                {row.email}
                            </TableCell>
                            
                            <TableCell align={'center'}>
                                {row.cell}
                            </TableCell>
                            
                            <TableCell align={'center'}>
                                {row.tipoUser}
                            </TableCell>
                                
                            <TableCell align={'center'}>
                                <IconButton 
                                    onClick={() =>  handleOpenInfo(`${row.name} ${row.lastname}`)} 
                                    size="small" 
                                    aria-label="show 4 new mails"                                     
                                >
                                    <Info sx={{  color: '#00809b', fontSize: '20px'}} />
                                </IconButton>
                               <IconButton 
                                    onClick={() =>  handleEditarCountry(row)} 
                                    size="small" 
                                    aria-label="show 4 new mails" 
                                   
                                >
                                    <Edit sx={{  color: '#00809b', fontSize: '20px'}} />
                                </IconButton>
                                <IconButton 
                                    onClick={() => handleApagarCountry(row)}
                                    size="small" 
                                    aria-label="show 4 new mails" 
                                    color="inherit"
                                >
                                    <Delete sx={{fontSize: '20px'}} color="error"/>
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
    )
}

export default User;