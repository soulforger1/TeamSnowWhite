import React, {createContext, useState} from 'react';

export const cartContext = createContext({});

export const CartProvider: React.FC<any> = ({children}) => {
  const [cart, setCart] = useState({});
  const [payment, setPayment] = useState(0);

  return (
    <cartContext.Provider value={{cart, setCart, payment, setPayment}}>
      {children}
    </cartContext.Provider>
  );
};
