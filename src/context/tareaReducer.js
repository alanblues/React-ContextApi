export default (state, action) => {
    switch (action.type) {
        case 'agregar-dueno':
            return {
                ...state, 
                duenos: [action.payload, ...state.duenos]
            }
        case 'eliminar-dueno':
            return {
                ...state,
                duenos: state.duenos.filter(f => f.id !== action.payload)
            }
        case 'cambiar-estatus':
            return {
                ...state,
                duenos: state.duenos.map(m => m.id === action.payload.id ? action.payload : m)
            }
        default:
            return state;
    }
}