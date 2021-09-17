import ReactDOM from "react-dom";
import * as React from 'react';
import { DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import { DateTimePicker } from "@syncfusion/ej2-calendars";
import { Inject, ScheduleComponent, Day,  Week, WorkWeek, Month, Agenda, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import { ButtonProps } from "@syncfusion/ej2-popups";

export default () => {
    return ( 
    <div className='agendas'>
        <ScheduleComponent currentView='Week'>
            <ViewsDirective>
                <ViewDirective option='Week'/>
                <ViewDirective option='Day'/>
            </ViewsDirective>
            <Inject services={[Week, Day]}/>
        </ScheduleComponent>
    </div>
    );
}

