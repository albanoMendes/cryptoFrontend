import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Divider, Box, Button, Grid, Tab, Tabs, Toolbar, Typography, Link, Drawer } from '@mui/material';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import {FacebookOutlined, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import PropTypes from 'prop-types';

import About from '../components/About';
import Begin from '../components/Begin';
import Simular from '../components/Simular';
import logo from '../images/Criptomoeda.png';
import Model from '../components/Model';
import SignInOutContainer from '../components/login/SignInOutContainer';
import Totinvestidores from '../components/Totinvestidores';
import Capital from '../components/Capital';
import Lucro from '../components/Lucro';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

// eslint-disable-next-line react/prop-types
function Home({setUser}) {
  
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openModel, setOpenModel] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [painel, setPainel] = React.useState('/');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{display: 'flex', flexDirection: 'colunm', justifyContent: 'center', justifyItem: 'center', my: 2 }}>
          <Typography
            component={'div'}
            sx={{ width: 25, height: 25, ml: 1, mt: 0.5 }}
          >
            <img width={30} height={30} src={logo} />
          </Typography>          
          <Typography
            variant="h5"
            noWrap
            component="a"           
            sx={{            
              fontWeight: 700,
              fontSize: '1.5rem', 
              ml: 1, 
              mt: 1,                 
             fontFamily: 'Josefin Sans, sans-serif',
              color: '#00809b',
              textDecoration: 'none',
            }}
          >
            OpeNext
        </Typography>        
      </Box>
      <Divider/>
      <ul style={{listSyle: 'none'}}>
        <li style={{marginTop: '20px'}}>
          <Link 
            href='#inicio'
            sx={{
              textDecoration: 'none', 
              fontWeight: 700,
              fontSize: '1rem', 
              color: 'black',  
              fontFamily: 'Roboto, sans-serif',
              '&:hover': {
                cursor: 'pointer',
                color: '#00809b',
                transition: 'all 400ms',
              },
            }}
          >
            PAGINA INICIAL
          </Link>
        </li>

        <li style={{marginTop: '20px'}}>
          <Link 
            href='#sobre'
            sx={{
              textDecoration: 'none', 
              fontWeight: 700,
              fontSize: '1rem', 
              color: 'black',  
              fontFamily: 'Roboto, sans-serif',
              '&:hover': {
                cursor: 'pointer',
                color: '#00809b',
                transition: 'all 400ms',
              },
            }}
          >
            SOBRE NÓS
          </Link>
        </li>

        <li style={{marginTop: '20px'}}>
          <Link 
            href='#simulacao'
            sx={{
              textDecoration: 'none', 
              fontWeight: 700,
              fontSize: '1rem', 
              color: 'black',  
              fontFamily: 'Roboto, sans-serif',
              '&:hover': {
                cursor: 'pointer',
                color: '#00809b',
                transition: 'all 400ms',
              },
            }}
          >
            SIMULAR INVESTIMENTO
          </Link>
        </li>
         
      </ul>
    </Box>
  )

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <AppBar elevation={0} position="sticky" sx={{ bgcolor: 'white' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{display: 'flex', flexDirection: 'colunm' }}>
                <Typography
                  component={'div'}
                  sx={{ width: 45, height: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }}
                >
                  <img src={logo} />
                </Typography>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mt: 1.2,
                    ml: -1.8,
                    mr: 5,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    fontSize: '30px',                    
                    fontFamily: 'Josefin Sans, sans-serif',
                    color: '#00809b',
                    textDecoration: 'none',
                  }}
                >
                  Open Next
              </Typography>
              </Box>
              

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: 'black' }} />
                </IconButton>

                <Box component="nav">
                  <Drawer 
                    variant='temporary' 
                    open={mobileOpen} 
                    onClick={handleDrawerToggle}
                    sx={{
                      "& .MuiDrawer-paper":{
                        boxSizing: "border-box",
                        width: "240px",
                      }
                    }}
                  >
                    {drawer}
                  </Drawer>
                </Box>

              </Box>
              <Typography
                component={'div'}
                sx={{ width: 35, height: 35, display: { xs: 'flex', md: 'none' } }}
              >
                <img src={logo} />
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mt: 1.5,
                  ml: -0.5,
                  mr: 1,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontWeight: 700,
                  fontSize: '25px',                  
                  fontFamily: 'Josefin Sans, sans-serif',
                  color: '#00809b',
                  textDecoration: 'none',
                }}
              >
                Open Next
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Tabs
                  textColor="inherit"
                  indicatorColor={'primary'}
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label={
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: '.8rem',
                          color: 'black',
                          fontFamily: 'Roboto, sans-serif',
                          textAlign: 'left',
                        }}
                      >
                        INICIO
                      </Typography>
                    }
                   href='#inicio'
                  />
                  <Tab
                    label={
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: '.8rem',
                          color: 'black',
                          fontFamily: 'Roboto, sans-serif',
                          textAlign: 'left',
                        }}
                      >
                        SOBRE NÓS
                      </Typography>
                    }
                   href="#sobre"
                  />
                  <Tab
                    href='#simulacao'
                    label={
                    <Typography
                      variant="subtitle2"
                      
                      sx={{
                        fontSize: '.8rem',
                        color: 'black',
                        fontFamily: 'Roboto, sans-serif',
                        textAlign: 'left',
                      }}
                    >
                      SIMULAR INVESTIMENTO
                    </Typography>
                  }                    
                  />
                </Tabs>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  onClick={() => { setOpenModel(true), setTab(0), setTitle('') }}
                  size="small"
                  sx={{                    
                    color: 'black',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '14px',
                    '&:hover': {
                      backgroundColor: '#00809b',
                      transition: 'all 400ms',
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box>
          <Box id="inicio" sx={{ bgcolor: 'white' }}>
            <Begin setTitle={setTitle} setOpenModel={setOpenModel} setTab={setTab} />
          </Box>
            
          <Box
            id="sobre"
            sx={{
              bgcolor: '#00809b',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',  
            }}
            >
            <Box sx={{
              width: '90%',
              
            }}
            >
              <About />
            </Box>
          </Box>
          
          <Box
            sx={{
              mt: 2,              
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item>
                    <Totinvestidores/>
                  </Grid>
                  <Grid item>
                    <Lucro/>
                  </Grid>
                  <Grid item>
                    <Capital />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box
            id="simulacao"
             sx={{
              mt: 2,              
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{ 
                mt: 10,                
                width: '1000px',
                height: '200px',
              }}
            >
               <Simular />
            </Box>
            
          </Box>  

        </Box>
      </Box>
      <Box
        sx={{
          paddingTop:1, 
          mt: 35,
          mb: -10,
          color: '#fff',
          backgroundColor: '#00809b',
          width: '100%',
          display: 'flex',
          height: 100,
          fontFamily: 'Roboto, sans-serif',
          justifyContent: "space-between",					
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start" 
            onClick={handleDrawerToggle}           
            sx={{ mr: 1, color: 'white', display: { xs: 'block',  sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button href='#inicio' sx={{ color: '#fff' }}>
                INICIO
            </Button>
            <Button href='#sobre' sx={{ color: '#fff' }}>
                SOBRE NÓS
            </Button>
            <Button href='#simulacao' sx={{ color: '#fff' }}>
                SIMULAR INVESTIMENTO
            </Button>
          </Box>
        </Toolbar>
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
      <Model
        openModel = {openModel}
        setOpenModel={setOpenModel}
        title={title}
      >
        <SignInOutContainer setTitle={setTitle} tab={tab} setClose={setOpenModel} setPainel={setPainel} setUser={setUser}/>
      </Model>
    </>
  );
}

export default Home;
