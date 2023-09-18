import { Box, IconButton, Toolbar, Button } from "@mui/material";
import {FacebookOutlined, Twitter, Instagram, LinkedIn, Menu} from '@mui/icons-material';


export default function Footer(){

	return( 
		<Box
			sx={{
        mt: 5,
				paddingTop:1, 
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
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>
              INICIO
          </Button>
          <Button sx={{ color: '#fff' }}>
              SOBRE NÓS
          </Button>
          <Button sx={{ color: '#fff' }}>
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
	)
}
