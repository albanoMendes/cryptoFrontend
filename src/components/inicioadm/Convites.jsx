//import * as React from 'react';
import List from '@mui/material/List';
import Convite from './Convite';

// eslint-disable-next-line no-unused-vars
const convites = [
    { id: 1, user: 'ANA AUGUSTO', foto: 'client01.png', email: 'gustavoPaul09@gmail.com', data: '10:30 10/04/2023' },
    { id: 2, user: 'MILENA ADRIANO', foto: 'client02.png', email: 'adrianombmblo22@gmail.com', data: '20:30 10/07/2023' },
    { id: 3, user: 'ANDRÉ MIRANDA', foto: 'client03.png', email: 'miltondarios2@gmail.com', data: '12:30 10/04/2022' },
    { id: 4, user: 'PEDRO CABRAL', foto: 'client04.png', email: 'robertocabral01@gmail.com', data: '10:30 10/04/2023' },
];

export default function Convites() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>

      {
        convites.map(convit =>
          <Convite key={convit.id} convit={convit} />
        )        
      }
    </List>
  );
}
