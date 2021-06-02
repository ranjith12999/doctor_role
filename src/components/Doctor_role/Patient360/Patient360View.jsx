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

export default function Patient360view() {
  const classes = useStyles();
  const [patientId, setPatientId] = useState({patient_id:''});
  const [patientData, setPatientData] = useState([]);
  const [datarecieved, setDatarecieved] = useState(false);
  const [otherData, setOtherData] = useState([]);
  const [chiefData, setChiefData] = useState([]);
  const [medication, setMedication] = useState([]);
  const [currentApp, setCurrentApp] = useState('');
  const [value, setValue] = React.useState(0);
  
  // useEffect(()=>{
  //   if(patientData.length!==0){
  //   patientData.map((val,i)=>{
  //       if(val.formName==='CHIEF_COMPLAINT'){
  //           setChiefData([...chiefData,val]);
  //       }
  //       if(val.formName==='PATIENT_OTHER_INFO'){
  //           setOtherData([...otherData,val]);
  //       }   
  //   });
  //   }
  // },[patientData])
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onPatientId=(event)=>{
    setDatarecieved(false);
    setPatientId({patient_id:event.target.value});
  }

  const onSubmitId=()=>{
    //setFinalId(patientId);
    console.log('patientId',patientId);
    axios({
      url:"http://localhost:8080/api/currentPatientId",
      method:'POST',
      data:patientId
    })
    .then((res)=>{
      console.log('finalId has been sent');
    })
    .catch(()=>{
      alert('finalId has not been sent');
    })
    setDatarecieved(true);
  }

  //if(datarecieved){
  useEffect(()=>{
    async function fetchData(){
      if(datarecieved && medication.length===0){
        await axios.get('/api/currentPatientData')
        .then((response)=>{
            const data = response.data;
            //console.log("main",data[0].medication);
            setMedication(data);
            // data.map((val,i)=>{
            //     console.log('index',i);
            //     setMedicationData(val[i].medication);
            // });
            console.log("data1 has been recieved");
        })
        .catch(()=>{
            //alert("data1 have n't recieved");
        })
    }
    if(datarecieved && patientData.length===0){
        await axios.get('/api/currentPatientOtherData')
        .then((response)=>{
            const data = response.data;
            //console.log("main",data[0].medication);
            setPatientData(data);
            console.log("data has been recieved");
        })
        .catch(()=>{
           // alert("data have n't recieved");
        })
      }  
    }
    fetchData();
    //setMedication([{"medication":[{"SuggestedDiagnosis":"bsjk","FomentationAndOintment":"oindgsd","Activity":"prpw","BracesAndaids":"aidsa","Physiotherapy":"physi","Medicines":"medicsi"}],"_id":"6048e8dade3df765fc5548c1","source_id":"AP003","patient_id":"PA001","submittedBy":"DA0001","createdBy":"DA0001","updatedBy":"","createdAt":"2021-03-10T15:41:55.556Z","updatedAt":"2021-03-10T15:41:55.556Z","__v":0}]);
    //setPatientData([{"Questions":[{"question":"Cheif Complaint","answer":"cancer"},{"question":"Situation","answer":"sudden"},{"question":"Progression","answer":"Ten"},{"question":"ProgressionType","answer":"Ten"},{"question":"Patient Perception","answer":10},{"question":"Aggravating Factors","answer":"factor"},{"question":"Relieving Factors","answer":"reliv"},{"question":"Allergy","answer":"allergy"}],"_id":"6048e8dade3df765fc5548bf","source_id":"AP003","patient_id":"PA001","formName":"CHIEF_COMPLAINT","submittedBy":"DA001","createdBy":"DA001","updatedBy":"","createdAt":"2021-03-10T15:40:37.411Z","updatedAt":"2021-03-10T15:40:37.411Z","__v":0},{"Questions":[{"index":0.4727104168601619,"Questions":[{"question":"diseases","answer":"aids"},{"question":"medication","answer":"h1v1"},{"question":"previousTreatment","answer":"te"},{"question":"Physician","answer":"heee"},{"question":"drugAllergy","answer":"alefg"},{"question":"detailedDrugAllergy","answer":"dallerg"},{"question":"pepticDisease","answer":"prptidis"}]}],"_id":"6048e8dade3df765fc5548c0","source_id":"AP003","patient_id":"PA001","formName":"PATIENT_OTHER_INFO","submittedBy":"DA001","createdBy":"DA001","updatedBy":"","createdAt":"2021-03-10T15:41:17.080Z","updatedAt":"2021-03-10T15:41:17.080Z","__v":0}]);
  });
  // //}
  //   console.log('PatierntData',patientData);
  // console.log('chiefData',chiefData);
  // console.log('otherData',otherData);
  return (
    //<form className={classes.root} noValidate autoComplete="off">
    <div>
        <Grid container>
            <Grid item xs={12} container justify='center'>
                <h2>Patient 360</h2>
            </Grid>
            <Grid item xs={12} container justify='center' className={classes.root}>  
                <TextField 
                id="outlined-basic" 
                label="Patient ID" 
                variant="outlined" 
                name="Patient_ID"
                onChange={(event)=>onPatientId(event)} 
                className={classes.textWidth}/>
                <Button variant="contained" color="primary" size='small' onClick={onSubmitId}>Get Data</Button>
            </Grid>
        </Grid>
        
        <Grid item xs={12} container justify='center'>
            {medication.map((val,i)=>{
             // setCurrentApp(val.source_id);
                return (
                    <Accordion style={'width:100%'}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Appointment ID:{val.source_id}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={classes.appRoot}>
                                <AppBar position="static">
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
                                <TabPanel value={value} index={0}>
                                    {patientData.map((pval,j)=>{
                                      if(pval.source_id===val.source_id && pval.formName==='CHIEF_COMPLAINT'){
                                        // {console.log('pval',pval.Questions)}
                                        const newQvalue = pval.Questions;
                                        console.log('newvalue',newQvalue);
                                        return(
                                          <div>
                                            <h3>CHIEF COMPLAINT</h3>
                                            <Grid container>
                                              <div>{pval.Questions[0].question}:{pval.Questions[0].answer}</div>
                                              <div>{pval.Questions[1].question}:{pval.Questions[1].answer}</div>
                                              <div>{pval.Questions[2].question}:{pval.Questions[2].answer}</div>
                                              <div>{pval.Questions[3].question}:{pval.Questions[3].answer}</div>
                                              <div>{pval.Questions[4].question}:{pval.Questions[4].answer}</div>
                                              <div>{pval.Questions[5].question}:{pval.Questions[5].answer}</div>
                                              <div>{pval.Questions[6].question}:{pval.Questions[6].answer}</div>
                                              <div>{pval.Questions[7].question}:{pval.Questions[7].answer}</div>
                                            </Grid>
                                          </div>
                                        )
                                        
                                      }
                                      var ppval = pval.Questions;
                                      console.log('oldOther',ppval);
                                      //ppval.map((qval)=>{
                                        if(pval.source_id===val.source_id && pval.formName==='PATIENT_OTHER_INFO'){
                                          //console.log('otherInfo',qval,'length',qval.length);
                                          return(
                                            <div>
                                              <h3>PATIENT OTHER INFO</h3>
                                              <Grid container>
                                                <div>{pval.Questions[0].Questions[0].question}:{pval.Questions[0].Questions[0].answer}</div>
                                                <div>{pval.Questions[0].Questions[1].question}:{pval.Questions[0].Questions[1].answer}</div>
                                                <div>{pval.Questions[0].Questions[2].question}:{pval.Questions[0].Questions[2].answer}</div>
                                                <div>{pval.Questions[0].Questions[3].question}:{pval.Questions[0].Questions[3].answer}</div>
                                                <div>{pval.Questions[0].Questions[4].question}:{pval.Questions[0].Questions[4].answer}</div>
                                                <div>{pval.Questions[0].Questions[5].question}:{pval.Questions[0].Questions[5].answer}</div>
                                                <div>{pval.Questions[0].Questions[6].question}:{pval.Questions[0].Questions[6].answer}</div>
                                              </Grid>
                                            </div>
                                          )
                                        }
                                      //})
                                    })}
                                    
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <p>Activity: {val.medication[0].Activity}</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p>BracesAndaids: {val.medication[0].BracesAndaids}</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <p>FomentationAndOintment: {val.medication[0].FomentationAndOintment}</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p>Medicines: {val.medication[0].Medicines}</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <p>Physiotherapy: {val.medication[0].Physiotherapy}</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p>SuggestedDiagnosis: {val.medication[0].SuggestedDiagnosis}</p>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
            
        </Grid>
    </div>
    //</form>
  );
}

