import { legacy_createStore } from "redux"

const BUY_CAKE = 'BUY_CAKE'

//define an action creator
function buyCake(){
    return {
        type: BUY_CAKE,
    }
}

//initial state
const initialState = {
    numOfCakes: 10
}

//define a reducer function -> return a new object, as the state can contain more than one prop so it's better to first create a copy of the original state object
function reducer (state = initialState, action) {
    switch (action.type) {
        case 'BUY_CAKE':
            return { ...state, numOfCakes: state.numOfCakes - 1}
        default:
            return state
    }
}


const store = legacy_createStore(reducer) //takes reducer function to modify the state acc to the actions recieved
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

