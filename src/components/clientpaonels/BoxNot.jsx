import { Divider, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

function BoxNot({notificacao}) {
  return (
    <>
        <ListItem alignItems="flex-start">            
            <ListItemText
              primary={notificacao.title}
              secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {notificacao.data} <br/>
                </Typography>
                {notificacao.coteudo}
                </React.Fragment>
            }
            />
      </ListItem>
      <Divider variant="inset" component="li" />      
    </>
  );
}

export default BoxNot;
