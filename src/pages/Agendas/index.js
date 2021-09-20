import ReactDOM from "react-dom";
import * as React from 'react';
import { DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import { DateTimePicker } from "@syncfusion/ej2-calendars";
import TodoForm from '../../components/TodoForm';
import { Link } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import Navbar from '../../components/Navbar';

export default () => {

    return ( 
        <>
        <Navbar/>
        <div className='todo-app'>
            <TodoList />
        </div>
        </>
    );
}
