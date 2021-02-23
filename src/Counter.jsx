import React from 'react';

function Counter(props) {
    console.log(props);
    return (
        <div>
            <h1>A Counter!</h1>
        <p>
          <button onClick={(e) => props.decrement(3)}>-</button>
          {props.count}
          <button onClick={(e) => props.increment(4)}>+</button>
        </p>
      </div>
    )
}

export default Counter;