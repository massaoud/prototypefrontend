import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import logo from './images/logo.svg';
import { task1Api, task2Api, task3Api, task4Api } from './services/taskService';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task1, setTask1] = useState([]);
  const [task2, setTask2] = useState([]);
  const [task3, setTask3] = useState([]);
  const [task4, setTask4] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (isOpen === false) {
      task1Service();
      task2Service();
      task3Service();
      task4Service();
    }
  };

  /** CALL OF TASK1 SERVICE  */

  const task1Service = task1 => {
    task1Api().then(data => {
      if (data.error) {
        //  setError('data.error');
      } else {
        setTask1(data);
      }
    });
  };
  const task2Service = task2 => {
    task2Api().then(data => {
      if (data && data.error) {
        //  setError('data.error');
      } else {
        setTask2(data);
      }
    });
  };
  const task3Service = task3 => {
    task3Api().then(data => {
      if (data.error) {
        //  setError(data.error);
      } else {
        setTask3(data);
      }
    });
  };
  const task4Service = task4 => {
    task4Api().then(data => {
      if (data && data.error) {
        // setError(data?.error);
      } else {
        setTask4(data);
      }
    });
  };

  return (
    <div className="container">
      <div class="row">
        <div class="col-sm-4 col-md-3"></div>
        <div className="col-sm-4 col-md-6 col-12">
          <div className="row">
            ​
            <picture>
              <img src={logo} className="img-fluid " alt="logo" />
            </picture>
          </div>
        </div>
        <div class="col-sm-4 col-md-3"></div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-md-3"></div>
        <div class=" col-sm-4  col-md-6 col-12">
          <div class="text-center mb-2">
            <button class="btn btn-primary" onClick={toggle}>
              Do. Or do not. There is no try.
            </button>
          </div>
        </div>
        <div class="col-sm-4 col-md-1"></div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-md-1 col-12"></div>
        <div className="col-sm-4 col-md-10 col-12 text-center">
          <Collapse isOpen={isOpen}>
            <div>
              <h5>
                Which of all Star Wars movies has the longest opening crawl
              </h5>
              <span className="text-primary">
                {task1.map(list => {
                  return (
                    <dd key={list.id}>
                      <dt>{list.title}</dt>
                    </dd>
                  );
                })}
              </span>
            </div>
            {/* <Task  message=" Which of all Star Wars movies has the longest opening crawl" content={task1}/> */}
            {/* END OF TASK 1 VIEW */}
            <div>
              <h5>What character appeared in most of the Star Wars films?</h5>
              <span className="text-primary">
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
                What species appeared in the most number of Star Wars films?
              </h4>
              <span className="text-primary">
                {task3.map(list => {
                  return (
                    <dd key={list.people_species.id}>
                      <dt>
                        {list.people_species.title} ({' '}
                        {list.people_species.nbrPeople})
                      </dt>
                    </dd>
                  );
                })}
              </span>
            </div>
            {/* END OF TASK 3 VIEW */}

            <div>
              <h4>
                What planet in Star Wars universe provided largest number of
                vehicle pilots?
              </h4>
              <span className="text-primary">
                {task4.map(list => {
                  return (
                    <dd key={list.id}>
                      <dt>
                        Planet : {list.name} - Pilots : {list.pilots.name} (
                        {list.pilots.id}) - {list.species.name}{' '}
                      </dt>
                    </dd>
                  );
                })}
              </span>
            </div>
          </Collapse>
        </div>
        <div class="col-sm-4 col-md-1 col-12"></div>
      </div>
    </div>
  );
};
//}
export default App;
