import { ADDPRODUCT, ADDTOCART, CHANGEVIEW, DECREASEFROMCART, INCREASEFROMCART, REMOVEFROMCART } from "./actionTypes"

export const addProuct = (product) => {
    return {
        type:ADDPRODUCT,
        payload:{
            product
        }
    }
}
export const addToCart = (id) => {
    return {
        type:ADDTOCART,
        payload:{
            id
        }
    }
}
export const changeView = (name) => {
    return {
        type: CHANGEVIEW,
        payload:{
            name
        }
    }
}
export const decreaseFromCart = (id) => {
    return {
        type:DECREASEFROMCART,
        payload:{
            id
        }
    }
}
export const increaseFromCart = (id) => {
    return {
        type:INCREASEFROMCART,
        payload:{
            id
        }
    }
}
export const removeFromCart = (id) => {
    return {
        type:REMOVEFROMCART,
        payload:{
            id
        }
    }
}