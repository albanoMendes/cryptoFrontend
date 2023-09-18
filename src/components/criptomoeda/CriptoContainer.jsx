import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormCripto from './FormCripto';
import FormRede from './FormRede';
import CriptoRede from './CriptoRede';

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

// eslint-disable-next-line react/prop-types
export default function CriptoContainer({moeda, setMoeda, opcao}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Cadastrar Criptomoeda" {...a11yProps(0)} />
          <Tab label="Cadastrar Rede Cripto" {...a11yProps(1)} />         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FormCripto moeda={moeda} setMoeda={setMoeda} setValue={setValue} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {moeda.tipo == 'CRIPTOMOEDA' ? 
          <CriptoRede setValue={setValue} opcao={opcao} />
          :
          <FormRede  moeda={moeda} setValue={setValue} opcao={opcao} />
        }       
      </CustomTabPanel>          
    </Box>
  );
}
