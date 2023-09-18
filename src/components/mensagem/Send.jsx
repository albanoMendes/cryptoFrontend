import {useState} from 'react';
import {Paper, Button, Typography, TextField} from '@mui/material';
import axios from 'axios';
    
// eslint-disable-next-line react/prop-types
function Send({message, setOpenModel, setMessages}){

    const paperStyle ={
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '10px 10px',
                     };

    const btnstyle = {margin:'8px 0'};
    
    //console.log(message.id);
    const [messaged, setMessaged]=useState({
                                    id: ''+message.id,
                                    assunto: 'OPEN NEXT RESPOSTA',
                                    nome: message.nome,
                                    conteudo:'Olá sr.'+message.nome+'\n\n\n',
                                    email: ''+message.email
                                });
    const handleChannge =(e)=>{
        setMessaged({...messaged,[e.target.name]: e.target.value})
    };
    const submitForm = (e)=>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("id", messaged.id);
        formData.append("assunto", messaged.assunto);
        formData.append("nome", messaged.nome);
        formData.append("conteudo", messaged.conteudo);        
        formData.append("email", messaged.email);        
        
        axios({
             method: 'POST',
             url: 'http://localhost:8080/ombala-blog/src/api/messags/send.php',
             data: formData,
             config: { headers: {'Content-Type': 'multipart/form-data' }}
        })      
        .then((response)=> {
            //handle success
            console.log(response.data);
            if(response.status === 200){
                setMessages(response.data);
                setOpenModel(false);
                alert('Mensagem enviada com sucesso!');
            }else{
                setOpenModel(false);
                alert('[Erro] Não foi possível enviar essa mensagem');
                //console.log(response.data.id_get)
            }
        })
        .catch(function (response) {
            console.log(response)
            //alert(response);
        });
    
    };
    return(
        <form>
            <Paper elevation={0} style={paperStyle}>
                 <Typography variant="h5" sx={{marginButtom: 2}} gutterBottom>
                    {messaged.assunto}
                  </Typography>
                   <Typography variant="body2" sx={{marginButtom: 2}} gutterBottom>
                       {messaged.nome}
                   </Typography>
                    <TextField 
                        variant="outlined"
                        label="Conteudo" 
                        type="text" 
                        name="conteudo"
                        sx={{padding: '2px 2px'}}
                        multiline
                        rows={10}
                        onChange={handleChannge}
                        value={messaged.conteudo} 
                        fullWidth 
                        required
                    />
               
                <Button 
                    type="submit"                   
                    onClick={submitForm}
                    sx={{
                        margin: '8px 0',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        height: '50px',
                        textDecoration: 'none',
                        fontSize: '15px',
                        backgroundColor: '#00809b',
                        '&:hover': {
                        color: '#013039',
                        cursor: 'pointer',
                        transition: '0.3s ease-in',
                        },
                    }}			                        
                    fullWidth
                > 
                    Enviar
                </Button>
            </Paper>
        </form>
    )
}

export default Send;