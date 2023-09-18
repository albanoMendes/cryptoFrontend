import { Mail } from "@mui/icons-material"
import { Button, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material"

function AccountRefresh( props ) {

    // eslint-disable-next-line react/prop-types
    const { handleChange } = props;
  return (
    <form style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
        <Grid fullWidth>
            <Paper
            elevation={0}                
            sx={{                    
                p: '3px 10px 10px 10px',		
                fontSize: '20px',             		
                fontFamily: 'Roboto, sans-serif',
            }}
            >
                <Grid align="center">
                    <Typography
                        component="h5"
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',	
                            fontSize: '20px',
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 600px)': { fontSize: '15px' },
                        }}
                        >
                        Email in to continue
                    </Typography>    
                </Grid>
                <TextField							
                    type="email"
                    placeholder="Insere o seu  email" 
                    name="email"
                    //onChange={handleChannge}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <Mail sx={{width: 20, height: 20}} />
                        </InputAdornment>
                    ),
                    }}
                    //value={user.email} 
                    fullWidth 
                    required
                    sx={{								
                        mb: 1,
                        fontFamily: 'Roboto, sans-serif',
                        '@media (max-width: 500px)': { fontSize: '.5rem' },
                    }}
                />
                <Button 
                    //type="submit"
                    onClick={()=> handleChange("event", 3)}
                    sx={{
                        margin: '8px 0',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        height: '50px',
                        textDecoration: 'none',
                        fontSize: '15px',
                        backgroundColor: '#00809b',
                        '&:hover': {
                        color: '#013039',
                        cursor: 'pointer',
                        transition: '0.3s ease-in',
                        },
                    }}												
                    fullWidth
                > 
                    OK
                </Button>
          
            </Paper> 
        </Grid>       
    </form>
  )
}

export default AccountRefresh