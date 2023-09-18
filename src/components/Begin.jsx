import { Avatar, Box, Button } from '@mui/material';
import Bitcoins from '../images/criptoCurrency.png';
//import Cripto02 from '../images/crypto02.png';
import Carrousel from './Carrousel';
//import cripto from '../images/cripto.png';
// eslint-disable-next-line react/prop-types, no-unused-vars
function Begin({ setOpenModel, setTab, setTitle }) {

  const slides = [
    { url: 'Dollar.jpeg', title: 'dolar', descrisao: 'As nossas trasições são feitas a dolar, mas o investimento é feita na moeda do seu pais.' },
    { url: 'Trocavalores.jpeg', title: 'trocavalores', descrisao: 'As nossas trasições são feitas a dolar, mas o investimento é feita na moeda do seu pais.' },
    { url: 'Metical.jpeg', title: 'metical', descrisao: 'As nossas trasições são feitas a dolar, mas o investimento é feita na moeda do seu pais.' },
     { url: 'Kwanza.jpeg', title: 'kwanza', descrisao: 'As nossas trasições são feitas a dolar, mas o investimento é feita na moeda do seu pais.' }
  ]

  return (
    <Box
      className="begin"
      sx={{        
        display: 'flex', 
        justifyContent: 'center', 
        mr: 1,    
        mb: 1,
      }}
    >
      <Box sx={{ m: 'auto' }}>
        <Box sx={{ height: 180, margin: '0 auto', display: { xs: 'flex', md: 'none', },  justifyContent: 'center',
              alignItems: 'center', }}>
          <Carrousel slides={slides} />
        </Box>
        <Box sx={{ml: 2, mr: 1, mt: 1}}>
          <h1
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '50px',            
              color: 'black',
              fontFamily: 'Roboto, sans-serif',
              
            }}
          >
            Somos a Open Next Coin  Investments
          </h1>
          <p
            style={{
              marginTop: '5px',
              padding: 0,
              fontSize: '20px',
              color: 'black',
              fontFamily: 'Roboto, sans-serif',
              
            }}
          >
            Um consorcio empresarial, com vínculos sólidos com empresas publicas e privadas de prestação
            de serviços variados com conexão pelo mundo inteiro, no qual obtem-se redimentos brutos.
          </p>
          <Button
            onClick={() => { setTab(1), setOpenModel(true), setTitle('Criar Conta') }}
            sx={{
              color: 'white',
              marginTop: '10px',
              border: 'none',
              cursor: 'pointer',
              height: '50px',
              width: '180px',
              textDecoration: 'none',
              fontSize: '15px',
              fontFamily: 'Roboto, sans-serif',
              backgroundColor: '#00809b',
              '&:hover': {
                color: '#013039',
                cursor: 'pointer',
                transition: '0.3s ease-in',
              },
              '@media (max-width: 900px)': { fontSize: '10px', height: '40px', width: '155px' },
              '@media (max-width: 600px)': { fontSize: '8px', height: '35px', width: '165px' },
            }}
          >
            INVESTIR AGORA
          </Button>
        </Box>    
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Avatar
          alt="Remy Sharp"
          src={Bitcoins}
          sx={{ width: 500, height: 500 }}
        />
      </Box>
    </Box>
  );
}

export default Begin;
