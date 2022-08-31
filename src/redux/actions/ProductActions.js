// Use Related Types
import { ProductTypes } from "../types/ProductTypes";

// Use API_KEY
import API from "../../api/API_KEY";

// Create Action To Fetch Products From API
export const fetchProducts = () => async ( dispatch ) => {
    const response = await API.get("/products");
    dispatch({type: ProductTypes.FETCH_PRODUCTS , payload: response.data});
}

// Create Action To Fetch Selected Product From API
export const fetchSelectedProduct = ( id ) => async ( dispatch ) => {
    const response = await API.get(`/products/${id}`);
    dispatch({type: ProductTypes.FETCH_SELECTED_PRODUCT , payload: response.data});
}

export const addProductToCard = ( product ) => {
    return {
        type: ProductTypes.ADD_PRODUCT_TO_CARD,
        payload : product
    }
}