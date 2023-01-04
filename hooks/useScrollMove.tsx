const useScrollMove = (element: HTMLElement | any) => {
  const onMoveToElement = () => {
    console.log('check');
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { onMoveToElement };
};

export default useScrollMove;
