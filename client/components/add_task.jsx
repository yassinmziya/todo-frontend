import React from 'react';
import Axios from 'axios';
import { Button, Modal, Form } from 'semantic-ui-react';

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            new_task: "",
            modalOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() { this.setState({ modalOpen: true }) }

    handleClose() { this.setState({ modalOpen: false }) }

    handleSubmit(event) {
        const self = this;
        Axios.post('http://localhost:3000/api/tasks',{label:this.state.new_task}).then(function(response) {
            console.log(response);
            self.props.addTask(response.data);
            console.log('~fin~');
        });
        this.setState( 
            {
                new_task: "",
                modalOpen: false
            }
        )
    }

    handleChange(event) {
        console.log(this.state.new_task);
        this.setState(
            {
                new_task: event.target.value
            }
        );
    }

    render() {
        return(
        <Modal 
            dimmer='inverted' 
            trigger = {<p onClick={this.handleOpen} >+ New Task</p>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
        >
                <Modal.Header>Add New Task</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field onChange={this.handleChange}>
                            <label>Enter Task</label>
                            <input placeholder='New Task..' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}