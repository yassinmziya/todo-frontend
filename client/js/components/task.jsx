import React from 'react';
import Axios from 'axios';
import { Icon } from 'semantic-ui-react';
import './styles/task.css';

export default class Task extends React.Component {
    // receives task instance as prop 
    constructor(props) {
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const data = this.props;
        data.handleDelete(data.data._id);
    }

    handleComplete() {
        const data = this.props;
        data.handleComplete(data.data);
    }

    render() {
        const data = this.props;
        console.log(data.data);
        return (
            <div className='card'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p className={data.data.complete?'done':''} onClick={this.handleComplete}>{data.data.label}</p>
                            </td>
                            <td style={{width:'29px', textAlign: 'center'}} onClick={this.handleDelete}> 
                                <Icon name='trash outline' color='grey'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}