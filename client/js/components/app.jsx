import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../containers/header.jsx';
import TaskView from '../containers/task_view.jsx';
import '../../styles/app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <Header />
                <TaskView />
            </div>
        );
    }
}