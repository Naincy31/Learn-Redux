const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//define an action creator for cake
function buyCake(){
    return {
        type: BUY_CAKE,
    }
}

//define an action creator for ice cream
function buyIceCream(){
    return {
        type: BUY_ICECREAM,
    }
}

//initial ice cream state
const initialIceCreamsState = {
    numOfIceCreams: 20
}

//initial cake state
const initialCakeState = {
    numOfCakes: 10,
}

//define a reducer function -> return a new object, as the state can contain more than one prop so it's better to first create a copy of the original state object
function cakeReducer (state = initialCakeState, action) {
    switch (action.type) {
        case 'BUY_CAKE':
            return { ...state, numOfCakes: state.numOfCakes - 1}
        default:
            return state
    }
}

function iceCreamReducer (state = initialIceCreamsState, action) {
    switch (action.type) {
        case 'BUY_ICECREAM':
            return { ...state, numOfIceCreams: state.numOfIceCreams - 1}
        default:
            return state
    }
}

//combine the reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger)) //takes reducer function to modify the state acc to the actions recieved
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

