import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';


// eslint-disable-next-line react/prop-types
export default function Niivel({ niveis, handleApagar,  handleEditar, acronimo}) {
  
  //const [niveis, setNiveis] = React.useState(rows)

  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table" size="small">        
        <TableHead>
          <TableRow>
            <TableCell align="left" >Intervalo de valores</TableCell>
            <TableCell align="left" >Redimento ao dia</TableCell>
            <TableCell align="center" >Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {niveis.map((row) => (
            <TableRow key={row.id}>             
              <TableCell align="left" >{acronimo} {row.min} - {acronimo} {row.max}</TableCell>
              <TableCell align="left" >{row.lucrod}% ao dia</TableCell>
              <TableCell align="center">
                  
                <IconButton
                    onClick={() => handleEditar(row)}
                    size="small" 
                    aria-label="show 4 new mails" 
                    color="inherit"
                >
                  <Edit sx={{ color: '#006478', fontSize: '20px'}} />
                </IconButton>

                <IconButton 
                    onClick={() => handleApagar(row)}
                    size="small" 
                    aria-label="show 4 new mails" 
                    color="inherit"
                  >
                      <Delete sx={{ color: '#910202', fontSize: '20px'}}/>
                  </IconButton>    

              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}