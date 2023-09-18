import { ArrowUpward } from "@mui/icons-material";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Model from "../Model";
import FinishInvstment from "./FinishInvstment";
import { makeStyles } from '@mui/styles';
import Minerando from "./Minerando";

const useStyles = makeStyles(() =>({
    display: {

    },
    timeCell: {
        fontSize: '20px',
        fontFamily: 'Stint Ultra Expanded, serif',
        
    },
    progressbar: {
        overflow: 'hidden',
        height: 10,
        borderRadius: 5,
        marginBottom: 2,
        backgroundColor: '#eee',
    },
    progressPercent: {
        fontWeight: 600,
        textAlign: 'center',
        color: '#eee',
        textShadow: '-1px 0 #555, 0 1px #555, 1px 0 #555, 0 -1px #555',
        
    }

}));

var [ms, seg, min, hr] = [0, 0, 0, 0]
var [dtms, dtseg, dtmin, dthr] = ["", "", "", ""]
var interval = null;

function Investimento({investimento, setInvestimentos}) {
   
    const [time, setTime] = useState({valor: 0, milisegundos: "00"});
    const [opcao, setOpcao] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [total, setTotal] = useState(investimento.total);
    const [openModel, setOpenModel] = useState(false);
    const [formato, setFormato] = useState(total.toLocaleString("en-US", {style:"currency", currency:"USD"}))
    const [title, setTitle] = useState('');
    const classes = useStyles();

    let v = total * investimento.lucro;
    let n = v.toFixed(2);
    let num = total;
    // Convertemos o número para string:
    const str = n.toString();

    // Separamos nas duas partes.
    const splitted = str.split('.');

    // Parte inteira:
    const int = parseInt(splitted[0]);

    // Parte decimal ('0' por padrão).
    const decimal = parseInt(splitted[1] || 0);
    //console.log(`${int}:${decimal}`)
    function ActulizeDisplay() {
        ms < 10 ? 
        dtms = "0" + ms 
        :
        dtms = ms
        
        setTime({ valor: num,  milisegundos: dtms })
        if ((num == int) && (ms == decimal)) {           
            
            //console.log(`${dthr}:${dtmin}:${dtseg}:${dtms} ${int}:${decimal}`)
            //setTime({ horas: dthr, minutos: dtmin, segundos: dtseg,  milisegundos: dtms })
            reset()
            setOpcao("LIBERADO")
            const luc = total * investimento.lucro;
            setTotal(luc.toFixed(2))       
           
            setFormato(total.toLocaleString("en-US", { style: "currency", currency: "USD" }));
            
            
        } 
    }

    function stop() {
        [ms, seg, min, hr] = [0, 0, 0, 0]
        clearInterval(interval);
        interval = null;
    }
    function reset() {
        stop();
        setTime({horas: 0, milisegundos: "0000"})
    }

    function timerFunction() {
        ms += 1
        if (ms >= 100) {
            num += 1;
            ms = 0;
        }
        if (seg >= 60) {
            min += 1;
            seg = 0;
        }
        if(min >= 60){
            hr += 1;
            min = 0;
        }
        ActulizeDisplay()
        
    }

    
    const [nivel, setNivel] = useState({
        id: 0,
        min: 0,
        max: 0,
        lucrod: 0,
        idRedimento: 0
    })
    const [investment, setInvestment] = useState({
        id: 0,
        moeda: '',
        acronimo: '',
        logo: '',
        tipo: '',
        status: '',
        total: 0,
        idRendimento: 0,
        idUser: 0,
        idNivel: 0,
        idCripto: 0
    })

    useEffect(() => { 		
        switch (investimento.status) { 
            case 'PROCESSANDO':
                setOpcao('FINALIZAR');
                break;
            case 'ATIVO':
                setOpcao('MINERAR');
                break;
            case 'MINERANDO':
                setOpcao('MINERANDO');
                break;
            default:
                setOpcao(investimento.status);
        }
        setNivel({
            id: investimento.idNivel,
            min: 15,
            max: 1990,
            lucrod: investimento.lucro,
            idRedimento: investimento.idRendimento
        })
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, []);

    const handleEditInves = () => { 
        
        if (opcao == 'FINALIZAR') {
            setTitle('CONCLUIR');
            setOpenModel(true);
            setInvestment({
                id: investimento.id,
                logo: investimento.logo,
                moeda: investimento.moeda,
                acronimo: investimento.acronimo,
                lucro: investimento.lucro,
                total: investimento.total,
                status: investimento.status,               
                idRendimento: investimento.idRendimento,
                idUser: investimento.idUser,
                idNivel: investimento.idNivel,
                idCripto: investimento.idCripto   
            })
        } else if (opcao === 'MINERAR') {
            setOpcao('MINERANDO')

            
            if (interval) return        
            interval = setInterval(timerFunction, 0.5)      
            
            console.log(isRunning)
            setIsRunning(true)
            console.log(isRunning)

        }
    } 

    const getCor = (stado) => {
       switch (stado) {
            case 'FINALIZAR':
                return 'red';
            case 'PEDENTE':
                return 'red';
            case 'MINERAR':
                return 'green';
           case 'MINERANDO':
               return '#00809b';        
            default:
               return 'green';
       }
    }

    const getComponent = () =>{
      switch(opcao){
          case 'FINALIZAR':
              return <FinishInvstment investimento={investimento} nivel={nivel} setOpenModel={setOpenModel} />; //<CountryForm opcao={opcao} setCountries={setCountries} id={id} setOpenModel={setOpenModel}/>;
          case 'MINERANDO':
              return  <Typography  variant="caption"  sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', fontSize: '.8rem', '@media (max-width: 800px)': { fontSize: '.5rem' }, }} >O PROCESSE DE MINERAÇÃO É FEITO EM  24 HORAS</Typography>;         
        default: 
          return null;
      }
    }

    return (
        <>
            <Paper elevation={0} sx={{p: 2, mb: 1, border: '1px solid #C2BEB7'}}>
                <Box
                    sx={{  
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{                        
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <img                  
                            src={new URL(`../../images/cryptoMoedas/${investimento.logo}`, import.meta.url)}
                            width={20}
                            height={20}
                        />
                        <Typography 
                            sx={{
                                ml: .5,
                                mt: .5,
                                fontSize: '12px',  
                               fontWeight: 'bold',
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 800px)': { fontSize: '.6rem' },
                            }}>
                            {investimento.moeda} {`(${investimento.acronimo})`}
                        </Typography>       
                    </div>
                    <div
                        style={{                        
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <ArrowUpward sx={{  color: 'green', fontSize: '1rem', '@media (max-width: 800px)': { fontSize: '.6rem' }, }} />
                         <Typography 
                            sx={{
                                ml: .5,                                          
                                fontSize: '14px',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto, sans-serif',
                                color: 'green',
                                '@media (max-width: 800px)': { fontSize: '.6rem' },

                            }}
                        >
                         {investimento.lucro}{'%'}
                        </Typography>   
                    </div>
                   
                </Box>
               <Divider />
                <Box
                    sx={{  
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }} 
                >
                    <Typography 
                        component={'h1'}    
                        sx={{                            
                            mt: 1,
                            textAlign: 'center',                            
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'start',

                        }}
                    >
                        <Typography sx={{
                            mt: 2,
                            mr: 1,
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            '@media (max-width: 390px)': { fontSize: '.1rem',  },
                            '@media (max-width: 800px)': { fontSize: '0.3rem' },
                            '@media (max-width: 835px)': { fontSize: '0.4rem' },
                             '@media (max-width: 755px)': { fontSize: '0.5rem' },
                             
                        }}>{`TOTAL:`}</Typography>
                        <Typography sx={{                                                                            
                                fontSize: '1.8rem',
                                mt: 1,
                                color: 'black',
                                fontWeight: 'bold',
                                '@media (max-width: 425px)': { fontSize: '.1px',  mt: 1, fontWeight: 200  },
                                '@media (max-width: 755px)': { fontSize: '.2rem',  mt: 1, mr: 1,  },
                                '@media (max-width: 800px)': { fontSize: '.6rem',  mt: 1, mr: 1 },
                                '@media (max-width: 835px)': { fontSize: '1.5rem',  mt: 0.5, mr: 0.5 },
                            }}
                        >
                            {interval ?                                
                                `${time.valor},${time.milisegundos}`
                                : formato
                            }
                        </Typography> 
                    </Typography>            
                    <Box
                        sx={{ 
                        mt: 1,
                        mb: 1,                
                        }}
                    >
                        <Button
                            onClick={() =>  handleEditInves()} 
                            size="small" 
                            //variant="outlined"
                            sx={{                  
                                color: `${getCor(opcao)}`,
                                border: `1px solid ${getCor(opcao)}`,
                                //border: 'none',
                                cursor: 'pointer',
                                pl: 2,
                                pr: 2,
                                textDecoration: 'none',
                                fontSize: '12px',
                                fontFamily: 'Roboto, sans-serif',
                                //backgroundColor: `${getCor(opcao)}`,
                                '&:hover': {
                                    color: '#013039',
                                    cursor: 'pointer',
                                    transition: '0.3s ease-in',
                                },
                                '@media (max-width: 425px)': { fontSize: '2px',  pr: -2, pl: -2, },
                                '@media (max-width: 800px)': { fontSize: '6px' },
                                '@media (max-width: 755px)': { fontSize: '4px', pr: 0, pl: 0, },
                                '@media (max-width: 925px)': { pr: 1, pl: 1, },
                                '@media (max-width: 865px)': {  pr: 0.5, pl: 0.5, fontSize: '8px' }
                            }}                   
                        >
                        {opcao}
                    </Button>   
                    </Box>
                </Box>     
                <Divider />
                <Box
                    sx={{
                        mt: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        //onClick={() =>  handleViewComp(investimento.total)} 
                        //size="small" 
                        aria-label="show 4 new mails"
                        sx={{  
                            pr: 11,
                            pl: 11,
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
                            '@media (max-width: 795px)': { fontSize: '10px', },
                            '@media (max-width: 1295px)': { pr: 9.5, pl: 9.5 },
                            '@media (max-width: 1245px)': { pr: 9, pl: 9, },
                            '@media (max-width: 1185px)': { pr: 8, pl: 8, },
                            '@media (max-width: 1115px)': { pr: 7, pl: 7, },
                            '@media (max-width: 1045px)': { pr: 6, pl: 6, },
                            '@media (max-width: 985px)': { pr: 5, pl: 5, },
                            '@media (max-width: 925px)': { pr: 4, pl: 4, },
                            '@media (max-width: 865px)': { pr: 3, pl: 3, },
                            '@media (max-width: 755px)': { pr: 2, pl: 2, },
                            '@media (max-width: 540px)': { pr: 6.5, pl: 6.5, },
                            '@media (max-width: 500px)': { pr: 5, pl: 5, },
                            '@media (max-width: 425px)': { pr: 3, pl: 3, },
                            '@media (max-width: 380px)': { pr: 1.5, pl: 1.5, },
                        }}
                    >
                    SACAR
                    </Button>                    
                     <Button 
                        //onClick={() => handleEditInves()} 
                        //size="small" 
                        aria-label="show 4 new mails"
                        sx={{     
                            pr: 11,
                            pl: 11,   
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
                            '@media (max-width: 800px)': { fontSize: '10px', },
                            '@media (max-width: 1295px)': { pr: 9.5, pl: 9.5 },
                            '@media (max-width: 1245px)': { pr: 9, pl: 9, },
                            '@media (max-width: 1185px)': { pr: 8, pl: 8, },
                            '@media (max-width: 1115px)': { pr: 7, pl: 7, },
                            '@media (max-width: 1045px)': { pr: 6, pl: 6, },
                            '@media (max-width: 985px)': { pr: 5, pl: 5, },
                            '@media (max-width: 925px)': { pr: 4, pl: 4, },
                            '@media (max-width: 865px)': { pr: 3, pl: 3, },
                            '@media (max-width: 755px)': { pr: 2, pl: 2, },
                            '@media (max-width: 540px)': { pr: 6.5, pl: 6.5, }, 
                            '@media (max-width: 500px)': { pr: 5, pl: 5, },
                            '@media (max-width: 465px)': { pr: 4, pl: 4, },
                            '@media (max-width: 425px)': { pr: 3, pl: 3, },
                            '@media (max-width: 380px)': { pr: 1.5, pl: 1.5, },
                        }}
                        
                    >
                        REENVISTIR
                    </Button>
                </Box>
            </Paper>
             <Model
                title={title}
                openModel = {openModel}
                setOpenModel = {setOpenModel}
            >
                {
                getComponent()
                }
            </Model>
        
        </>
    );
}

export default Investimento;
