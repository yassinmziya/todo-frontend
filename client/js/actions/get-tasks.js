import Axios from 'axios';

export const getTasks = () => {
    /*Axios.get('http://localhost:3000/api/tasks').then(function(response) {
        console.log(response);
        return {
            type: "GET_TASKS",
            payload: response.data
        }
    });*/

    // asynchronous actions: https://www.youtube.com/watch?v=Td-2D-_7Y2E&list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt&index=6
    return {
        type: "FETCH_TASKS",
        payload: Axios.get('http://localhost:3000/api/tasks')
    }
}