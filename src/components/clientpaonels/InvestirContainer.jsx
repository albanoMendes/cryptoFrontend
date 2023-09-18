import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InvestirEm from './InvestirEm';
import LockBank from './LockBank';
import CriptoRedes from './CriptoRedes';
import FinishInvstment from './FinishInvstment';

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

export default function InvestirContainer({investimento, nivel, setOpenModel, tipo}) {
  const [value, setValue] = React.useState(0);
  const [moeda, setMoeda] = React.useState({
      id: 0,
      acronimo: '',
      descricao: '',
      logo: '',
      rede: 0,    
  })
  React.useEffect(() => { 		
    if (investimento.tipo === "CRIPTOMOEDA") {          
          setValue(1)
          //console.log(investimento.tipo)
        }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])
  ///console.log(value);
  const handleChange = (event, newValue) => {    
    setValue(newValue);
  };

  

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
       
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LockBank id={investimento.idCripto} setValue={setValue} value={value} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CriptoRedes moeda={moeda} setValue={setValue} value={value} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <FinishInvstment investimento={investimento} nivel={nivel} setOpenModel={setOpenModel} />
      </CustomTabPanel>
    </Box>
  );
}
