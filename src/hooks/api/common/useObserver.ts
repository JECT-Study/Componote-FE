import { useEffect, RefObject } from "react";

interface UseObserverProps {
  target: RefObject<HTMLElement>;
  onIntersect: IntersectionObserverCallback;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

// eslint-disable-next-line import/prefer-default-export
export const useObserver = ({
  target,
  onIntersect,
  root = null,
  rootMargin = "0px",
  threshold = 1.0,
}: UseObserverProps) => {
  useEffect(() => {
    let observer: IntersectionObserver;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });

      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, onIntersect, root, rootMargin, threshold]);
};
