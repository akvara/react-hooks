import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

const OnlineComponent = () => {
  const online = useOnlineStatus();

  return (
    <div>
      <div>
        {String(online)}
      </div>
    </div>
  );
};

export default OnlineComponent;
