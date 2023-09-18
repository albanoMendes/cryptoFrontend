import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { useState } from 'react';

const useStyles = makeStyles(() =>({
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

function Minerando({ isRunning, setIsRunning, total, setTotal, setOpcao, lucro, setFormato, time, setTime }) {
    
    const classes = useStyles();
    const [filled, setFilled] = useState(0);
    let v = total * lucro;
    let n = v.toFixed(2);
    // Convertemos o número para string:
    const str = n.toString();

    // Separamos nas duas partes.
    const splitted = str.split('.');

    // Parte inteira:
    const int = parseInt(splitted[0]);

    // Parte decimal ('0' por padrão).
    const decimal = parseInt(splitted[1] || 0);

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if (updatedMs === 100){
            total++;
            updatedMs = 0;
        }
        updatedMs++;
        if(total == int && decimal == uda)
        return setTotal(total);
    }

    useEffect(() => {
       
        if (isRunning && time.m <= int && time.s <= decimal) {   
            run()
            setTimeout(run, 100);
        } else {
            setIsRunning(false)
            setFilled(0)
            setOpcao("LIBERADO")
            const luc = total*lucro
            setTotal(luc.toFixed(2))       
            
            setFormato(luc.toLocaleString("en-US", { style: "currency", currency: "USD" }));
        }

        
    }, [filled, isRunning])
    
    return (
        <div>        
           <div className={classes.progressbar}>
                <div
                    style={{
                        height: '100%',
                        width: `${filled}`,
                        backgroundColor: '#00908b',
                        transition: 'width 0.5s',
                    }}
                ></div>
           </div>
            
        </div>
    );
}

export default Minerando;
