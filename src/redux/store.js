// Use CreateStore and ApplyMiddleware 
import { createStore , applyMiddleware } from "redux";
// Use Thunk Middleware To Solve The Fetch/Async Problem In Redux
import thunk from "redux-thunk";
// Use Reducers Which Combined In => reducers/index.js Dir
import reducers from "./reducers";

// Create Store And Export It
export const store = createStore(reducers , applyMiddleware(thunk));