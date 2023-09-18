//import React from 'react';

import { List, Typography } from "@mui/material";
import { useState } from "react";
import BoxNot from "./BoxNot";

const nots = [
    {
        id: 1,
        title: 'Lucra fazendo convite',
        coteudo: 'A cada convite vc recebe 0.05 do valor investido, não perca a oportunidade de fazer crescer o teu lucro',
        data: '10/07/2023 10:50'
    },
    {
        id: 2,
        title: 'Criptomoedas nova na plataforma',
        coteudo: 'Brevemente vamos disponibilizar novas criptomedas que estão em alta no mercado de criptomoedas, fique atento e seja o primeiro a investir',
        data: '10/07/2023 10:50'
    },
    {
        id: 3,
        title: 'Lucra fazendo convite',
        coteudo: 'A cada convite vc recebe 0.05 do valor investido, não perca a oportunidade de fazer crescer o teu lucro',
        data: '10/07/2023 10:50'
    },
    {
        id: 4,
        title: 'Criptomoedas nova na plataforma',
        coteudo: 'Brevemente vamos disponibilizar novas criptomedas que estão em alta no mercado de criptomoedas, fique atento e seja o primeiro a investir',
        data: '10/07/2023 10:50'
    },
]

function Notificacao() {

    const [notificacao, setNotificacao] = useState(nots)

    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'white' }}>
                {notificacao.length == 0 ? <Typography>Não há anúncios</Typography> :
                    notificacao.map(anuncio =>
                        <BoxNot key={anuncio.id} notificacao={anuncio} />
                    )        
                }
            </List>
        </>
    );
}

export default Notificacao;
