import React, { useState } from 'react';
import { useTimeout } from '../hooks/useTimeout';

const TimeoutComponent = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear timeout</button>
      <button onClick={reset}>Reset timeout</button>
    </div>
  );
};

export default TimeoutComponent;
