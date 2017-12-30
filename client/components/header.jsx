import React from 'react';
import ReactDOM from 'react-dom';
import './styles/header.css';
import { Progress, Icon } from 'semantic-ui-react';



export default class Header extends React.Component {
    render() {
        var date = new Date();
        var tasks = this.props.num_tasks + ' task' + (this.props.num_tasks==1?"":"s");
        console.log(tasks);
        return (
            <div className='header'>
                <h6>{tasks}</h6>
                <h1>My Tasks</h1>
                <Progress className='progress' percent={40} size='tiny' color='blue' indicating/>
                <p>{date.toDateString()}</p>
            </div>
        );
    }
}