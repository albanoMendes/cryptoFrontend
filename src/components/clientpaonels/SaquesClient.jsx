import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#00809b"
        },
    }
});

function createData(id, valor, moeda, logo, acronimo, data) { 
  return { id, valor, moeda, logo, acronimo, data };
}

const rows = [
  createData(1, 2492, 'BITCOIN', 'BitcoinBTC.png', 'BTC', '10 de julho de 2023'),
  createData(2, 1292, 'BITCOIN', 'BitcoinBTC.png', 'BTC', '05 de junho de 2023'),
  createData(3, 1492, 'BITCOIN', 'BitcoinBTC.png', 'BTC', '10 de Agosto de 2023'),
  createData(4, 12892, 'KWANZA', 'kwanza.png', 'KZ', '08 de Agosto de 2023'),
  createData(5, 10000, 'KWANZA', 'kwanza.png', 'KZ', '21 de Setembro de 2023'),
  createData(6, 12892, 'ETHEREUN', 'EthereunETH.png', 'ETH', '11 de Agosto de 2023'),
  createData(7, 12892, 'ETHEREUN', 'EthereunETH.png', 'ETH', '11 de Setembro de 2023'),
  createData(8, 10892, 'ETHEREUN', 'EthereunETH.png', 'ETH', '10 de Março de 2023'),
  createData(9, 1292, 'ETHEREUN', 'EthereunETH.png', 'ETH', '15 de Agosto de 2023'),
  createData(10, 12292, 'CARDANO', 'cardanoADA.png', 'ADA', '05 de Agosto de 2023'),
  createData(11, 12292, 'CARDANO', 'cardanoADA.png', 'ADA', '05 de Setembro de 2023'),
  createData(14, 1292, 'CARDANO', 'cardanoADA.png', 'ADA', '25 de Agosto de 2023'),
];


function SaquesClient({ user, setText, total, setTotal }) {
 
  const classes = useStyles()
  const [saques, setSaques] = useState(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    let tot = 0;
    setText('Total Saques')
    saques.map(deposito => (
      tot += deposito.valor
    ))
    setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
  // eslint-disable-next-line no-undef
  }, [])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">         
            <TableHead >
              <TableRow  className={classes.root}>
                <TableCell                       
                      align={'left'}
                      style={{ minWidth: 170  }}
                  >
                      VALOR
                  </TableCell>
                  
                  <TableCell                       
                      align={'center'}
                      style={{  minWidth: 170  }}
                  >
                      CRIPTOMOEDA
                  </TableCell>
                  
                  <TableCell                       
                      align={'right'}
                      style={{  minWidth: 170  }}
                  >
                      DATA
                  </TableCell>
              </TableRow>  
              </TableHead>        
          <TableBody>
            {saques
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                     <TableCell align={'left'}>
                        <div
                          style={{                        
                              display: 'flex',
                              alignItems: 'center',
                          }}
                        >
                        <ArrowDownward sx={{  color: 'red', fontWeight: 'bold', fontSize: '.9rem', '@media (max-width: 800px)': { fontSize: '.6rem' }, }} />
                         <Typography 
                            sx={{
                                ml: .5,                                          
                                fontSize: '14px',                                
                                fontFamily: 'Roboto, sans-serif',                               
                                '@media (max-width: 800px)': { fontSize: '.6rem' },

                            }}
                        >
                         {row.valor.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                        </Typography>   
                    </div>
                    </TableCell> 
                    <TableCell align={'center'}>
                        <div
                            style={{                        
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img                  
                                src={new URL(`../../images/cryptoMoedas/${row.logo}`, import.meta.url)}
                                width={20}
                                height={20}
                            />
                            <Typography 
                                sx={{
                                    ml: .5,                                    
                                    fontSize: '12px',  
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto, sans-serif',
                                    '@media (max-width: 800px)': { fontSize: '.6rem' },
                                }}>
                                {row.moeda} {`(${row.acronimo})`}
                            </Typography>       
                        </div>
                    </TableCell> 
                    <TableCell align={'right'}>
                      <Typography 
                          sx={{
                            ml: .5,                                          
                            fontSize: '14px',                                
                            fontFamily: 'Roboto, sans-serif',                               
                            '@media (max-width: 800px)': { fontSize: '.6rem' },

                          }}
                        >
                         {row.data}
                        </Typography>  
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
  );
}

export default SaquesClient;
