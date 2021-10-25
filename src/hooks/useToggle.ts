import { useState } from 'react';

export const useToggle = (defaultValue?: boolean) => {
  const [value, setValue] = useState(defaultValue || false);

  const toggleValue = (value?: boolean) => {
    setValue((currentValue: boolean) => (typeof value === 'boolean' ? value : !currentValue));
  };

  return [value, toggleValue];
};
