import ReactDOM from "react-dom";
import * as React from 'react';
import { DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import { DateTimePicker } from "@syncfusion/ej2-calendars";
import TodoForm from '../../components/TodoForm';
import { Link } from 'react-router-dom';

//import { SampleBase } from './sample-base';
/**
 * schedule resources group sample
 */
/*export class Grupo extends SampleBase {
    constructor() {
        super(...arguments);
        this.resourceData = [
            { AirlineName: 'Airways 1', AirlineId: 1, AirlineColor: '#EA7A57' },
            { AirlineName: 'Airways 2', AirlineId: 2, AirlineColor: '#357cd2' },
            { AirlineName: 'Airways 3', AirlineId: 3, AirlineColor: '#7fa900' }
        ];
    }
    getAirlineImage(value) {
        let airlineName = this.getAirlineName(value);
        return airlineName.replace(' ', '-').toLowerCase();
    }
    getAirlineName(value) {
        return ((value.resourceData) ?
            value.resourceData[value.resource.textField] :
            value.resourceName);
    }
    getAirlineModel(value) {
        let airlineName = this.getAirlineName(value);
        return (airlineName === 'Airways 1') ? 'CRJ 700' : (airlineName === 'Airways 2') ? 'Airbus A330' : 'ATR 72-600';
    }
    getAirlineSeats(value) {
        let airlineName = this.getAirlineName(value);
        return (airlineName === 'Airways 1') ? 50 : (airlineName === 'Airways 2') ? 75 : 100;
    }
    resourceHeaderTemplate(props) {
        return (<div className="template-wrap"><div className={"airline-image " + this.getAirlineImage(props)}></div>
            <div className="airline-details"><div className="airline-name">{this.getAirlineName(props)}</div>
                <div className="airline-model"> Model no: {this.getAirlineModel(props)}</div>
                <div className="airline-seats"> No.of seats: {this.getAirlineSeats(props)}</div></div></div>);
    }
    render() {
        return (<div className='schedule-control-section'>
                <div className='col-lg-12 control-section'>
                    <div className='control-wrapper'>
                        <div className='schedule-demo-heading'>
                            Flight timings between Barcelona and Los Angeles
                        </div>
                        <ScheduleComponent cssClass='schedule-group' width='100%' height='650px' selectedDate={new Date(2018, 3, 1)} eventSettings={{
            dataSource: this.generateEvents(), fields: {
                subject: { title: 'Travel Summary', name: 'Subject' },
                location: { title: 'Source', name: 'Location' },
                description: { title: 'Comments', name: 'Description' },
                startTime: { title: 'Departure Time', name: 'StartTime' },
                endTime: { title: 'Arrival Time', name: 'EndTime' }
            }
        }} group={{ resources: ['Airlines'] }} resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}>
                            <ResourcesDirective>
                                <ResourceDirective field='AirlineId' title='Airline Name' name='Airlines' allowMultiple={true} dataSource={this.resourceData} textField='AirlineName' idField='AirlineId' colorField='AirlineColor'>
                                </ResourceDirective>
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option='Week'/>
                                <ViewDirective option='Month'/>
                                <ViewDirective option='Agenda'/>
                            </ViewsDirective>
                            <Inject services={[Week, Month, Agenda, Resize, DragAndDrop]}/>
                        </ScheduleComponent>
                    </div>
                </div>
            </div>);
    }
}


export default () =>{
    ReactDOM.render(<Grupo />, document.getElementById('sample'));
}*/


import { Inject, ScheduleComponent, Day,  Week, WorkWeek, Month, Agenda, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import { ButtonProps } from "@syncfusion/ej2-popups";
import TodoList from '../../components/TodoList';

export default () => {

    /*var localData = [
        {
            Id:1,
            Subject: 'John',
            StartTime: new Date(2021, 9, 8, 6, 0),
            EndTime: new Date(2021, 9, 8, 7,0)
        }
    ]

    function editorWindowTemplate(){
       return (
        <table className="Custom-event-editor">
            <tbody>
                <tr>
                   <td className="e-textlabel">Sumamary</td>
                   <td><input id="Summary" name="Subject" type="text"/></td>
                </tr>
                <tr>
                   <td className="e-textlabel">Status</td>
                   <td>
                        <DropDownListComponent id="EventType" dataSource={['Alongamento', 'Yoga', 'Musculação']} placeholder="Choose status">
                        </DropDownListComponent>
                   </td>
                </tr>
                <tr>
                    <td className="e-textlabel">From</td>
                    <td>
                        <DateTimePicker format='dd/MM/yyy hh:mm a'>
                        </DateTimePicker>
                    </td>
                </tr>
                <tr>
                   <td className="e-textlabel">To</td>
                   <td>
                   <DateTimePicker id="EndTime" data-name="EndTime"
                       format='dd/MM/yyy hh:mm a'>
                    </DateTimePicker>
                    </td>
                </tr>
                <tr>
                   <td className="e-textlabel">Reason</td>
                   <td>
                    <textarea  id="Description" name="Description" rows={3} cols={50}>
                        
                    </textarea>
                   </td>
                </tr>
            </tbody>
        </table>
       )
    }*/

    return ( 
       //<div className='agendas'>
            /*<ScheduleComponent currentView='Week'>
                <ViewsDirective>
                    <ViewDirective option='Week'/>
                    <ViewDirective option='Day'/>
                </ViewsDirective>
                <Inject services={[Week, Day]}/>
            </ScheduleComponent>*/
       //</div>
        <div className='todo-app'>
            <TodoList />
        </div>
    );
}
