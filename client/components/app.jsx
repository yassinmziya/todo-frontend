import React from 'react';
import ReactDOM from 'react-dom';
import './styles/content.css';
import Header from './header.jsx';
import TaskView from './task_view.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num_tasks: 0,
            complete_tasks: 0
        }
        this.completeTasks = this.completeTasks.bind(this);
        this.totalTasks = this.totalTasks.bind(this);
    }

    totalTasks(flag) {
        this.setState(
            {
                num_tasks: flag>=0?this.state.num_tasks++:this.state.num_tasks--
            }
        );
    }

    completeTasks(flag) {
        this.setState(
            {
                complete_tasks: flag>=0?this.state.complete_tasks++:this.state.complete_tasks--
            }
        );
    }

    render() {
        return (
            <div className='app'>
                <Header num_tasks = {this.state.num_tasks}/>
                <TaskView />
            </div>
        );
    }
}