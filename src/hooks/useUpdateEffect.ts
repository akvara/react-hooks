import { useCallback, useEffect, useRef } from 'react';
import { noop } from '../utils/utils';

export const useUpdateEffect = (callback = noop, dependencies: unknown[]) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
