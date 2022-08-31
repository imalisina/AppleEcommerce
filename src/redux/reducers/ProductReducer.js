// Use Related Types
import { ProductTypes } from "../types/ProductTypes";

// Initial State For Reducers
const initialState = {
    products: [],
    singleProduct: {},
    cardItems: [],
}

// Reducer For Set Products (For All Products Or One|Selected Product)
export const productReducers = ( state = initialState , { type , payload } ) => {
    switch ( type ) {
        case ProductTypes.FETCH_PRODUCTS:
            return {...state , products: payload}
        case ProductTypes.FETCH_SELECTED_PRODUCT:
            return { ...state , singleProduct : payload }
        default:
            return state;
    }
}

export const cardReducer = ( state = initialState , { type , payload } ) => {
    switch ( type ) {
        case ProductTypes.ADD_PRODUCT_TO_CARD:
            state.cardItems.push(payload);
            return { ...state }
        default:
            return state;
    }
}

