import React from 'react';
import ViewTask from './TaskView/View_task';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Appointment/Scheduler.css';
import SchedulerHome from '../Doctor_role/Appointment/SchedulerHome';
import Patient360 from '../Doctor_role/Patient360/Patient360';
import Screen from './DoctorScreen/Screen';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btnPadding: {
      marginTop: 10
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const data = [
    { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1 },
    { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
  ];

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button color="inherit"><Link style={{ color: 'white', textDecoration: 'inherit'}} to={'/'}>Doctor</Link></Button>
            </Typography>
            <Button color="inherit"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/Scheduler'}>Scheduler</Link></Button>
            <Button color="inherit"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/Patient360'}>Patient360</Link></Button>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        <Grid className={classes.btnPadding} >            
            <Switch>
              <Route exact path='/' component={ViewTask}/>
              <Route path='/Patient360' component={Patient360}/>
              <Route path='/Scheduler' component={SchedulerHome}/>
              <Route path='/Screen' component={Screen}/>
            </Switch>
        </Grid>
      </Router>
    </div>
  );
}
