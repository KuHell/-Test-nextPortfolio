import { useRef } from 'react';

const useScrollMove = (element) => {
  // const element = useRef<HTMLElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement };
};

export default useScrollMove;
