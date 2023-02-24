import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import bookingFormReducer from "./bookingForm/reducers";

const store = createStore(bookingFormReducer,composeWithDevTools())
// const store = createStore(bookingFormReducer)

export default store;