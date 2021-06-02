import React,{useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
//import Protocol from './protocol'
//import Summary from './summary'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import { useDispatch } from "react-redux";
import medicationData from '../../../store/actions/medicationAction.types';
import Pdf from "react-to-pdf";
const ref = React.createRef();
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 1000,
    },
    factor: {
        "& > *": {
          margin: theme.spacing(1),
          width: "50ch",
        //   marginRight: 700,
        },
      },
  }));
  
function Medication(){
    const paperStyle={padding : 15 ,  height:'60vh', width:1000, margin:"auto"}
    const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const DoctorID = 'DA0001';
  const AppointmentData= useSelector(state=>state.formData.formData);
  const [Medication, setMedication] = React.useState({
    source_id:'',
    patient_id:'',
    medication:[{}],
    submittedBy:DoctorID,
    createdBy:DoctorID,
    updatedBy:'',
    createdAt:new Date(),
    updatedAt:new Date()
  })
  const [MedicationData, setMedicationData] = React.useState({
    SuggestedDiagnosis:'',
    FomentationAndOintment:'',
    Activity:'',
    BracesAndaids:'',
    Physiotherapy:'',
    Medicines:''
  })

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // useEffect(()=>{
  //   setMedication({...Medication,source_id:AppointmentData.appointmentId,patient_id:AppointmentData.patientId})
  // },[AppointmentData])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const onChange=(event)=>{
    setMedicationData({...MedicationData,[event.target.name]:event.target.value});
  }
  
  useEffect(()=>{
    setMedication({...Medication,source_id:AppointmentData.appointmentId,patient_id:AppointmentData.patientId,medication:MedicationData})
  },[MedicationData]);
    console.log("Medication",Medication);
  useEffect(()=>{
    dispatch(medicationData(Medication));
  },[Medication])
    return (
        <Paper elevation={8} style={paperStyle} ref={ref}>
            <div className={classes.root}>
              <Grid container justify="center">
                <h2>Medication</h2>
              </Grid>
      {/* <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="PROTOCOL" {...a11yProps(0)} />
          <Tab label="SUMMARY" {...a11yProps(1)} />x
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}> */}
        <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Suggested Diagnosis"
              name="SuggestedDiagnosis"
              variant="outlined"
              value={MedicationData.SuggestedDiagnosis || ''}
              onChange={onChange}
            />
             <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Fomentation & Ointment"
              name="FomentationAndOintment"
              variant="outlined"
              value={MedicationData.FomentationAndOintment || ''}
              onChange={onChange}
            />
            <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Activity Modification & Props"
              name="Activity"
              variant="outlined"
              value={MedicationData.Activity || ''}
              onChange={onChange}
            />
             <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Braces & aids"
              name="BracesAndaids"
              variant="outlined"
              value={MedicationData.BracesAndaids || ''}
              onChange = {onChange}
            />
            <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Physiotherapy"
              name="Physiotherapy"
              variant="outlined"
              value={MedicationData.Physiotherapy || ''}
              onChange = {onChange}
            />
             <TextField
              className={classes.factor}
              id="outlined-basic"
              label="Medicines"
              name="Medicines"
              variant="outlined"
              value={MedicationData.Medicines || ''}
              onChange = {onChange}
            />
            {/* <Pdf targetRef={ref} filename="Prescription.pdf">
              {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf> */}
            <Button type="primary" onClick={showModal}>
              Generate PDF
            </Button>
            <Modal title="Confirmation for PDF Generation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>Do you want to generate PDF?</p>
            </Modal>
        {/* </TabPanel> */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* <Summary/> */}
        </TabPanel>
      {/* </SwipeableViews> */}
    </div>
        </Paper>
    )
}
export default Medication;