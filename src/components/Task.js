import React from 'react';

// this component is  for reuse. I ll create one component for Task and used in parent cpmponent (App.js)
const Task = props => {
  return (
    <div>
      <span class="text-primary">
        {' '}
        <h3>{props.message}</h3>
      
        )}
      </span>
    </div>
  );
};

export default Task;
