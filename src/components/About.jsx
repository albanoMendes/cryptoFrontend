import { Avatar, Box, Typography } from '@mui/material';
import Bitcoins from '../images/about.png';

function About() {
  return (
    <Box
      sx={{  
        display: 'flex', 
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Box sx={{m: 'auto'}}>
        <Typography
        component={'div'}
        className="headerContainer"
        
        >
          <Typography
            component={'h1'}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '40px',
              pl: 1,
              mb: 1,
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            SOBRE NÓS
          </Typography>
          <Typography
            component={'div'}
            variant="caption"
            sx={{
              pl: 1,
              pr: 1,
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '.8rem',
            
            }}
          >
            A nossa direção os nossos operadores rôbos, garantem operações quase infalível que
            sustentam esta rede de investimentos. È nossa garantia absoluta, dos investimentos até
            100% em poucas horas. A OpeNext está também relacionada a grande de investimentos
            rentavéis em várias áreas há já algum tempo.
          
            Temos conventos com instituições africanas e europeias, que garantam sustentabilidade ao
            investimento a longo prazo. É nossa preocupação, a criação de investimentos sólidos para
            todos na certeza de que ganhamos todos ficarmos satisfeitos. Com um prazo de até 120 dias,
            nós garatimos sustentabilidade e segurança. Trabalhe conosco sem sair de casa.
          </Typography>

          <Typography
            component={'h1'}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '25px',
              pl: 1,
              mt: 1,
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            Seja Benvindo a Open Next
          </Typography>
        </Typography>
      </Box>
      <Box  sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Avatar
          alt="Remy Sharp"
          src={Bitcoins}
          sx={{ width: 350, height: 350 }}
        />
      </Box>
      
    </Box>
  );
}

export default About;
