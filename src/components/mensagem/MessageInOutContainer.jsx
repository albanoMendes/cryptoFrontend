import {useState} from 'react';
import PropTypes from 'prop-types';
import { Typography, Box} from '@mui/material';
import Ler from './Ler';
import Send from './Send';

function TabPanel(props) {
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
        <Box>
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
export default function MessageInOutContainer({tab, setClose, message, setMessages}){
  const [value, setValue] = useState(tab);

	const handleChange = (event, newValue) => {
    setValue(newValue);
	};
  
	return(
		<>
      <TabPanel value={value} index={0}>
        <Ler handleChange={handleChange} message={message}/>
			</TabPanel>
			<TabPanel  value={value} index={1}>
        <Send message={message} setOpenModel={setClose} setMessages={setMessages}/>
			</TabPanel>
		</>
	)
}