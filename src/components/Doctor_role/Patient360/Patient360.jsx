import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Medication from '../DoctorScreen/Medication';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={12} width={600}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  appRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  textWidth:{
      width: '350px'  
  },
   paperStyle: {
    padding: 15,
    height: "100vh",
    width: 1000,
    margin: "auto",
  }
}));

export default function Patient360() {
  const classes = useStyles();
  const [patientId, setPatientId] = useState({patient_id:''});
  const [patientData, setPatientData] = useState([]);
  const [datarecieved, setDatarecieved] = useState(false);
  const [medication, setMedication] = useState([]);
  const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    //<form className={classes.root} noValidate autoComplete="off">
    <div>
        <Grid container>
            <Grid item xs={12} container justify='center'>
                <h2>Patient History</h2>
            </Grid>
            {/* <Grid item xs={12} container justify='center' className={classes.root}>  
                <TextField 
                id="outlined-basic" 
                label="Patient ID" 
                name="Patient_ID"
                className={classes.textWidth}/>
                <Button variant="contained" color="secondary" size='small' >Get Data</Button>
            </Grid> */}
        </Grid>
        
        <Grid item xs={12} container justify='center'>
            
            
                    <Accordion style={{width:700}} >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}><b>Appointment ID:</b>PA0023</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={classes.appRoot}>
                                <AppBar position="static" color="secondary">
                                    <Tabs
                                    variant="fullWidth"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="nav tabs example"
                                    >
                                        <LinkTab label="Total Summary" href="/drafts" {...a11yProps(0)} />
                                        <LinkTab label="Medication" href="/trash" {...a11yProps(1)} />
                                    </Tabs>
                                </AppBar>
                                <TabPanel  value={value} index={0}>
                                   
                                      
                                        
                                          
                                            <Grid container style={{width:530}}>
                                              <Grid item xs={8} offset={4}>
                                                <h4 style={{textAlign:'center'}}>CHIEF COMPLAINT</h4>
                                                <ul style={{textAlign:'center'}}>
                                                    <li><b>Chief Complaint: </b>Cold </li>
                                                    <li><b>Situation: </b>Sudden</li>
                                                    <li><b>Progression: </b>Less Impact</li>
                                                    <li><b>ProgressionType: </b>Normal</li>
                                                    <li><b>Patient Perception: </b>Normal</li>
                                                    <li><b>Aggravating Factors: </b>none</li>
                                                    <li><b>Relieving Factors: </b>none</li>
                                                </ul>
                                              </Grid>
                                              
                                            </Grid>
                                </TabPanel>
                                <TabPanel value={value}  index={1}>
                                    <Grid container style={{width:500}}>
                                        <Grid item xs={6}>
                                            <p><b>Activity: </b>Reduce Fever</p>
                                            <p><b>FomentationAndOintment: </b>none</p>
                                            <p><b>Physiotherapy: </b>none</p>
                                        </Grid>
                                        <Grid item  sm={6}>
                                            <p><b>BracesAndaids: </b>none</p>
                                            <p><b>Medicines: </b>none</p>
                                            <p><b>SuggestedDiagnosis: </b>Paracitomol</p>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                
            
        </Grid>
    </div>
    //</form>
  );
}

