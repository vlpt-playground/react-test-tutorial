import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { onIncrease, onDecrease, value } = this.props;
    return (
      <div>
        <h1>카운터</h1>
        <h2>{value}</h2>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;