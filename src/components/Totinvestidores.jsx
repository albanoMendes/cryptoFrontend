//import { Add } from "@mui/icons-material"
import { Avatar, Paper, Typography } from "@mui/material"
import investidores from '../images/Investidores.png';

function Totinvestidores() {
  return (
        <Paper
        
            sx={{
                textAlign: 'center',
                mt: 1,
            }}
            elevation={1}
        >
          <Avatar                
                alt="Remy Sharp"
                src={investidores}
                sx={{ width: 100, height: 100, m: 'auto' }}
            />
 
            <Typography
              variant="caption"
              sx={{
                pl: 1,
                pr: 1,
                fontWeight: 'bold',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '.6rem',
              }}
            >
             TOTAL DE INVESTIDORES
          </Typography>
          <Typography
                variant="h1"
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',           
                  
                  fontSize: '1.2rem',
                  color: 'black',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                2403
              </Typography>
        </Paper>
  )
}

export default Totinvestidores