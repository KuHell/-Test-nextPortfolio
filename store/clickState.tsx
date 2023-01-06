import React, { useState } from 'react';
import { Props } from '../types';

const ClickState = React.createContext({
  isClick: false,
});

export const ClickStateProvider = (props: Props) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <ClickState.Provider value={[isClick, setIsClick]}>
      {props.children}
    </ClickState.Provider>
  );
};

export default ClickState;
