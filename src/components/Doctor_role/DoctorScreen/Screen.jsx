import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChiefComplaint from './ChiefComplaint';
import Grid from '@material-ui/core/Grid';
import OtherInfo from './OtherInfo';
import DynamicInfo from './DynamicInfo';
import Medication from './Medication';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios';
import { useSelector} from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  btnmargin : {
      margin: '10px'
  }
}));

function getSteps() {
  return ['Primary Complaint', 'Other Info', 'Medication'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <ChiefComplaint/>
      );
    case 1:
      return (
        <OtherInfo/>
        );
    case 2:
      return (
        <Medication/>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function Screen() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const medication=useSelector(state=>state.fullMedication.medication);
  const chiefData= useSelector(state=>state.chiefData.ChiefFormData);
  const otherData=useSelector(state=>state.otherData.OtherPatient);
  // const [aid,setaid] = useState({AID:''});
  // const AppointmentID = chiefData.source_id;
  // console.log('m',chiefData.source_id);
  // if(aid.AID!==''){
  //   setaid({AID:AppointmentID});
  // }
  //console.log("AID",AID);
  const formData= useSelector(state=>state.formData.formData);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //console.log('prev',prevActiveStep);
    if(activeStep===steps.length-1){
      
      console.log('AID',formData);
    axios({
      url:"http://localhost:8080/api/patientFormData",
      method:'POST',
      data:chiefData
    })
    .then(()=>{
      console.log('Chief Data has been sent');
    })
    .catch(()=>{
      console.log('Chief Data has not been sent');
    })
    axios({
      url:"http://localhost:8080/api/patientFormData",
      method:'POST',
      data:otherData
    })
    .then(()=>{
      console.log('Other Data has been sent');
    })
    .catch(()=>{
      console.log('Other Data has not been sent');
    })
      axios({
      url:"http://localhost:8080/api/medicationData",
      method:'POST',
      data:medication
    })
    .then(()=>{
      console.log('Medication Data has been sent');
    })
    .catch(()=>{
      console.log('Medication Data has not been sent');
    })
    axios({
      url:"http://localhost:8080/api/cutPending",
      method:'POST',
      data:formData
    })
    .then(()=>{
      console.log("AID sent");
    })
    .catch(()=>{
      console.log("AID error");
    })
  }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  
  if(activeStep===1){
    console.log("chiefData",chiefData);
  }
  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justify="center">
          <div>
            {activeStep === steps.length ? (
            <div>
                <Typography className={classes.instructions}>Generate PDF</Typography>
                <Button onClick={handleReset} variant="contained" color="primary"><GetAppIcon/>PDF</Button>
            </div>
            ) : (
            <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div className={classes.btnmargin}> 
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                        variant="contained"
                    >
                        Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}{console.log("activeStep",activeStep)}
                    </Button>
                </div>
            </div>
            )}
        </div>
      </Grid>
    </div>
  );
}
