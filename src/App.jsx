import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashboardADM from './pages/DashboardADM';
import DashboardClient from './pages/DashboardClient';
import DashboardSup from './pages/DashboardSup';
import Home from './pages/Home';
import { IconButton } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    id: 0,
    name: '',
    lastname: '',
    img: '',
    typeUser: '',
    email: '',
    phone: '',
    idCountry: 0
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setUser={setUser}  />} />
          <Route path="/adm/:id" element={<DashboardADM userLogin={user} setUserLogin={setUser} />} />
          <Route path="/client/:id" element={<DashboardClient userLogin={user} setUserLogin={setUser}/>} />
          <Route path="/supervisor/:id" element={<DashboardSup userLogin={user} setUserLogin={setUser}/>} />
        </Routes>   
        <IconButton
          variant="contained"
          sx={{
            position: 'sticky',
            bottom: 16,
            right: 16,
            float: 'right',
            color: 'white',
            bgcolor: 'green',
            height: 50,
            width: 50,
            '&:hover': {                       
                transition: 'all 400ms',
                backgroundColor: '#0DB325',
            },
          }}>
          <WhatsApp />
        </IconButton>        
      </BrowserRouter> 
    </div>
  );
}

export default App;
