import React from 'react';

function Counter(props) {
    return (
        <div>
            <h1>A Counter!</h1>
        <p>
          <button onClick={props.decrement}>-</button>
          {props.count}
          <button onClick={props.increment}>+</button>
        </p>
      </div>
    )
}

export default Counter;