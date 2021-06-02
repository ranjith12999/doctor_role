import React, { useState,useEffect } from'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Screen from '../../DoctorScreen/Screen';
import { useDispatch } from "react-redux";
import currentFormData from '../../../../store/actions/currentFormAction.types';
import { useHistory,Link,Route } from "react-router-dom";
import axios from 'axios';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    transition: "0.3s",
    borderRadius : 10,
    padding: '0.5rem',
    margin: '10px',
    boxShadow: "5px 5px 5px grey",
    "&:hover": {
      boxShadow: "10px 16px 70px -12.125px rgba(0,0,0,0.3)"}
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  }, 
  pos: {
    marginBottom: 12,
  },
});

function PendingTask(props){
    //let history = useHistory();
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [taskData, setTaskData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentData, setCurrentData] = useState({
      patientId:'',
      appointmentId:''
    });
    const dispatch = useDispatch();
    useEffect (()=>{
      if(taskData.length==0){
          axios.get('/api/task')
        .then((response)=>{
          const data = response.data;
          console.log("main",data);
          setTaskData(data);
          console.log("data has been recieved");
        })
        .catch(()=>{
          alert("data have n't recieved");
        })
      }
    },[]);
    // if(taskData.AssingendTo==="DA001"){
       console.log('mainData',taskData);
    // } 
    useEffect(()=>{
    const check = Object.keys(taskData||[]);
          if(check.length>0){
            const fData = taskData.filter(a => a.AssingendTo == "DA001"); 
            console.log("oldfData",taskData.filter(a => a.AssingendTo == "DA001"));
            setFilteredData(fData);
          }
          else{
            console.log("errrororor");
          }
    },[taskData])
    console.log("fData",filteredData);
    
      //function onSave(){  
       
      //}

      const onClick = (event,d)=>{
        event.preventDefault();
        console.log("patient_id:",filteredData[d].patient_id);
        console.log("Appointment_id:",filteredData[d].sourceId);
        const data = {patientId:filteredData[d].patient_id,appointmentId:filteredData[d].sourceId};
        console.log("data",data);
        setCurrentData(data);
        console.log("currentData",currentData);
        console.log("event",event.target);
        //dispatch(currentFormData(currentData));
      }
      useEffect(()=>{
        if(currentData.patientId!==''&&currentData.appointmentId!==''){
          console.log("current",currentData);
          dispatch(currentFormData(currentData));
          props.history.push("/Screen");
          }
        },[currentData]);
      
    return (
      <div>
           <Grid>
            {filteredData && filteredData.map((data,i)=>{
            return <Grid item xs={12} key={i}>
              <Card className={classes.root} variant="outlined">
                  <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <Grid item spacing={2}>
                          <Grid container>
                            <Grid item xs={2} >
                              <b>Patient ID: </b>{data.patient_id}
                            </Grid>
                            <Grid item xs={2} >
                              <b>Appointment ID: </b>{data.sourceId}
                            </Grid>
                            <Grid item xs={2} >
                              <b>Patient Name: </b>Abishek
                            </Grid>
                            <Grid item xs={2} >
                              <b>Chief Complaint: </b>Fever
                            </Grid>
                            <Grid item xs={2} >
                              <b>Status: </b>{data.status}
                            </Grid>
                            <Grid item xs={2} container justify="flex-end">
                              <Link onClick={(e)=>{onClick(e,i)}}>
                                <Button variant="contained" color="primary" size="small" key={i} >Screen</Button>
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Typography>
                  </CardContent>
              </Card>
            </Grid>
        })}
          </Grid> 
      
      </div>
    );
}

export default PendingTask;