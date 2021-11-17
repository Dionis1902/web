let defaultState = {
    cart : {}
}

const ADD_TO_CART = "ADD_TO_CART"
const SET_COUNT = "SET_COUNT"

function reducer(state=defaultState, action){
    switch (action.type){
        case ADD_TO_CART:
            if (Object.keys(state.cart).includes(action.id))
                state.cart[action.id]++
            else
                state.cart[action.id] = 1
            return state

        case SET_COUNT:
            if (action.count === 0)
                delete state.cart[action.id]
            else
                state.cart[action.id] = action.count
            return state
        default:
            return state
    }
}

export const addItemToCart = (id) => ({type: ADD_TO_CART, id:id});
export const setItemCount = (id, count) => ({type: SET_COUNT, id:id, count: count});
export default reducer;
