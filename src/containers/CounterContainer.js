import React, { Component } from 'react';
import * as counterActions from '../store/modules/counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

class CounterContainer extends Component {
  onIncrease = () => {
    const { CounterActions } = this.props;
    CounterActions.increase();
  }
  onDecrease = () => {
    const { CounterActions } = this.props;
    CounterActions.decrease();
  }
  render() {
    const { number } = this.props;
    const { onIncrease, onDecrease } = this;
    return (
      <Counter 
        value={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    );
  }
}

export default connect(
  ({ counter }) => ({
    number: counter.number
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);