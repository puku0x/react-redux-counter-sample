import * as React from 'react';

interface CounterInterfaceProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const Counter: React.SFC<CounterInterfaceProps> = ({
  value,
  onIncrement,
  onDecrement,
  onReset
}) => {
  return (
    <div>
      <div>value: {value}</div>
      <div>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
        <button onClick={onReset}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
