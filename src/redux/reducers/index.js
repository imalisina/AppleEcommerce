// Use Combine Reducers 
import { combineReducers } from "redux";

// Use Relative Reducers And Combine Them
import { productReducers , cardReducer } from './ProductReducer';

const reducers = combineReducers({
    allProducts : productReducers,
    card: cardReducer,
}) 

export default reducers;