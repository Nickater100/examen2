const initialState = { 
    productos : [],
    producto: {},
    mongo: []
}

function rootReducer(state = initialState,action) {
    switch(action.type){
        case "GET_ALL_PRODUCTOS":
            return{
                ...state,
                productos: action.payload
            }
        case "GET_PRODUCTO":
            return{
                ...state,
                producto: action.payload
            }
        case "PUT_PRODUCTO":
            return{
                ...state,
                productos: action.payload
            }
        case "GET_MONGO":
            return{
                ...state,
                mongo: action.payload
            }
            default:
        return state;
    };
    
    
}

export default rootReducer;