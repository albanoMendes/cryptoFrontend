import * as React from 'react';
//import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
//import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import  {Box, IconButton} from '@mui/material';
import { Close, Send} from '@mui/icons-material';
//import Send from './mensagem/Send';
import Deletar from './mensagem/Deletar';
import Model from './Model';
import MessageInOutContainer from './mensagem/MessageInOutContainer';

// eslint-disable-next-line react/prop-types
export default function Message({ message }) {
  
  const [openModel, setOpenModel] = React.useState(false);
  const [opcao, setOpcao] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [mensage, setMessages] = React.useState({
      // eslint-disable-next-line react/prop-types
      id: message.id,
      // eslint-disable-next-line react/prop-types
      nome: message.nome,
      // eslint-disable-next-line react/prop-types
      email: message.email,
      // eslint-disable-next-line react/prop-types
      assunto: message.assunto,
      // eslint-disable-next-line react/prop-types
      conteudo: message.conteudo,
      // eslint-disable-next-line react/prop-types
      idUser: message.idUser
  })
  // eslint-disable-next-line no-unused-vars
  const handleLerMessage = () => {
    setOpcao('Visibility');
    setTitle('Ler Mensagem');
    setOpenModel(true);
  };
  const handleSendMessage = () => {
    setOpcao('ForwardToInbox');
    setTitle('Responder Mensagem');
    setOpenModel(true);
  };
  const handleDeleteMessage = () => {
    setOpcao('Delete');
    setTitle('Apagar Mensagem');
    setOpenModel(true);
  };
  const getComponent = () =>{
    switch(opcao){
      case 'Visibility': 
        return <MessageInOutContainer tab={0} message={mensage} setClose={setOpenModel} setMessages={setMessages}/>;
      case 'ForwardToInbox': 
        return <MessageInOutContainer tab={1} message={mensage} setClose={setOpenModel} setMessages={setMessages}/>; 
      case 'Delete':
        return <Deletar message={mensage} setOpenModel={setOpenModel} setMessages={setMessages}/>; 
      default: 
        return null;
    }
  }
  return(
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
          primary={mensage.assunto}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {mensage.nome}
              </Typography>
              <p>{mensage.conteudo}</p>              
            </React.Fragment>
          }
        />
        <Box>
          <IconButton 
            onClick={handleSendMessage} 
            size="small" 
            aria-label="show 4 new mails" 
            color="inherit"
          >
              <Send sx={{fontSize: '20px', color: '#00809b'}} />
          </IconButton>
          <IconButton 
            onClick={handleDeleteMessage}
            size="small" 
            aria-label="show 4 new mails" 
            color="inherit"
          >
              <Close sx={{ fontSize: '20px', color: 'red'}} />
          </IconButton>
        </Box>
      </ListItem>
      <Divider variant="inset" component="li" />
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
