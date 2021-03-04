import React from 'react';
import { useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ChiefComplaint(){
    const paperStyle={padding : 15 , height:'60vh', width:750, margin:"auto"}
    return (
        <Paper elevation={10} style={paperStyle}>
            <div>
                <Grid align='center'>
                    <h2>Chief Complaint</h2>
                </Grid>
                <form>

                </form>
            </div>
        </Paper>
    )
}
export default ChiefComplaint;