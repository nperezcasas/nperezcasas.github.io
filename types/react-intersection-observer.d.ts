declare module 'react-intersection-observer' {
    import { ReactElement } from 'react';
  
    export interface IntersectionOptions {
      root?: Element | null;
      rootMargin?: string;
      threshold?: number | number[];
      triggerOnce?: boolean;
      skip?: boolean;
      initialInView?: boolean;
    }
  
    export function useInView(options?: IntersectionOptions): [
      (node?: Element | null) => void,
      boolean,
      IntersectionObserverEntry | undefined
    ];
  
    export interface InViewHookResponse {
      ref: (node?: Element | null) => void;
      inView: boolean;
      entry?: IntersectionObserverEntry;
    }
  
    export function InView(props: {
      children: (inView: boolean, entry: IntersectionObserverEntry | undefined) => ReactElement;
      as?: string;
      onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
    } & IntersectionOptions): ReactElement;
  }