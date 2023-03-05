import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from './Userreducers';

export const MainContext = createContext();

function Context({children})
{
   const [state,dispatch] = useReducer(reducer,initialState)

    return  (
        <MainContext.Provider value = {{state,dispatch}}>
            {children}
        </MainContext.Provider>
    )
}
export default Context 

