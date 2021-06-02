import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import './Scheduler.css';
import axios from 'axios'; 
const scheduler = window.scheduler;
 
export default class Scheduler extends Component {
    constructor(props) {
    super(props);
    this.state = {
            doctor_id: 'DA001',  
            eventData: [],
            createdBy: '',
            updatedBy: '',
            createdAt: new Date(),
            updatedAt: new Date()
    };
  }
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
        
        //if(this.props.length!==0){}
        scheduler.init(this.schedulerContainer, new Date());
        const { events } = this.props;
        if(events.length!==0){
            scheduler.clearAll();
            scheduler.parse(events);
            const onDataUpdated = this.props.onDataUpdated;
            
            scheduler.attachEvent('onEventAdded', (id, ev) => {
                if (onDataUpdated) {
                    onDataUpdated('create', ev, id);
                    console.log('add',onDataUpdated);
                }
                this.setState({eventData:scheduler.getEvents()});
            });
            
            scheduler.attachEvent('onEventChanged', (id, ev) => {
                if (onDataUpdated) {
                    onDataUpdated('update', ev, id);
                }
                this.setState({eventData:scheduler.getEvents()});
            });
            
            scheduler.attachEvent('onEventDeleted', (id, ev) => {
                if (onDataUpdated) {
                    onDataUpdated('delete', ev, id);
                }
            this.setState({eventData:scheduler.getEvents()});
            });
        }
        scheduler.render();
        
    }
    componentDidUpdate(){
        if(this.state.eventData.length!==0){
            console.log('e',this.state);
            axios({
                url:"http://localhost:8080/api/currentEvent",
                method:'POST',
                data:this.state
            })
            .then((res)=>{
                console.log('eventData has been sent');
            })
            .catch(()=>{
                console.log('eventData has not been sent');
            })
        }
            
    }    
    render() {
        return (
            <div className='scheduler-container'>
                <div
                    ref={ (input) => { this.schedulerContainer = input } }
                    style={ { width: '100%', height: '100%' } }
                ></div>
            </div>
       );
    }
}