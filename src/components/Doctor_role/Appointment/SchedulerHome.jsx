import Scheduler from './Scheduler';
import React,{useEffect,useState} from 'react'
import axios from 'axios';

function SchedulerHome(){
    const [eventData, setEventData] = useState([]);
    const [status, setStatus] = useState(false);
    const doctor_id = 'DA001'
    useEffect(()=>{
        if(eventData.length==0){
            axios.get('/api/getCurrentEvent')
            .then((response)=>{
                const data = response.data;
                console.log("event Data is recieved");
                data.map((val)=>{
                    if(val.doctor_id===doctor_id){
                        console.log('d',val.doctor_id);
                        setEventData(val.eventData);
                    }
                })
            })
            .catch(()=>{
                alert("data have n't recieved");
            })
            console.log('e',eventData);
        }
    })
    //if(eventData.length!==0){
        //const data = eventData;
        const data = [
            {"start_date":"2021-03-17T04:30:00.000Z","end_date":"2021-03-17T12:30:00.000Z","text":"Event 2","id":2,"_timed":true,"_sday":5,"_inner":false,"_sorder":0,"_count":1},{"start_date":"2021-03-19T07:30:00.000Z","end_date":"2021-03-19T07:35:00.000Z","text":"New event","id":1615733340706,"_timed":true,"_sday":3,"_inner":false,"_sorder":0,"_count":1},{"start_date":"2021-03-16T01:55:00.000Z","end_date":"2021-03-16T02:00:00.000Z","text":"New event","id":1615738964686,"_timed":true,"_sday":3,"_inner":false,"_sorder":0,"_count":1}
        ];
        console.log('d',data);
    //}
    return(
        <Scheduler events={data}/>   
    ) 
        
}

export default SchedulerHome;