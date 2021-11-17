import { useState } from 'react';

export const useOnlineStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  // userEventListener('online', () => setOnline(navigator.onLine));
  // userEventListener('offline', () => setOnline(navigator.onLine));

  return online;
};
