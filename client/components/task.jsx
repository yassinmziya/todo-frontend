import React from 'react';
import Axios from 'axios';
import { Icon } from 'semantic-ui-react';
import './styles/task.css';

export default class Task extends React.Component {
    // receives task instance as prop 
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            label:"", 
            complete:false
        }
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteTask(this.state.id);
    }

    handleComplete() {
        Axios.put('http://localhost:3000/api/tasks/'+this.state.id, {complete:!this.state.complete});
        this.setState({
            complete: !this.state.complete
        });
    }

    componentDidMount() {
        const data = this.props.data;
        this.setState ( {
                id: data._id,
                label: data.label, 
                complete: data.complete
            }
        );
    }

    render() {
        const data = this.props;
        return (
            <div className='card'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p className={this.state.complete?'done':''} onClick={this.handleComplete}>{this.state.label}</p>
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