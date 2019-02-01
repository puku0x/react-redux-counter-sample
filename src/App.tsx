import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from './store';

import { CounterState } from './store/counter/types';
import { increment, decrement, reset } from './store/counter/actions';

import Counter from './components/Counter';

interface AppProps {
  counter: CounterState;
  increment: typeof increment;
  decrement: typeof decrement;
  reset: typeof reset;
}

class App extends React.Component<AppProps> {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    return (
      <Counter
        value={this.props.counter.value}
        onIncrement={this.increment}
        onDecrement={this.decrement}
        onReset={this.reset}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  { increment, decrement, reset }
)(App);
