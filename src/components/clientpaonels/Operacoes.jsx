import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import SaquesClient from './SaquesClient';
import DepositoClient from './DepositoClient';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Operacoes({user}) {

    const [total, setTotal] = useState(82);    
    const [showPassword, setShowPassword] = useState(false);
    const [text, setText] = useState('Total de Saque');

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Paper 
                elevation={0}
                    sx={{  
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                <div>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '25px',                   
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 800px)': { fontSize: '15px' },
                        }}
                    >
                        MINHAS OPERAÇÕES
                    </Typography>
                    <Typography
                            sx={{                    
                                fontSize: '15px',                                       
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 800px)': { fontSize: '10px' },
                            }}
                        >
                        Consulte os saques e os Dépositos realizados
                    </Typography>     
                </div>
                <Box
                    sx={{
                        p: 1,
                        //bgcolor: '#F2F2F2',
                        mb: 1,
                        minWidth: 200,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,

                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',               
                            fontSize: '12px',
                            pl: 1,
                            pt: 1,
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 800px)': { fontSize: '8px' },
                        }}
                    >
                        {text}
                    </Typography>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography
                                sx={{
                                    pl: 1,
                                    fontWeight: 'bold',
                                    fontSize: '20px',                                
                                    
                                    '@media (max-width: 800px)': { fontSize: '15px' },
                                }}
                            >
                                {showPassword ? `${total.toLocaleString("en-US", {style:"currency", currency:"USD"})}`: '****'}
                            </Typography>
                            <IconButton
                                size="small"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}                           
                                >
                                {showPassword ? <VisibilityOff sx={{ color: 'black', fontSize: '20px'}} /> : <Visibility  sx={{ color: 'black', fontSize: '20px'}} />}
                            </IconButton>
                        </div>              
                </Box>
            </Paper>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#00809b",
                                color: "#00809b"
                            }
                        }}
                    >
                    <Tab label={
                        <Typography
                            sx={{
                                fontWeight: 'bold',               
                                fontSize: '13px',                                                               
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 800px)': { fontSize: '8px' },
                            }}
                        >Saques</Typography>
                    } {...a11yProps(0)} />
                    <Tab label={
                        <Typography
                            sx={{
                                fontWeight: 'bold',               
                                fontSize: '13px',                                                               
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 800px)': { fontSize: '8px' },
                            }}
                        >Depósitos</Typography>
                    }  {...a11yProps(1)} />                    
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <SaquesClient user={ user } setText={setText} total={total} setTotal={setTotal} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <DepositoClient user={user} setText={ setText } total={total} setTotal={setTotal} />
                </CustomTabPanel>
            </Box>
        
        </>
    );
}

export default Operacoes;
