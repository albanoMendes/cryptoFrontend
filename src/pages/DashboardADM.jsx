import { useTheme } from '@mui/material/styles'
import { makeStyles } from "@mui/styles";
import {useNavigate, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
//import axios from 'axios';
import { CurrencyBitcoin,  Groups, Home,  Logout, QueryStats, Language, AccountBalance, FacebookOutlined, Twitter, Instagram, LinkedIn, DownloadForOffline, PointOfSale } from "@mui/icons-material";
import { AppBar, Avatar, Box,  Button,  IconButton, Menu, MenuItem,  Stack, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from 'react';
import Countres from '../components/country/Countres';
import Currencies from '../components/currency/Currencies';
import HomeAdm from '../components/inicioadm/HomeAdm';
import User from '../components/users/User';
import Crypto from '../components/criptomoeda/Crypto';
import Redimento from '../components/redimento/Redimento';
import Investment from '../components/users/Investment';
import Saque from '../components/users/Saque';


const useStyles = makeStyles(() =>({
   container:{
        color:useTheme().palette.primary.main,
        height: "90%",
        width: "100%",
        paddingTop: useTheme().spacing(2),
        backgroundColor: "white",
        [useTheme().breakpoints.up("sm")]:{
            backgroundColor:'white',
            color:"#555",
            border:"1px solid #efefe",
        }
    },
    icon:{
        margin: useTheme().spacing(1),
        [useTheme().breakpoints.up("sm")]:{
          fontSize: "18px",         
        }
    },
    item:{
        display:'flex',
        alignItems:"center",
        marginBottom: useTheme().spacing(2),
        [useTheme().breakpoints.up("sm")]:{
            marginBottom:useTheme().spacing(3),
            cursor: "pointer",
        }
    },
    text:{
        fontWeight: 600,
         [useTheme().breakpoints.down("sm")]:{
            display: "none",
        }
    },
  body: {
        marginTop: 0,
        height: '70vh',
    }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// eslint-disable-next-line react/prop-types
function DashboardADM({userLogin, setUserLogin}) {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const id = useParams();
  let navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  /*const [user, setUser] = useState({
        id: 0,
        nome: '',
        email: '',
        tipoUser: '',
        name_foto: ''
  });*/
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUserLogin({
      id: 0,
      name: '',
      lastname: '',
      img: '',
      typeUser: '',
      email: '',
      phone: '',
      idCountry: 0
    });
    navigate('/');
  }
  /*
  useEffect(() => {
      axios({
          method: 'GET',
          url: 'http://localhost:8080/ombala-blog/src/api/usuarios/getUser.php',
          params: {
              _id: id.id,
          },
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          //console.log(response.data.foto)
          setUser({
              id: response.data.id,
              nome: response.data.nome,
              email: response.data.email,
              tpoUser: response.data.typeUser,
              name_foto: response.data.img,
          });
          //setF_user(require(`../imagens/usuarios/${response.data.foto}`))
          /*setFoto({
              id: response.data.id,
              imag:require(`../imagens/usuarios/${response.data.foto}`)
          });
          
      })
      .catch(function () {
      });
    }, [id]);*/

  return (
    <>
      <AppBar elevation={1} position="sticky" sx={{ mb: -1, bgcolor: '#00809b' }}>
        <Toolbar>          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PAINEL ADMINISTRADOR
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ p: 0, border: '1px solid black' }}
              >
                <Avatar alt="Remy Sharp" src={new URL(`../images/usuarios/${userLogin.img}`, import.meta.url)} />
            </IconButton>  
             <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Editar Perfil</MenuItem>
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      <div className={classes.body}>
        <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="space-between"
            height="100vh"
        >
            <Box 
                flex={2}
                className={classes.container}>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"  
                    aria-label="Vertical tabs example"
                  >
                <Tab 
                    icon={<Home className={classes.icon}/>} 
                    iconPosition="start" 
                    label={
                        <Typography className={classes.text}>
                            INICIO
                        </Typography>
                    } 
                    {...a11yProps(0)} 
                    className={classes.item}
                />
                <Tab
                    icon={<Groups className={classes.icon}/>} 
                    iconPosition="start" 
                    label={
                        <Typography className={classes.text}>
                            USUARIOS
                        </Typography>
                    } {...a11yProps(1)} className={classes.item}

                />
                <Tab
                    icon={<CurrencyBitcoin className={classes.icon}/>} 
                    iconPosition="start" 
                    label={
                        <Typography className={classes.text}>
                            CRYPTOMOEDAS
                        </Typography>
                    } {...a11yProps(1)} className={classes.item}

              />
              <Tab
                    icon={<PointOfSale className={classes.icon}/>} 
                    iconPosition="start" 
                    label={
                        <Typography className={classes.text}>
                            RENDIMENTOS
                        </Typography>
                    } {...a11yProps(1)} className={classes.item}

                />
                <Tab
                    icon={<QueryStats className={classes.icon}/>} 
                    iconPosition="start" 
                    label={
                        <Typography className={classes.text}>
                            INVESTIMENTOS
                        </Typography>
                    } {...a11yProps(1)} className={classes.item}

              />
              
              <Tab
                    icon={<DownloadForOffline className={classes.icon}/>} 
                    iconPosition="start" 
                    label={
                        <Typography className={classes.text}>
                            SAQUES
                        </Typography>
                    } {...a11yProps(1)} className={classes.item}

                />
                
                <Tab
                    icon={<Language className={classes.icon}/>} 
                    iconPosition="start" 
                    label={
                        <Typography className={classes.text}>
                            PAÍSES
                        </Typography>
                    } {...a11yProps(1)} className={classes.item}

                />                      
                <div className={classes.item}>
                    <Logout  onClick={() => handleLogout()} className={classes.icon}/>
                    <Button 
                      sx={{ color: 'red' }} 
                      variant="text"
                      onClick={() => handleLogout()}
                    >
                      <Typography className={classes.text}>                      
                          SAIR
                      </Typography>
                    </Button>
                </div>
                </Tabs>
            </Box>
            <Box 
                flex={12}
                p={1}
                component="main" 
                sx={{position: 'relative', maxHeight: '100vh', overflowY: 'auto'}}
            >
                <TabPanel value={value} index={0}>
                    <HomeAdm />
                </TabPanel>
              <TabPanel value={value} index={1}>
                  <User />
              </TabPanel>
              <TabPanel value={value} index={2}>
                  <Crypto />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Redimento />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Investment />
              </TabPanel>
             <TabPanel value={value} index={5}>
                <Saque />
              </TabPanel>
              <TabPanel value={value} index={6}>
                  <Countres />                  
              </TabPanel>            
            </Box>
        </Stack>
      </div>
      <Box
        sx={{
          paddingTop:1, 
          mt: 35,
          mb: -10,
          color: '#fff',
          backgroundColor: '#00809b',
          width: '100%',
          display: 'flex',
          height: 70,
          fontFamily: 'Roboto, sans-serif',
          justifyContent: "space-between",					
        }}
      >
       <Box sx={{display: 'flex', flexDirection: 'colunm', justifyContent: 'center', justifyItem: 'center', }}>          
          <Typography
            variant="h5"
            noWrap
            component="a"           
            sx={{  
              ml: 1,
              mt: 1,
              fontWeight: 500,
              fontSize: '25px',                        
              fontFamily: 'Josefin Sans, sans-serif',
              color: 'white',
              textDecoration: 'none',
            }}
          >
           Open Next
        </Typography>        
      </Box>
      <Box
        sx={{
          display:'flex',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <IconButton 
          aria-label="delete"
          color="inherit"
          //href="https://www.facebook.com/Ombala-do-Saber-102495301689318/?ref=page_internal" 
        >
          <FacebookOutlined />
        </IconButton>
        <IconButton 
          aria-label="delete"
          color="inherit"
        // href="https://twitter.com/DoOmbala"
        >
          <Twitter />
        </IconButton>
        <IconButton 
          aria-label="delete"
          color="inherit"
          //href="https://www.instagram.com/ombaladosaber/"
        >
          <Instagram />
        </IconButton>
        <IconButton 
          aria-label="delete"
          color="inherit"
          //href="https://www.linkedin.com/in/ombala-saber-64a427200/"
        >
          <LinkedIn />
        </IconButton>
      </Box>
		</Box>
    </>
  );
}

export default DashboardADM;