
import { API } from '../configuration/config';

 /*  CALL TO TASK1 API SERVICE */
 export const task1Api = () => {
    return fetch(`${API}/task1s`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
    //  .catch(err => console.log(err));
  };

/*  CALL TO TASK2 API SERVICE */
export const task2Api = () => {
    return fetch(`${API}/task2s`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
    //  .catch(err => console.log(err));
  };

  /*  CALL TO TASK3 API SERVICE */
  export const task3Api = () => {
    return fetch(`${API}/task3s`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
     // .catch(err => console.log(err));
  };

  /*  CALL TO TASK4 API SERVICE */
 export const task4Api = () => {
    return fetch(`${API}/task4s`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
    //  .catch(err => console.log(err));
  };

