import React from 'react';
import { useLocalStorage, useSessionStorage } from '../hooks/useStorage';

const StorageComponent = () => {
  const [name, setName, removeName] = useSessionStorage('name', 'Kyle');
  const [age, setAge, removeAge] = useLocalStorage('age', 26);

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName('John')}>Set name</button>
      <button onClick={() => setAge(40)}>Set age</button>
      <button onClick={removeName}>Remove name</button>
      <button onClick={removeAge}>Remove age</button>
    </div>
  );
};

export default StorageComponent;
