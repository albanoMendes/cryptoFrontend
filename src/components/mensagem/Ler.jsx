import React  from 'react';
import  {Box, IconButton,Typography, Link } from '@mui/material';
import {ForwardToInbox} from '@mui/icons-material';

function Ler({handleChange, message}){

    return(
        <Box>
             <Typography variant="h6" sx={{margin: 2}} gutterBottom>
                {message.assunto}
              </Typography>
              <Typography variant="subtitle1" sx={{margin: 2}} gutterBottom>
                {message.nome}
              </Typography>
              <Typography variant="body2" gutterBottom sx={{margin: 1.5}}>
                {message.conteudo}
              </Typography>
              <Typography variant="caption" display="block" sx={{margin: 2}} gutterBottom>
                {message.data}
              </Typography>
              <div>
                <IconButton 
                    size="small" 
                    aria-label="show 4 new mails" 
                    color="inherit"
                  >
                    <Link href="#" underline="none" onClick={()=>handleChange("event", 1)}>
                        <ForwardToInbox />
                    </Link>
                  </IconButton>
              </div>
        </Box>
    )
}

export default Ler;