import { Box, Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';

const currencies = [
  {
    id: 1, 
    value: 'BTC',
    label: '$',
    descricao: 'BITCOIN',
    logo: 'BitcoinBTC.png',
    rede: 1,
  },
  {
    id: 2,
    value: 'ETH',
    label: '€',
    descricao: 'ETHEREUM',
    logo: 'EthereunETH.png',
    rede: 2,
  },
  {
    id: 3,
    value: 'ADA',
    label: '฿',
    descricao: 'CARDANO',
    logo: 'cardanoADA.png',
    rede: 3,
  },
];

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Simular() {

  //const [acronimo, setAcronimo] = React.useState('');
  
  // eslint-disable-next-line no-unused-vars
  const [simulacao, setSimulacao]=React.useState({acronimo:'BTC', lucro_s: 0.00023, lucro_d: 0.000000023, lucro_t: 0.000000023});
	const handleChannge =(e)=>{
		setMoeda({...moeda,[e.target.name]: e.target.value})
  };
  const [id, setId] = React.useState(0);
  const [moeda, setMoeda]=React.useState({id: id, acronimo:'BTC', valor: '1320'});
  /*const [logo, setLogo] = React.useState();
  const [acronimo, setAcronimo] = React.useState();
  const [id, setId] = React.useState();
  const obterMoeda = (event) => {
    setAcronimo({
      ...acronimo,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };*/

  return (
    <Box
      className="about"
      style={{      
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        flexDirection: 'column',
      }}
    >
      <div className="headerContainer" style={{ width: 'auto', marginLeft: '30px' }}>
        <Typography
          component="div"
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '30px',
            color: 'black',
            fontFamily: 'Roboto, sans-serif',
            '@media (max-width: 600px)': { fontSize: '20px' },
          }}
        >
          SIMULAR INVESTIMENTO
        </Typography>
        <form style={{maxWidth: '95%'}}>        
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="left" spacing={0.5}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{mr: 1}}
                    id="outlined-select-currency"
                    select
                    label="Moedas"                
                    helperText="Please select your currency"
                    onChange={(e) => { setId(e.target.value); } }
                  >
                    {currencies.map((option) => (
                          <MenuItem              
                              key={option.id} value={option.id}                             
                          >   
                              <img                  
                                src={new URL(`../images/cryptoMoedas/${option.logo}`, import.meta.url)}
                                width={25}
                                height={25}
                                style={{ justifyItems: 'center' }}
                              />                     
                            <Typography 
                                sx={{ 
                                  ml: 1,                                 
                                  fontWeight: 'bold',
                                  fontSize: '15px',                    
                                  fontFamily: 'Roboto, sans-serif',
                                  alignItems: 'center',                                  
                              }}>
                                
                             {option.value}
                              </Typography>          
                            
                          </MenuItem>
                        ))}
                  </TextField>              
                </Grid>  
                <Grid item xs={6}>
                  <TextField     
                    fullWidth 
                    label="VALOR A INVESTIR"
                    value={moeda.valor}
                    onChange={handleChannge}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    
                    sx={{
                      ml: 1,
                      mr: 1,              
                      fontSize: '20px',
                      color: 'black',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                    InputProps={{
                      inputComponent: NumericFormatCustom,
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                <Button
                  type="submit"
                  sx={{
                        mb: 1,
                        ml: 1,
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',                  
                        textDecoration: 'none',
                        fontSize: '15px',
                        fontFamily: 'Roboto, sans-serif',
                        backgroundColor: '#00809b',
                        '&:hover': {
                          color: '#013039',
                          cursor: 'pointer',
                          transition: '0.3s ease-in',
                        },
                      }}
                    >
                      Simular
                    </Button>
                </Grid>

              </Grid>
            </Grid>           
          </Grid>
        </form>
        <Box 
          sx={{
            bgcolor: '#76CAC1',           
            borderRadius: '10px 10px 10px 10px',          
            border: '1px solid #00809b',    
            maxWidth: '95%',
           
          }}
        >
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Paper
                    elevation={0}  
                    sx={{                  
                        width: '200px',
                        height: '50px',                        
                        bgcolor:'rgba(76, 175, 80, 0)',
                        mb: 1,
                        ml: 2,
                      }}
                  >
                    <Box
                      sx={{ 
                        mt: 1,
                        color: 'black',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        justifyItems: 'center',
                      }}
                    >

                      <Typography
                        variant="caption"
                        sx={{  
                          fontWeight: 'bold',
                          fontFamily: 'Roboto, sans-serif',
                          fontSize: '.8rem',               
                        }}
                      >
                        Por Segundo:
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{                  
                          fontWeight: 'bold',
                          fontFamily: 'Roboto, sans-serif',
                          fontSize: '1.5rem',              
                        }}
                      >
                        $ {simulacao.lucro_s}
                        {simulacao.acronimo}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>

                <Grid item>
                    <Paper
                  elevation={0}
                  sx={{                  
                      width: '200px',
                      height: '50px',
                      bgcolor:'rgba(76, 175, 80, 0)',
                      mb: 1,
                      ml: 2,
                    }}
                  >
                  <Box
                    sx={{  
                      mt: 1,
                      display: 'flex',              
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{   
                        fontWeight: 'bold',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '.8rem',               
                      }}
                    >
                      Por dia:
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{               
                        fontWeight: 'bold',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1.5rem',
                        
                      }}
                    >
                      $ {simulacao.lucro_s}
                      {simulacao.acronimo}
                    </Typography>
                  </Box>
                </Paper>
                </Grid>

                <Grid item>
                  <Paper
                    elevation={0}
                    sx={{                          
                        width: '200px',
                        height: '50px',
                        bgcolor:'rgba(76, 175, 80, 0)',
                        mb: 2,
                        ml: 2,
                      }}
                  >
                    <Box
                      sx={{
                      mt: 1,
                      color: 'black',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{   
                        fontWeight: 'bold',
                      fontFamily: 'Roboto, sans-serif',
                        fontSize: '.8rem',
                      }}
                    >
                      Lucro Total:
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{                
                        fontWeight: 'bold',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1.5rem',
                        
                      }}
                    >
                      $ {simulacao.lucro_s}
                      {simulacao.acronimo}
                    </Typography>
                  </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
}

export default Simular;
