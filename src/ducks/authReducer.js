
const initialState = {
  user: {}
};

export default function authReducer(state = initialState, action){
  switch(action.type){
    case "LOGIN": 
      return {user: action.payload};
    case "LOGOUT":
      return {user: {}};
    case "UPDATE_USER":
      return {user: action.payload};
    default: 
      return state;
  }
};
