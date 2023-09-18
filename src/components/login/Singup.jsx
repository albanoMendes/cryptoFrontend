import {useState, useRef, forwardRef} from 'react';
import {Box, Typography, Grid, Divider, Paper, IconButton,  Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { Login, PhotoCamera } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
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
       
    },
    btn:{
        marginLeft: useTheme().spacing(1),
    }
}));

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 0000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

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


export default function Singup(props){
	const styles = {
          preview: {
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
          },
          image: { maxWidth: "20%", maxHeight: 100 },
          paperStyle:{
			padding: '3px 10px 20px 30px', 
			width:'100%',
		},
		btnstyle:{margin:'2px 0'},
	};

	//let history = useNavigate();
	// eslint-disable-next-line react/prop-types
	const { foto, handleChange, setTitle } = props;
	const [id, setId] = useState(0);
	const [selectedImage, setSelectedImage] = useState();
	let navigate = useNavigate();
	const selectFile = useRef();
	const classes = useStyles();
	const [data, setData] = useState({
		nome: "",
		lastname: "",
		email: "",
		idcountry: id,
		cell: "'(100) 0000-0000'",
		password: "",
		repassword: "",
		foto: [],
		tipoUser: "CLIENT"
	});
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
					<TextField 	
						size="small"					
						label="Confirma a senha" 
						placeholder="Confirma a senha" 
						type="password"
						name="repassword"
						onChange={handleChannge}
						value={data.repassword}  
						fullWidth 
						required
					/>	
					</Grid>
					<Grid item xs={12} sm={6}

					>
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
					<FormControl>
					<InputLabel htmlFor="formatted-text-mask-input">Telefone</InputLabel>
					<Input
						value={data.cell}
						onChange={handleChannge}
						name="cell"
						id="formatted-text-mask-input"
						inputComponent={TextMaskCustom}
					/>
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
			
			<Box sx={{p: 1}}>		
					<Button 
						type="submit" 
						size="small"							
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
						Salvar
					</Button>
					<Button 
						size="small"
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
					> 
					Limpar
				</Button>   
				<Button
					size="small"
					sx={{
						float: 'right',				
										
						fontFamily: 'Roboto, sans-serif',
						fontSize: '8px',
						'&:hover': {
							color: '#00C7C9',
							backgroundColor: 'white',
							transition: 'all 400ms',
						},							
					}}
							onClick={() => { handleChange("event", 0), setTitle('') }}
				>
					<Login />
				</Button>
			</Box>
		</form>
		</Paper>
	)
}
