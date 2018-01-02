import Axios from 'axios';

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: Axios.delete('http://localhost:3000/api/tasks/' + id)
    }
}