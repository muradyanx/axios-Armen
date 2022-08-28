const ADD = 'add'



const initialState = {
    user:{
        name:'Armen'
    },
    info:{
        age:22
    }
}

function userReducer(state = initialState,action){
    switch(action.type){
        case ADD:
            
            return{
                ...state,
                user:{
                    name:action.payload
                }

            }
            default:
                return state
    }
}

export default userReducer

export const addActionCreator =(payload) =>{
    return {
        type:ADD,
        payload
    }
}