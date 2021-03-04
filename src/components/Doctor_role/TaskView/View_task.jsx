import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PendingTask from './Task/PendingTask';
import CompletedTask from './Task/CompletedTask';
import Screen from '../DoctorScreen/Screen';
const useStyles = makeStyles((theme) => ({
  root: {
    alignContent:'center',
    margin:'auto'
  },
}));

export default function ViewTask() {
    const classes = useStyles();
    return (
      <Router>
        <Grid>
          <Grid container justify="center" m={2}>
            <ButtonGroup disableElevation variant="contained" color="secondary" >
              <Button><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/'}>Pending Tasks</Link></Button>
              <Button><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/CompletedTask'}>Completed Tasks</Link></Button>
            </ButtonGroup>
          </Grid>
          <Grid>
            <Switch>
              <Route exact path='/' component={PendingTask}/>
              <Route exact path='/PendingTask' component={PendingTask}/>
              <Route path='/CompletedTask' component={CompletedTask}/>
              <Route path='/Screen' component={Screen}/>
            </Switch>
          </Grid>
        </Grid>
      </Router>        
            
    );
    }