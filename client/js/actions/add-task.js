import Axios from 'axios';

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: Axios.post('http://localhost:3000/api/tasks', {label: task})
    }
}