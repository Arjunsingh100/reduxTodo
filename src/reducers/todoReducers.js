const initialState = [];

const todoReducer = (state=initialState, actions) => {
    switch (actions.type) {
        case "ADDTEXT": return state.concat({id:actions.payload.id,data:actions.payload.data});
        case "DELETETEXT" : const newState = state.filter((ele) => {
            if(ele.id !== actions.payload.id) {
                return ele;
            }
        })
        console.log(newState)
        return state=newState;
        case "UPDATETEXT" : const updatedState = state.map((ele,index) => {
            if(ele.id == actions.payload.id) {
                ele.data = actions.payload.data;
            }
            return ele;
        })
        return state=updatedState;
        default: return state;
        
    }
}

export default todoReducer;
