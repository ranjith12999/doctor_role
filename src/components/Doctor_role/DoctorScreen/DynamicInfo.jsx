import React,{useState,useEffect} from 'react';
import OtherInfo from './OtherInfo';
import Grid from "@material-ui/core/Grid";

export default function DynamicInfo() {
    // const [dlist,setDlist] = useState([
    //    {index:Math.random(),Questions:[{questions}]} 
    // ])
    return (
        <div>
            <Grid container>
                <h1>Patient Other Info</h1>
            </Grid>
            <Grid container>
                <OtherInfo/>
            </Grid>
        </div>
    )
}
