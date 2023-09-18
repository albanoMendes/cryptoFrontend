import * as React from 'react';
//import PropTypes from 'prop-types';
import { Box, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function createData(id, min, max, lucrod, idRedimento) {
  return { id, min, max, lucrod, idRedimento };
}

const rows = [
  createData(1, 15, 1999, 5.5, 1),
  createData(2, 2000, 5999, 8.0, 1),
  createData(3, 6000, 15999, 10.25, 1),
  createData(4, 16000, 100000, 15, 1),
  
];


export default function Nivel({ id, setNivel, acronimo}) {
    
    const [niveis, setNiveis] = React.useState(rows);

    const [selected, setSelected] = React.useState([]);

    const handleClick = (event, nivel) => {
        setNivel({
        id: nivel.id,
        min: nivel.min,
        max: nivel.max,
        lucrod: nivel.lucrod,
        idRedimento: nivel.idRedimento
        })
    };

    return (
         <Box sx={{ width: '100%' }}>
            <Paper elevation={0} sx={{ width: '100%', mb: 2 }}> 
            <FormControl fullWidth>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                //defaultValue="female"
                name="radio-buttons-group"
                onChange={(e) => {
                   console.log(e.target.value)
                }
              }
                sx={{ width: '100%' }}
            >        
                <TableContainer>
               <Table
                    sx={{ minWidth: 250 }}
                    aria-labelledby="tableTitle"
                    size={'small'}
                    
                >
                    <TableHead>
                       <TableRow>
                            <TableCell padding='checkbox'>                                 
                            </TableCell>
                            <TableCell  
                                padding="none"
                                sx={{  
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '.8rem', 
                                    '@media (max-width: 600px)': { fontSize: '.6rem' },
                                    '@media (max-width: 400px)': { fontSize: '.5rem' },
                                }}
                            >
                                Intervalo de valores
                            </TableCell>
                            <TableCell 
                                align="right"
                                sx={{  
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '.8rem', 
                                    '@media (max-width: 600px)': { fontSize: '.6rem' },
                                    '@media (max-width: 400px)': { fontSize: '.5rem' },
                                }}
                            >
                                Rendimento
                            </TableCell>    
                        </TableRow>
                    </TableHead>            
                    
                    <TableBody>
                    
                        {niveis.map((row) => {
                            

                            return (
                            <TableRow
                                hover                                
                                role="checkbox"                                
                                tabIndex={-1}
                                key={row.id}                                
                                sx={{ cursor: 'pointer' }}
                            >
                                <TableCell 
                                    onChange={(event) => handleClick(event, row)} 
                                    padding='checkbox'
                                    sx={{  
                                       
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '.8rem', 
                                        '@media (max-width: 800px)': { fontSize: '.5rem' },
                                    }}
                                >
                                    <FormControlLabel value={row.id} control={<Radio size="small" />} />
                                </TableCell>
                                <TableCell
                                    component="th"
                                    //id={labelId}
                                    scope="row"
                                    padding="none"
                                    sx={{  
                                        fontWeight: 'bold',
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '.8rem', 
                                        '@media (max-width: 600px)': { fontSize: '.6rem' },
                                        '@media (max-width: 400px)': { fontSize: '.5rem' },
                                    }}
                                   
                                >
                                        { acronimo} {row.min} - { acronimo} {row.max}
                                </TableCell>
                                <TableCell 
                                    align="right"
                                    sx={{  
                                        fontWeight: 'bold',
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '.8rem', 
                                        '@media (max-width: 600px)': { fontSize: '.6rem' },
                                        '@media (max-width: 400px)': { fontSize: '.5rem' },
                                    }}
                                >{row.lucrod} ao dia</TableCell>
                                
                            </TableRow>
                            );
                        })}
                    
                        </TableBody>
                    
                </Table>
                </TableContainer> 
                </RadioGroup>        
                </FormControl>        
            </Paper>
        
        </Box>  
    );
}
