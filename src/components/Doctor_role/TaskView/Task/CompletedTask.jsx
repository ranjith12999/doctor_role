import React from'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    transition: "0.3s",
    borderRadius : 10,
    margin : '10px',
    padding: '0.5rem',
    boxShadow: "10px 10px 5px grey",
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

function CompletedTask(){
    const classes = useStyles();
    return(
        <Grid>
          <Grid item xs={12}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      <Grid item spacing={2}>
                        <Grid container>
                          <Grid item xs={2} >
                            <b>Patient ID: </b>PID001
                          </Grid>
                          <Grid item xs={2} >
                            <b>Appointment ID: </b>APID001
                          </Grid>
                          <Grid item xs={2} >
                            <b>Patient Name: </b>Abishek
                          </Grid>
                          <Grid item xs={2} >
                            <b>Chief Complaint: </b>Fever
                          </Grid>
                          <Grid item xs={2} >
                            <b>Status: </b>COMPLETED
                          </Grid>
                          <Grid item xs={2} container justify="flex-end">
                            <Button variant="contained" color="primary" size="small" disabled >Screen</Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Typography>
                </CardContent>
            </Card>
          </Grid> 
      </Grid>
    )
}

export default CompletedTask;