import {types} from "./types";

 export const initialState = {
    counter: 0,
}
export default function reducer(state = initialState, action)  {
    switch (action.type) {
        case types.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case types.DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case types.RESET:
            return { ...state, counter: 0 };
        case types.ADD_TEN:
            return {...state, counter: state.counter + 10};
        default:
            return state;
    }
};


