import React from 'react';
import { useArray } from '../hooks/useArray';

const ArrayComponent = () => {
  const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6]);

  return (
    <div>
      <div>{array.join(', ')}</div>
      <button onClick={() => push(7)}>Push 7</button>
      <button onClick={() => update(1, 9)}>Change Second to 9</button>
      <button onClick={() => remove(1)}>Remove Second</button>
      <button onClick={() => filter((n) => n < 3)}>Keep less than 4</button>
      <button onClick={() => set([1, 2])}>Set to 1, 2</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default ArrayComponent;
