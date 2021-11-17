import { MutableRefObject, useEffect, useState } from 'react';

export const useOnScreen = (ref: MutableRefObject<HTMLHeadElement | null>, rootMarginValue = 0) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      rootMargin: `${rootMarginValue}px`,
    });
    observer.observe(ref.current);
    return () => {
      if (!ref.current) {
        return;
      }
      observer.unobserve(ref.current);
    };
  }, [ref, rootMarginValue]);

  return isVisible;
};
