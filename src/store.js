import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/index.js";


const store = createStore(rootReducer, window.__REDUX__DEVTOOLS__EXTENSIONS__ && window.__REDUX__DEVTOOLS__EXTENSION__());
export default store;
