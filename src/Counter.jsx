import React, { useState, useEffect } from 'react';


// inputs, controlled inputs, where should state go?

class Counter extends React.Component {
    constructor(props) {
        super(props); // gives me a `this.props`
        // set intital state
        this.state = {
            howMuch: 3.14159
        };
    }
    
    render() {    
        return (
            <div>
                <h1>A Counter !</h1>
                <p>
                    <input 
                        type="number"
                        value={this.state.howMuch}
                        onChange={(e) => {
                            let n = this.state.howMuch;
                            try {
                                n = parseFloat(e.target.value);
                            } catch (e) {
                                console.log('whoops!')
                            }
                            this._setHowMuch(n);
                        }}
                    />
                    <button onClick={(e) => this.props.decrement(this.state.howMuch)}>-</button>
                    {this.props.count}
                    <button onClick={(e) => this.props.increment(this.state.howMuch)}>+</button>
                </p>
            </div>
        )
    }

    _setHowMuch = (howMuch) => {
        // arrow functions "autobind" `this`
        this.setState({
            howMuch
        }, () => {
            console.log(`updated howMuch to ${this.state.howMuch}`);
        });
    }
}

export default Counter;