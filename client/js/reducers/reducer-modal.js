const init = {
    modalOpen: false,
    label: "",
    error: false
}

export default function(state = init, action) {
    switch(action.type) {
        case('TOGGLE_MODAL'):
            var next_state = {
                modalOpen: !state.modalOpen,
                label: "",
                error: false
            };
            return next_state;
            break;
        case('TYPING'):
            var next_state = {
                modalOpen: state.modalOpen,
                label: action.payload,
                error: false
            };
            return next_state;
            break;
        case('ADD_TASK_REJECTED'):
            var next_state = {
                modalOpen: state.modalOpen,
                label: action.payload,
                error: true
            };
            return next_state;
            break;
        case('ADD_TASK_FULFILLED'):
            var next_state = {
                modalOpen: !state.modalOpen,
                label: action.payload,
                error: false
            };
            return next_state;
            break;
    }
    return state;
}