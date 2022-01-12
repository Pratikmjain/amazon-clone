// setup data layer
// we need this tp track the Basket

import React, { createContext, useContext, useReducer } from 'react';

// This is the data Layer
export const StateContext = createContext();

// Build a Provider

export const StateProvider = ({
 reducer, initialState, children
}) => (
 <StateContext.Provider value={useReducer(reducer, initialState)}>
  {children}
 </StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);