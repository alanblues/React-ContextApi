import React, { createContext, useReducer } from 'react';

import tareaReducer from './tareaReducer';
export const tareaContext = createContext();

const TareasProvider = (props) => {
    const initialState = {
        titulo: 'Context API',
        duenos: []
    };
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    const fnEliminarDueno = id => {
        dispatch({
            type: 'eliminar-dueno',
            payload: id 
        });
    };

    const fnAgregarDueno = dueno => {
        dispatch({
            type: 'agregar-dueno',
            payload: dueno
        });
    };

    const fnCambiarStatus = dueno => {
        dueno.status = !dueno.status;
        dispatch({
            type: 'cambiar-estatus',
            payload: dueno
        });
    };

    return (
        <tareaContext.Provider value = {{
                titulo: state.titulo,
                duenos: state.duenos,
                fnEliminarDueno,
                fnAgregarDueno,
                fnCambiarStatus
            }}
        >
            { props.children }
        </tareaContext.Provider>
    );
}
 
export default TareasProvider;