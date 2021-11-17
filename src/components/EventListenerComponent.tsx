import React, { useState } from 'react';
import { useEventListener } from '../hooks/useEventListener';

const EventListenerComponent = () => {
  const [key, setKey] = useState('');
  useEventListener('keydown', (e) => {
    // @ts-ignore
    setKey(e.key);
  });

  return (
    <div>
      <div>Last key: {key}</div>
    </div>
  );
};

export default EventListenerComponent;
