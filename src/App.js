import React, { Component, useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import logo from './logo.svg';
import { API } from './config';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [task1, setTask1] = useState([]);
  const [task2, setTask2] = useState([]);
  const [task3, setTask3] = useState([]);
  const [task4, setTask4] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
    task1Service();
    task2Service();
    task3Service();
  };

 /*  CALL TO TASK1 API SERVICE */
  const task1Service = () => {
    return fetch(`${API}/task1s`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(data => setTask1(data))
      .catch(err => console.log(err));
  };

/*  CALL TO TASK2 API SERVICE */
  const task2Service = () => {
    return fetch(`${API}/task2s`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(data => setTask2(data))
      .catch(err => console.log(err));
  };

  /*  CALL TO TASK3 API SERVICE */
  const task3Service = () => {
    return fetch(`${API}/task3s`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(data => setTask3(data))
      .catch(err => console.log(err));
  };

  /*  CALL TO TASK4 API SERVICE */
  const task4Service = () => {
    return fetch(`${API}/task4s`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(data => setTask4(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
   /* task1Service();
     task2Service();
    task3Service();
    task4Service(); */
  });

  return (
    <div class="container">
      <div class="row ">
        <div class="col-md-6 offset-md-3">
          <div class="row">
            <img
              class="rounded img"
              alt="..."
              src={logo}
              className="App-logo"
              alt="logo"
            />
          </div>
          <div class="row">
            <Button color="primary" onClick={toggle}>
              Do. Or do not. There is no try.
            </Button>
          </div>
        </div>

        <div class="row">
        
          <div class="col-md-12">
            {loading ? <h2>Loading ....</h2> : ''}
            <div class="row text-center">
              <div class="">
                <Collapse isOpen={isOpen}>
                  <div>
                    <h4>
                      Which of all Star Wars movies has the longest opening
                      crawl
                    </h4>
                    <span  class="text-primary">
                    {task1.map(list => {
                      return (
                        <dd key={list.id}>
                          <dt>{list.title}</dt>
                        </dd>
                      );
                    })}
                    </span>
                  </div>
                  {/* END OF TASK 1 VIEW */}
                  <div>
                    <h5>
                      What character appeared in most of the Star Wars films?
                    </h5>
                    <span  class="text-primary">
                    {task2.map(list => {
                      return (
                        <dd key={list.id}>
                          <dt>{list.name}</dt>
                        </dd>
                      );
                    })}
                    </span>
                  </div>
                  {/* END OF TASK 2 VIEW */}
                  <div>
                    <h4>
                      What species appeared in the most number of Star Wars
                      films?
                    </h4>
                    <span  class="text-primary">
                    {task3.map(list => {
                      return (
                        <dd key={list.people_species.id}>
                          <dt>{list.people_species.title} ( {list.people_species.nbrPeople})</dt>
                        </dd>
                      );
                    })}
                    </span>
                  </div>
                  {/* END OF TASK 3 VIEW */}

                  <div>
                    <h4>
                    What planet in Star Wars universe provided largest number of vehicle pilots?
                    </h4>
                    <span  class="text-primary">
                    {task1.map(list => {
                      return (
                        <dd key={list.id}>
                          <dt>{list.title}</dt>
                        </dd>
                      );
                    })}
                    </span>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//}
export default App;
