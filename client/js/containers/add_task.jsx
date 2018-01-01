import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Modal, Form } from 'semantic-ui-react';
import { toggleModal } from '../actions/toggle-modal';
import { addTask } from '../actions/add-task';
import { typing } from '../actions/typing';

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const self = this
        this.props.addTask(this.props.modal.label).then(function() {
            if(!self.props.modal.error) {
                this.props.toggleModal();
            }
        });
    }

    handleChange(event) {
        //console.log(event);
        this.props.typing(event.target.value);
    }

    render() {
        const data = this.props;
        return(
        <Modal 
            dimmer='blurring' 
            trigger = {<p onClick={data.toggleModal} >+ New Task</p>}
            open={data.modal.modalOpen}
            onClose={data.toggleModal}
        >
                <Modal.Header>Add New Task</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                        {data.modal.error?
                            <Form.Field focus onChange={this.handleChange} error>
                                <label>Enter Task</label>
                                <input placeholder='New Task...' />
                            </Form.Field>:
                            <Form.Field focus onChange={this.handleChange}>
                                <label>Enter Task</label>
                                <input placeholder='New Task...' />
                            </Form.Field>
                        }
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleModal: toggleModal,
        addTask: addTask,
        typing: typing
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddTask)