export default function(state = [], action) {
    switch(action.type) {
        case('FETCH_TASKS_FULFILLED'):
            return action.payload.data;
            break;
        case('ADD_TASK_FULFILLED'):
            console.log('tasks reducer');
            var next_state = state.slice();
            next_state.push(action.payload.data);
            return next_state;
            break;
        case('DELETE_TASK_FULFILLED'):
            var next_state = state.filter(task => task._id !== action.payload.data._id);
            return next_state;
            break;
        case('TOGGLE_COMPLETE_FULFILLED'):
            var next_state = state.map((task) => {
                if(task._id === action.payload.data._id) {
                    return action.payload.data;
                }
                return task;
            });
            return next_state;
            break;
    }
    return state;
}