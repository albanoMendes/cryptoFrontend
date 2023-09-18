import { List, Typography } from "@mui/material"
import Message from "../Message"
import { useState } from "react"

//import React from 'react'
const mesg = [
    {
        id: 1,
        nome: "MARIA ANDRÉ",
        email: "mariaandre23@gmail.com",
        assunto: "Mineração De Moeda",
        conteudo: "A mineração das minhas moedas esta demorando mais que o normal, gostaria de saber o motivo!",
        idUser: 1
    },
    {
        id: 2,
        nome: "PAULINO TEUDORO",
        email: "paulinoteo3@gmail.com",
        assunto: "Saque do Investimento",
        conteudo: "Estou esperando o saque do meu investimento, e até agora não recebo o dinheiro, gostaria de saber o motivo!",
        idUser: 2
    },
    {
        id: 3,
        nome: "PEDRO MILONGA",
        email: "pedromilonga34@gmail.com",
        assunto: "Problemas ao Investir",
        conteudo: "Estou tentando investir mais recebo a notificação de valor abaixo do exigido, gostaria de saber o motivo!",
        idUser: 3
    },
    {
        id: 2,
        nome: "PAULINO TEUDORO",
        email: "paulinoteo3@gmail.com",
        assunto: "Investimento Pedente",
        conteudo: "Estou esperando o saque do meu investimento, e até agora não recebo o dinheiro, gostaria de saber o motivo!",
        idUser: 2
    },
    
]
function Notifications({user}) {
    const [messages, setMensages] = useState(mesg)
    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'white' }}>
                {messages.length == 0 ? <Typography>Não tem Mensagem para você</Typography> :
                    messages.map(message =>
                        <Message key={message.id} message={message} />
                    )        
                }
            </List>
        </>
    )
}

export default Notifications