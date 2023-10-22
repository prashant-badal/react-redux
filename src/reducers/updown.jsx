const initialState=10;
const changeNum=(state=initialState, action)=>{
    switch(action.type){
        case "INCREMENT":
            return state + 1;

            case "INCREMENT":
                return state +-1;
                default :return state;
    }
}
export default changeNum;