import { useCallback, useEffect, useState } from 'react';

export type StorageObject = typeof window.localStorage | typeof window.sessionStorage;
export type StorageValueType = string | number | (() => unknown);

export const useLocalStorage = (key: string, defaultValue: StorageValueType) => {
  return useStorage(key, defaultValue, window.localStorage);
};

export const useSessionStorage = (key: string, defaultValue: StorageValueType) => {
  return useStorage(key, defaultValue, window.sessionStorage);
};

const useStorage = (key: string, defaultValue: StorageValueType, storageObject: StorageObject) => {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (!!jsonValue) {
      return JSON.parse(jsonValue);
    }
    if (typeof defaultValue === 'function') {
      return defaultValue();
    }
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) {
      return storageObject.removeItem(key);
    }
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
};
