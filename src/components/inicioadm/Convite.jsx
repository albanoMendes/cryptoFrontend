import { Close } from "@mui/icons-material"
import {  Divider, IconButton, ListItem, ListItemText, Typography } from "@mui/material"
import React from "react"

// eslint-disable-next-line react/prop-types
function Convite({convit}) {
    return (
        <>
            <ListItem
                alignItems="flex-start"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start', 
                    alignItems: "flex-start",
                }}
            >                
                <ListItemText
                    primary={convit.user}
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`Enviou convite para o ${convit.email}`}
                        </Typography>                        
                            <p>{ convit.data }</p>
                        </React.Fragment>
                    }
                />
                <IconButton>
                    <Close sx={{fontSize: '20px', color: 'red'}}  />
                </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default Convite