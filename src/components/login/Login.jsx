import {useState} from 'react';
import {Grid, Paper, Button, Typography, TextField, Link, InputAdornment, IconButton, Box} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Mail, Visibility, VisibilityOff } from '@mui/icons-material';
///import logo from '../../images/Criptomoeda.png';

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Login({handleChange, setClose, setPainel, setTitle, setUser}){

	const paperStyle ={
		//padding: '3px 10px 10px 30px',
		maxWidth: 350,
		fontSize: '20px',		
		fontFamily: 'Roboto, sans-serif',
	};
	// eslint-disable-next-line no-unused-vars
	let navigate = useNavigate();
	//const [senha, setSenha] = useState('');
	const [user, setUsere] = useState({ email: '', password: '' });
	const [show, setShow] = useState(false);  
	


	// eslint-disable-next-line react/prop-types
	const EndAdornment = ({ show, setShow }) => {
		return (
			<InputAdornment position='end'>
				<IconButton onClick={()=> setShow(!show)} >
					{show ? <VisibilityOff/> : <Visibility/>}
				</IconButton>
			</InputAdornment>
		)
	}


	const handleChannge =(e)=>{
		setUsere({...user,[e.target.name]: e.target.value})
	};
	const submitForm = (e)=>{
		e.preventDefault();
		/*const sendData = {
			email: user.email,			
			password: user.password,
			
		};*/
		console.log(user.password)
		console.log(user.email)
		const formData = new FormData();
		formData.append("email", user.email);
		formData.append("password", user.password);

		axios.post('http://localhost:8080/auth', {
			// Data to be sent to the server flavioFacha@gmail.com			
			email: user.email,
			password: user.password
		})
		.then(response => {
			if (response.data.typeUser === "ADM") {
				setUser({
					id: response.data.id,
					name: response.data.name,
					lastname: response.data.lastname,
					img: response.data.img,
					typeUser: response.data.typeUser,
					email: response.data.email,
					phone: response.data.phone,
					idCountry: response.data.idCountry
				});
				navigate(`/adm/${response.data.id}`);
				setPainel(`/adm/${response.data.id}`);
				setClose(false);
				//setID(response.data.id);
			} else if (response.data.typeUser === "CLIENT") {
				setUser({
					id: response.data.id,
					name: response.data.name,
					lastname: response.data.lastname,
					img: response.data.img,
					typeUser: response.data.typeUser,
					email: response.data.email,
					phone: response.data.phone,
					idCountry: response.data.idCountry
				})
				navigate(`/client/${response.data.id}`);
				setPainel(`/client/${response.data.id}`);
				setClose(false);
				//setID(response.data.id);
			} else {
				setUser({
					id: response.data.id,
					name: response.data.name,
					lastname: response.data.lastname,
					img: response.data.img,
					typeUser: response.data.typeUser,
					email: response.data.email,
					phone: response.data.phone,
					idCountry: response.data.idCountry
				})
				navigate(`/supervisor/${response.data.id}`);
				setPainel(`/administrador/${response.data.id}`);
				setClose(false);
				//setID(response.data.id);
			}
			console.log(response.data);
		})
		.catch(function () {
			setTitle("Error");
			//setMessage("Email Or Password invalid");
			handleChange("event", 5);
			//console.error(error);
		});

		/*axios({
			method: 'POST',
			url: 'http://localhost:8080/auth',
			params: {
				email: user.email,
				password: user.password
			},
			config: {
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
					'Access-Control-Allow-Origin': '*',
				}
			}
		})		
		.then((response)=> {
		//handle success
		console.log(response)
		/*if(response.data.Status === '200'){
			if(response.data.tipoUser === "ADM"){
				navigate(`/adm/${response.data.id}`);
				setPainel(`/adm/${response.data.id}`);
				setClose(false);
				//setID(response.data.id);
			}else if(response.data.tipoUser === "CLIENT"){
				navigate(`/client/${response.data.id}`);
				setPainel(`/client/${response.data.id}`);
				setClose(false);
				//setID(response.data.id);
			}else {
				navigate(`/supervisor/${response.data.id}`);
				setPainel(`/administrador/${response.data.id}`);
				setClose(false);
				//setID(response.data.id);
			}
		}else{
			alert(response.data.mensagem);
		}
	})
	.catch(function () {
		//console.log(response)
		//alert(response);
	});*/

	};
	return (
		<>
		<Box sx={{display: 'flex', flexDirection: 'colunm', justifyContent: 'center', justifyItem: 'center', my: 2,pb: 1}}>
                   
          <Typography
            variant="h5"
            noWrap
            component="a"           
            sx={{            
				fontWeight: 'bold',
				fontSize: '35px',                              
				fontFamily: 'Josefin Sans, sans-serif',
				color: '#00809b',
				textDecoration: 'none',
				'@media (max-width: 600px)': { fontSize: '25px' },
            }}
          >
            Open Next
        </Typography>        
      </Box>
		<form style={{display: 'flex', alignContent: 'center', alignItems: 'center'}} onSubmit={submitForm}>
			<Grid fullWidth>
				<Paper  elevation={0}  style={paperStyle}>
					<Grid align="start" sx={{mb: 2}}>						
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
							Bem-vindo de volta!
						</Typography>
						<Typography
						
						sx={{
							justifyContent: 'center',
							alignItems: 'center',	
							fontSize: '15px',
							mb: 1,
							fontFamily: 'Roboto, sans-serif',
							'@media (max-width: 600px)': { fontSize: '10px' },
						}}
						>
							{'Faça login para voltar à sua conta.'}
							
						</Typography>
					</Grid>
						<TextField	
							size="small"	
							type="email"
							placeholder="Insere o seu  email" 
							name="email"
							onChange={handleChannge}
							InputProps={{
							startAdornment: (
								<InputAdornment position="start">
								<Mail />
								</InputAdornment>
							),
							}}
							value={user.email} 
							fullWidth 
							required
							sx={{								
								mb: 1,
								fontFamily: 'Roboto, sans-serif',
							}}
						/>
						<TextField
							size="small"
							label="password"
							name="password"
							onChange={handleChannge}																								
							placeholder="Insere a Password"
							variant="outlined"
							value={user.password} 
							required
							fullWidth
							type={show ? 'text' : 'password'}
							InputProps={{
								endAdornment: (
									<EndAdornment show={show} setShow={setShow} />
								),
							}}
						/>				
						<Typography sx={{fontWeight: 'bold', mt: 2, mb: 2}}>
							<Link href="#" underline="none" onClick={() => { handleChange("event", 2), setTitle('UPDATE') }}>
							Esqueceu a senha ?
							</Link>
						</Typography>				
						<Button 
							type="submit"
							size="small"
							sx={{
								margin: '8px 0',
								color: 'white',
								border: 'none',
								cursor: 'pointer',
								height: '35px',
								textDecoration: 'none',
								fontSize: '15px',
								backgroundColor: '#00809b',
								'&:hover': {
								color: '#013039',
								cursor: 'pointer',
								transition: '0.3s ease-in',
								},
								'@media (max-width: 600px)': { fontSize: '10px', height: '30px', },
							}}											
							fullWidth
						> 
							Entrar
						</Button>
						<Grid align="center" sx={{mt: 1}}>						
							<Typography
								component="h5"
								sx={{
									justifyContent: 'center',
									alignItems: 'center',
									fontWeight: 'bold',	
									fontSize: '15px',
									fontFamily: 'Roboto, sans-serif',
									'@media (max-width: 600px)': { fontSize: '15px' },
								}}
							>
								Não tem uma conta?
							</Typography>
							<Typography							
								sx={{
									justifyContent: 'center',
									alignItems: 'center',
									fontWeight: 'bold',
									fontSize: '15px',
									mb: 1,
									fontFamily: 'Roboto, sans-serif',
									'@media (max-width: 600px)': { fontSize: '10px' },
								}}
							>

								<Link href="#" underline="none" onClick={() => { handleChange("event", 1), setTitle('Criar Conta') }}>
									Cadastre-se agora
								</Link>
							</Typography>
						</Grid>
				</Paper>
				</Grid>
				
			
		</form>
		</>
	)
}
