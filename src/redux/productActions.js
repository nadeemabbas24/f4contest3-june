import * as action from './actionTypes';

export const fetchProductRequest = ()=>{
    return { type: action.FETCHED_REQUEST}
}

export const fetchProductSuccess = (products)=>{
    return { type:action.FETCHED_SUCCESS, payload:products}
}

export const fetchProductError = (error)=>{
    return { type:action.FETCHED_ERROR, payload:error}
}