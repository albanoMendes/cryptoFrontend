import {useState, useRef, useEffect} from 'react';
import {Box, Typography, Grid,  Paper, IconButton,  Button, TextField, Radio,  RadioGroup, FormControlLabel, FormControl, FormLabel, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { PhotoCamera} from '@mui/icons-material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() =>({
    root: {
    '& .MuiFormControl-root': {
            width: '90%',
            margin: useTheme().spacing(1),
        }
    },
    button:{
         marginTop: useTheme().spacing(1),
    },
    btn:{
        marginLeft: useTheme().spacing(1),
    }


}));

const currencies = [
  {
    id: 1, 
    acronimo: 'AN',
	code: '+244',    
    name: 'ANGOLA',    
  },
  {
    id: 2,
    acronimo: 'BR',
	code: '+55',    
    name: 'BRASIL',  
  },
];

export default function UserCreate(props){
	const styles = {
          preview: {
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
          },
          image: { maxWidth: "25%", maxHeight: 125 },
          paperStyle:{
			padding: '3px 10px 20px 30px', 
			width:'100%',
		},
		btnstyle:{margin:'2px 0'},
    };
	//let history = useNavigate();
	// eslint-disable-next-line react/prop-types
	const { foto, opcao, user } = props;
	const [id, setId] = useState(0);
	const [selectedImage, setSelectedImage] = useState();
	let navigate = useNavigate();
	const selectFile = useRef();
	const classes = useStyles();
	const [data, setData] = useState({
		id: 0,
		nome: '',
		lastname: '',
		email: '',
		idcountry: '',
		cell: '',
		password: "",
		repassword: "",
		foto: [],
		tipoUser: '',
	});

	useEffect(() => { 
		
        if (opcao === "EDITAR") {
			setData({
				id: user.id,
				nome: user.nome,
				lastname: user.lastname,
				email: user.email,
				idcountry: user.idCountry,
				cell: user.cell,
				password: "",
				repassword: "",
				foto: [],
				tipoUser: user.tipoUser
			})
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

	const [termo, setTermo] = useState(false);
	const handleChannge=(e)=>{
		setData({...data,[e.target.name]: e.target.value})
	};
	const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImage(e.target.files[0]);
        }
    };
	const submitForm = async (e)=>{
		e.preventDefault();
		
		//console.log(selectFile.current.files[0]);
		if(data.repassword === data.password){
		if(termo === true){
			const formData = new FormData();
			formData.append("nome", data.nome);
			formData.append("email", data.email);
			formData.append("sexo", data.sexo);
			formData.append("password", data.password);
			formData.append("foto", selectFile.current.files[0]);
			formData.append("tipoUser", data.tipoUser);
			axios({
				method: 'post',
				url: 'http://localhost:8080/ombala-blog/src/api/usuarios/inserir.php',
				data: formData,
				config: { headers: {'Content-Type': 'multipart/form-data' }}
			})
			.then(function () {
				//handle success
				//console.log(response)
				alert('Usuario Cadastrado com sucesso!');
				setData({
					nome:"",
					email: "",
					sexo: "",
					password: "",
					repassword: "",
					foto: [],
					tipoUser: ""
				});
				navigate(`/`);  
			})
			.catch(function () {
				//handle error
				//console.log(response)
				alert('O email corresponde a um usuario já cadastrado');
			});


				/*axios.post('http://localhost:8080/cond/src/api/usuarios/inserir.php', sendData)
				.then((result)=>{
					if(result.data.Status === 'Invalid'){
						alert('Usuario não salvo');
					}else{
						alert(result);
						setData({
							nome:"",
							email: "",
							sexo: "",
							password: "",
							repassword: "",
							foto: [],
							tipoUser: "CADIDATO"
						});
						navigate(`/`);
					}
				})*/
				
				
			} else {
				alert("Precione no termo de compromisso!")
			}
		} else {
			alert("Password diferentes. Escreve novamente!")
			console.log(data.repassword);
			console.log(data.password)
		}
	};

	return(
		<Paper elevation={0}  style={styles.paperStyle}>
		<form  className={classes.root}>
	
		<Grid 
			container
		>
			<Grid item xs={12} sm={6}

			>
					<TextField 
							//variant="standard"
						size="small"
						label="Nome" 
						placeholder="Insere o seu nome"
						name="nome"
						onChange={handleChannge}
						value={data.nome}  
						fullWidth 
						required
					/>
					<TextField 	
						size="small"					
						label="Sobrenome" 
						placeholder="Insere o seu sobrenome"
						name="lastname"
						onChange={handleChannge}
						value={data.lastname}  
						fullWidth 
						required
					/>	
					<TextField 
						//variant="standard"
						size="small"
						label="Email"						
						type="email"
						name="email"
						onChange={handleChannge}
						value={data.email}  
						fullWidth 
						required
					/>	
					<FormControl>						
						<InputLabel
							id="menu"
							sx={{
								ml: 1,
								mr: 1,								
								fontSize: '15px',
								fontFamily: 'Roboto, sans-serif',
							}}
						>
						SELECIONE SEU PAIS
						</InputLabel>
							<Select
								size="small"	
								labelId="menu" id="menu-list"
								label="SELECIONE SEU PAIS"							
								onChange={(e) => { setId(e.target.value); } }
								>
								{currencies.map((option) => (
							<MenuItem            
								key={option.id} value={option.id}
							>							
							<Typography 
								sx={{
									ml: 1,                                           
									fontSize: '15px',                    
									fontFamily: 'Roboto, sans-serif',
								}}>
								{option.name}
								</Typography>          
							
							</MenuItem>
						))}

						</Select>
					</FormControl> 			
					<TextField 
						//variant="standard"
						size="small"
						label="Senha" 
						placeholder="Senha" 
						type="password"
						name="password"
						onChange={handleChannge}
						value={data.password}  
						fullWidth 
						required
					/>					
					</Grid>
					<Grid item xs={12} sm={6}

					>
						<TextField 
							//variant="standard"
							size="small"
							label="Telefone" 
							placeholder="Informe o seu numero de telefone" 
							type="text"
							value={data.cell}
							onChange={handleChannge}
							name="cell"
							fullWidth 
							required
						/>			
					
					<FormControl>
						<FormLabel id="demo-radio-buttons-group-label">Tipo de Usuario</FormLabel>
						<RadioGroup
						sx={{display:'initial'}}
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue={data.tipoUser == '' ? 'ADM' : data.tipoUser}
						name="tipoUser"
						onChange={handleChannge}  
						
						>
						<FormControlLabel value="ADM" control={<Radio />} label="Administrador" />
						<FormControlLabel value="SUP" control={<Radio />} label="Supervisor" />
						
						</RadioGroup>
					</FormControl>
					<Box>
					<IconButton color="primary" aria-label="upload picture" component="label">
						<input 
							hidden
							accept="image/*" 
							type="file" 
							ref={selectFile}  
							onChange={imageChange}                          
							required 
						/>
						<PhotoCamera />
						<Typography variant="overline" display="block" gutterBottom margin={1}>
							ADD UMA FOTO
						</Typography>	                       	
						</IconButton>  
						<Box style={styles.preview}>
						<img							
							
							src={(selectedImage === undefined) ? new URL(`../../images/usuarios/${foto}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
							style={styles.image}
							alt="Thumb"
						/>
						</Box>
					</Box>					
					
				</Grid>
				</Grid>
				<Box className={classes.button}>		
				<Button
					type="submit" 
					sx={{
						m: '2px 0',
						color: 'white',
						border: 'none',
						cursor: 'pointer',		
						textDecoration: 'none',
						fontSize: '12px',
						fontFamily: 'Roboto, sans-serif',
						backgroundColor: '#00809b',
						'&:hover': {
						color: '#013039',
						cursor: 'pointer',
						transition: '0.3s ease-in',
						},
					}}			
					
					onClick={submitForm}
				> 
					{opcao}
				</Button>
					<Button 
						type="submit" 
						sx={{
							ml: 0.5,
							color: '#00809b',
							fontFamily: 'Roboto, sans-serif',
							fontSize: '12px',
							'&:hover': {
							color: 'white',
							backgroundColor: '#FF0000',
							transition: 'all 400ms',
							},
						}}
						className={classes.btn}
					> 
					Limpar
				</Button>   
			</Box>
		</form>
		</Paper>
	)
}
