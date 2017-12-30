import React from 'react';
import Task from './task.jsx';
import Axios from 'axios';
import AddTask from './add_task.jsx';
import './styles/task_view.css';

export default class TaskView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[],
        };
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(new_task) {
        var updated_tasks = this.state.tasks;
        updated_tasks.push(new_task);
        this.setState(
            {
                tasks: updated_tasks
            }
        );
    }

    // removes task from db
    deleteTask(id) {
        //const self = this; // "this" doesn't refer to this component within the context of an axios call
        Axios.delete('http://localhost:3000/api/tasks/'+id);
        this.setState(
            {
                tasks: this.state.tasks.filter(task => task._id !== id)
            }
        );
    }

    render() {
        // form handling: https://reactjs.org/docs/forms.html
        const self = this;
        console.log('render task view');
        return (
            <div className='container'>
                <div className='task_view'>
                    {
                        this.state.tasks.map(function(item, index) {
                            return <Task key={index} data={item} deleteTask={self.deleteTask}/>
                        })
                    }
                </div>
                <AddTask addTask={this.addTask}/>
            </div>
        );
    }

    componentDidMount() {
        const self = this; // "this" doesn't refer to this component within the context of an axios call
        Axios.get('http://localhost:3000/api/tasks').then(function(response) {
            self.setState (
                {
                    tasks: response.data
                }
            );
        });
    }
}