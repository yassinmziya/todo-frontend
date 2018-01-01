import { combineReducers } from 'redux';
import TasksReducer from './reducer-tasks';
import ModalReducer from './reducer-modal';

const allReducers = combineReducers({
    tasks: TasksReducer,
    modal: ModalReducer
}); 

export default allReducers;