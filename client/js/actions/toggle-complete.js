import Axios from 'axios';

export const toggleComplete = (task) => {
    var new_data = {
        label: task.label,
        complete: !task.complete
    }
    return {
        type: 'TOGGLE_COMPLETE',
        payload: Axios.put('http://localhost:3000/api/tasks/' + task._id, new_data)
    }
}