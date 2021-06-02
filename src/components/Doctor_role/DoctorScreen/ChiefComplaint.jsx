import React,{useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useSelector, shallowEqual} from "react-redux";
import { useDispatch } from "react-redux";
import chiefFormData from '../../../store/actions/patientFormAction.types';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      marginRight: 700,
    },
  },
  factor:{
    "& > *": {
        margin: theme.spacing(1),
        width: "50ch",
        marginRight: 700,
      },
  },
  Slider: {
    width: 400,
  },
  paperStyle: {
    padding: 15,
    height: "auto",
    width: 1000,
    margin: "auto",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));


const day = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
];
const weeks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
];
const months = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
        value: 5,
        label: "5",
      },
      {
        value: 6,
        label: "6",
      },
      {
        value: 7,
        label: "7",
      },
      {
        value: 8,
        label: "8",
      },
      {
        value: 9,
        label: "9",
      },
      {
        value: 10,
        label: "10",
      },
      {
        value: 11,
        label: "11",
      },
      {
        value: 12,
        label: "12",
      },
  ];
  const years = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
        value: 5,
        label: "5",
      },
      {
        value: 6,
        label: "6",
      },
      {
        value: 7,
        label: "7",
      },
      {
        value: 8,
        label: "8",
      },
      {
        value: 9,
        label: "9",
      },
      {
        value: 10,
        label: "10",
      },
  ];
function valuetext(rangeValue) {
  return `${rangeValue}`;
  //setDayDuration({...dayDuration,question:"Duration",answer:rangeValue});
}
function ChiefComplaint() {
  const [value, setValue] = React.useState({});
  const [complaint, setComplaint] = React.useState('');
  
  //console.log(value);
  const [Progression, setProgression] = React.useState({});
  const [ProgressionType, setProgressionType] = React.useState({});
  const [PatientPerception, setPatientPerception] = React.useState({});
  //question data----------------------------------
  const [chiefData,setChiefData] = React.useState({});
  // const [progression, setProgression] = React.useState({});
  // const [progressType, setProgressType] = React.useState({});
  const [dayDuration, setDayDuration] = React.useState({});  
  const [monthDuration, setMonthDuration] = React.useState({});
  const [weekDuration, setWeekDuration] = React.useState({});
  const [yearDuration, setYearDuration] = React.useState({});
  const [aggrative, setAggrative] = React.useState({});
  const [Relieving, setRelieving] = React.useState({});
  const [allergy, setAllergy] = React.useState({});

  //-------------------------

  const PID= useSelector(state=>state.formData.formData.patientId);
  const AID= useSelector(state=>state.formData.formData.appointmentId);
  const DoctorID = 'DA001';
  const [questionData,setQuestionData] = React.useState([{}]);
  console.log("PID1",PID,"AID1",AID);
  const [chiefForm, setChiefForm] = React.useState({
      source_id:'',
      patient_id:'',
      formName:'CHIEF_COMPLAINT',
      Questions: [{}],
      submittedBy:DoctorID,
      createdBy:DoctorID,
      updatedBy:'',
      createdAt:new Date(),
      updatedAt:new Date()
  })

  const classes = useStyles();
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   console.log("PID",currentData.patientId);
  //   console.log('currentIN');
  // });
  //setChiefForm({...chiefForm,source_id:currentData.appointmentId,patient_id:currentData.patientId});
  //====onChnage
  const handleProgressionChange = (event) => {
    setProgression({...Progression,question:event.target.name,answer:event.target.value});
  };
  //console.log(Progression);
  const handleProgressionTypeChange = (event) => {
    setProgressionType({...ProgressionType,question:event.target.name,answer:event.target.value});
  };
  //console.log(ProgressionType);
  const handlePatientPerceptionChange = (event) => {
    setPatientPerception({...PatientPerception,question:event.target.name,answer:event.target.value});
  };
  
  const handleRadioChange = (event) => {
    event.preventDefault();
    setValue({...value,question:event.target.name,answer:event.target.value});
  };
  
    const onChief = event =>{
      event.preventDefault();
      setChiefData({...chiefData,question:event.target.name,answer:event.target.value});
      //console.log(chiefData);
    }
    const onDay = event =>{
      event.preventDefault();
      setDayDuration({...dayDuration,question:event.target.name,answer:valuetext});
    }
    console.log("day",dayDuration);
    const onWeek = event =>{
      event.preventDefault();
      setWeekDuration({...weekDuration,question:event.target.name,answer:event.target.value});
      //console.log(chiefData);
    }
    const onMonth = event =>{
      event.preventDefault();
      setMonthDuration({...monthDuration,question:event.target.name,answer:event.target.value});
      //console.log(chiefData);
    }
    const onYear = event =>{
      event.preventDefault();
      setYearDuration({...yearDuration,question:event.target.name,answer:event.target.value});
      //console.log(chiefData);
    }
    const onAggrative = event =>{
      event.preventDefault();
      setAggrative({...aggrative,question:event.target.name,answer:event.target.value});
      //console.log(chiefData);
    }
    const onRelieving = event =>{
      event.preventDefault();
      setRelieving({...Relieving,question:event.target.name,answer:event.target.value});
      //console.log(chiefData);
    }
    const onAllergy = event =>{
      event.preventDefault();
      setAllergy({...allergy,question:event.target.name,answer:event.target.value});
      //console.log(chiefData);
    }

    useEffect(() => {
      setQuestionData([chiefData,value,Progression,ProgressionType,PatientPerception,aggrative,Relieving,allergy]);

    }, [dayDuration,chiefData,value,Progression,ProgressionType,PatientPerception,aggrative,Relieving,allergy])
    
    useEffect(()=>{
      setChiefForm({...chiefForm,Questions:questionData})
      //setChiefForm({...chiefForm,"patient_id":currentData.patientId,"source_id":currentData.appointmentId})
    },[questionData])

    useEffect(()=>{
      setChiefForm({...chiefForm,patient_id:PID,source_id:AID})
    },[PID])
    useEffect(()=>{
      dispatch(chiefFormData(chiefForm));
    },[chiefForm])
    console.log(chiefForm);
  //---------------------  
    // axios({
    //   url:"http://localhost:8080/api/PatientForm",
    //   method:'POST',
    //   data:chiefForm
    // })
    // .then(()=>{
    //   console.log('Data has been sent');
    // })
    // .catch(()=>{
    //   console.log('Data has not been sent');
    // })
  return (
    <Paper elevation={10} className={classes.paperStyle}>
      <div>
        <Grid container justify="center">
          <h2>Chief Complaint</h2>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Cheif Complaint"
                variant="outlined"
                name="Cheif Complaint"
                value={chiefData.answer||''}
                onChange={onChief}
              />
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="Situation"
                  value={"sudden"}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="sudden"
                    control={<Radio />}
                    label="Sudden"
                  />
                  <FormControlLabel
                    value="incidious"
                    control={<Radio />}
                    label="Incidious"
                  />
                </RadioGroup>
              </FormControl>
            </form>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Progression
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={Progression.answer}
                name="Progression"
                onChange={handleProgressionChange}
                label="Progression"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Ten"}>Low Impact</MenuItem>
                <MenuItem value={"Twenty"}>Medium Impact</MenuItem>
                <MenuItem value={"Thirty"}>High Impact</MenuItem>
              </Select>
            </FormControl>
            <div className={classes.root}>
              <Typography id="discrete-slider" gutterBottom>
                Duration (Day)
              </Typography>
              <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                name="Duration (Day)"
                onChange={onDay}
                ///value={dayDuration.answer}
                step={1}
                marks={day}
                min={1}
                max={6}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Progression Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="ProgressionType"
                value={ProgressionType.answer}
                onChange={handleProgressionTypeChange}
                label="ProgressionType"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Twenty"}>Normal</MenuItem>
                <MenuItem value={"thirty"}>Critical</MenuItem>
                <MenuItem value={"thirty"}>Very Critical</MenuItem>
              </Select>
            </FormControl>
            <div className={classes.root}>
              <Typography id="discrete-slider" gutterBottom>
                Duration (Week)
              </Typography>
              <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={weeks}
                min={0}
                max={4}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Slider}>
              <Typography id="discrete-slider" gutterBottom>
                Duration (Month)
              </Typography>
              <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="1"
                step={1}
                marks={months}
                min={1}
                max={12}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Slider}>
              <Typography id="discrete-slider" gutterBottom>
                Duration (year)
              </Typography>
              <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={years}
                min={1}
                max={10}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
          <TextField className={classes.factor}
                id="outlined-basic"
                label="Aggravating Factors"
                variant="outlined"
                name="Aggravating Factors"
                value={aggrative.answer}
                onChange={onAggrative}
              />
          </Grid>
          <Grid item xs={6}>
          <TextField className={classes.factor}
                id="outlined-basic"
                label="Relieving Factors"
                variant="outlined"
                name="Relieving Factors"
                value={Relieving.answer}
                onChange={onRelieving}
              />
          </Grid>
          <Grid item xs={6}>
          <FormControl variant="outlined" className={classes.factor}>
              <InputLabel id="demo-simple-select-outlined-label">
              Patient Perception
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="Patient Perception"
                value={PatientPerception.answer}
                onChange={handlePatientPerceptionChange}
                label="PatientPerception"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>High</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>Low</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
          <TextField className={classes.factor}
                id="outlined-basic"
                label="Allergy"
                variant="outlined"
                name="Allergy"
                value={allergy.answer}
                onChange={onAllergy}
              />
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
export default ChiefComplaint;
