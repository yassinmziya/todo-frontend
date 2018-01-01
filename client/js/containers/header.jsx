import React from 'react';
import ReactDOM from 'react-dom';
import { Progress, Icon } from 'semantic-ui-react';
import '../../styles/header.css';



export default class Header extends React.Component {
    render() {
        var date = new Date();
        return (
            <div className='header'>
                <h6>12</h6>
                <h1>My Tasks</h1>
                <Progress className='progress' percent={40} size='tiny' color='blue' indicating/>
                <p>{date.toDateString()}</p>
            </div>
        );
    }
}