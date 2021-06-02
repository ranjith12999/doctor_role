import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import patientOtherData from '../../../store/actions/patientOtherFormAction.types';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "75ch",
      marginRight: 700,
    },
  },
  factor: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
      marginRight: 700,
    },
  },
  addbutton: {
    marginLeft: 300,
  },
  removebutton: {
    marginLeft: 25,
  },
  Slider: {
    width: 400,
  },
  paperStyle: {
    padding: 15,
    height: "80vh",
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
function valuetext(value) {
  return `${value}`;
}
function OtherInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const PID= useSelector(state=>state.formData.formData.patientId);
  const AID= useSelector(state=>state.formData.formData.appointmentId);
  const DoctorID = 'DA001';
  //console.log("PID1",PID,"AID1",AID);
  const [otherInfo, setOtherInfo] = React.useState({
    source_id:'',
    patient_id:'',
    formName:'PATIENT_OTHER_INFO',
    Questions: [{}],
    submittedBy:DoctorID,
    createdBy:DoctorID,
    updatedBy:'',
    createdAt:new Date(),
    updatedAt:new Date()
  })
  const [dlist,setDlist] = useState([
    {
      index:Math.random(),
      Questions:[
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        }
      ]
    } 
  ]);
  const [qIndex,setQindex] = useState(0);
  const [questionData,setQuestionData] = React.useState([{}]);
  const [disease, setDisease] = useState({});
  const [medication, setMedication] =useState({});
  // const [count,setCount] = React.useState(1);

  //onChange functions
  const onDisease = (event,i) => {
    // console.log('question',event.target.name);
    // console.log('answer',event.target.value);
    let newDlist = Object.assign(dlist);
    let questionArray = newDlist[i].Questions;
    //console.log('qa',questionArray);
    questionArray[0] = {question:event.target.name,answer:event.target.value}
    //setQindex(qIndex+1);
    newDlist[i].Questions = questionArray;
    setDlist([...newDlist]);
    // console.log('newDlist',newDlist);
  }
  const onMedication = (event,i) => {
    // console.log('question',event.target.name);
    // console.log('answer',event.target.value);
    let newDlist = Object.assign(dlist);
    let questionArray = newDlist[i].Questions;
    //console.log('qa',questionArray);
    questionArray[1] = {question:event.target.name,answer:event.target.value}
    //setQindex(qIndex+1);
    newDlist[i].Questions = questionArray;
    setDlist([...newDlist]);
  }
  const onTreatment = (event,i) => {
    let newDlist = Object.assign(dlist);
    let questionArray = newDlist[i].Questions;
    //console.log('qa',questionArray);
    questionArray[2] = {question:event.target.name,answer:event.target.value}
    newDlist[i].Questions = questionArray;
    setDlist([...newDlist]);
  }
  
  const onPhysician = (event,i) => {
    let newDlist = Object.assign(dlist);
    let questionArray = newDlist[i].Questions;
    //console.log('qa',questionArray);
    questionArray[3] = {question:event.target.name,answer:event.target.value}
    newDlist[i].Questions = questionArray;
    setDlist([...newDlist]);
  }
  const onAllergy = (event,i) => {
    let newDlist = Object.assign(dlist);
    let questionArray = newDlist[i].Questions;
    //console.log('qa',questionArray);
    questionArray[4] = {question:event.target.name,answer:event.target.value}
    newDlist[i].Questions = questionArray;
    setDlist([...newDlist]);
  }
  const onDallergy = (event,i) => {
    let newDlist = Object.assign(dlist);
    let questionArray = newDlist[i].Questions;
    //console.log('qa',questionArray);
    questionArray[5] = {question:event.target.name,answer:event.target.value}
    newDlist[i].Questions = questionArray;
    setDlist([...newDlist]);
  }
  const onPeptDisease = (event,i) => {
    let newDlist = Object.assign(dlist);
    let questionArray = newDlist[i].Questions;
    //console.log('qa',questionArray);
    questionArray[6] = {question:event.target.name,answer:event.target.value}
    newDlist[i].Questions = questionArray;
    setDlist([...newDlist]);
  }
  // const onMedication = event =>{
    //   event.preventDefault();
    //   setMedication({...medication,question:event.target.name,answer:event.target.value});
    // }
    
    
    //-----------------
    const onAddElement=(event)=>{
      setDlist([...dlist,{index:Math.random(),Questions:[{
        question:'',
        answer:''
      },
      {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        },
        {
          question:'',
          answer:''
        }]}])
      }
      
      
      const onDeleteElement=(index)=>{
        setDlist(dlist.filter((sindex)=>index !== sindex))
      }
      
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      //useEffect
      // useEffect(()=>{
        //   setQuestionData([disease,medication])
        // },[disease,medication])
        
        // useEffect(()=>{
          //   setDlist([...dlist,{Questions:questionData}])
          // },[questionData])
          // console.log("dlist",dlist);
          
          useEffect(()=>{
            setOtherInfo({...otherInfo,Questions:dlist,source_id:AID,patient_id:PID})
          },[dlist])
          //----
          console.log('newDlist',dlist);
          console.log('other',otherInfo);
          useEffect(()=>{
            dispatch(patientOtherData(otherInfo));
          },[otherInfo])
          
  return (
    dlist.map((val,i)=>{
      return(
        <div key={val.index}>
       <Paper elevation={10} className={classes.paperStyle}>
         <Grid container justify="center">
          <h2>Other Info</h2>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Diseases"
              variant="outlined"
              name="diseases"
              value={dlist[i].Questions[0].answer}
              onChange={(event)=>{onDisease(event,i)}}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.addbutton}
              onClick={onAddElement}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.removebutton}
              onClick={()=>{onDeleteElement(val)}}
            >
              Remove
            </Button>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Slider}>
              <Typography id="discrete-slider" gutterBottom>
                Duration (Day)
              </Typography>
              <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={day}
                min={1}
                max={6}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Slider}>
              <Typography id="discrete-slider" gutterBottom>
                Duration (week)
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
                valueLabelDisplay="auto"
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
            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Medication"
              variant="outlined"
              name="medication"
              value={dlist[i].Questions[1].answer}
              onChange={(event)=>{onMedication(event,i)}}
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <div className={classes.Slider}>
              <Typography id="discrete-slider" gutterBottom>
                Duration (Day)
              </Typography>
              <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={day}
                min={1}
                max={6}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Slider}>
              <Typography id="discrete-slider" gutterBottom>
                Duration (week)
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
                valueLabelDisplay="auto"
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
            <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Previous Treatment"
              variant="outlined"
              name="previousTreatment"
              value={dlist[i].Questions[2].answer}
              onChange={(event)=>{onTreatment(event,i)}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Drug allergy"
              variant="outlined"
              name="drugAllergy"
              value={dlist[i].Questions[4].answer}
              onChange={(event)=>{onAllergy(event,i)}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Physician"
              variant="outlined"
              name="Physician"
              value={dlist[i].Questions[3].answer}
              onChange={(event)=>{onPhysician(event,i)}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Details of Drug Allergy"
              variant="outlined"
              name="detailedDrugAllergy"
              value={dlist[i].Questions[5].answer}
              onChange={(event)=>{onDallergy(event,i)}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Acid Peptic Disease"
              variant="outlined"
              name="pepticDisease"
              value={dlist[i].Questions[6].answer}
              onChange={(event)=>{onPeptDisease(event,i)}}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Women of Child bearing"
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
      )
    })
    
  );
}
export default OtherInfo;
