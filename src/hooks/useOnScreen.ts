import { MutableRefObject, useEffect, useState } from 'react';

export const useOnScreen = (ref: MutableRefObject<HTMLHeadElement | null>, rootMarginValue = 0) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let observerRefValue = ref.current;
    if (!observerRefValue) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      rootMargin: `${rootMarginValue}px`,
    });
    observer.observe(observerRefValue);
    return () => {
      if (!observerRefValue) {
        return;
      }
      observer.unobserve(observerRefValue);
    };
  }, [ref, rootMarginValue]);

  return isVisible;
};
