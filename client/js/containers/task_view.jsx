import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Task from '../components/task.jsx';
import AddTask from './add_task.jsx';
import { getTasks } from '../actions/get-tasks';
import { deleteTask } from '../actions/delete-task';
import { toggleComplete } from '../actions/toggle-complete';
import '../../styles/task_view.css';

class TaskView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        // form handling: https://reactjs.org/docs/forms.html
        const self = this;
        return (
            <div className='container'>
                <div className='task_view'>
                    {
                        this.props.tasks.map(function(task) {
                            return <Task 
                                key={task._id} 
                                data={task} 
                                handleDelete={self.props.deleteTask}
                                handleComplete={self.props.toggleComplete}
                            />
                        })
                    }
                </div>
                <AddTask />
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getTasks: getTasks,
        deleteTask: deleteTask,
        toggleComplete: toggleComplete
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, matchDispatchToProps) (TaskView);