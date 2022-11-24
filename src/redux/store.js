import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import loggerMiddleware from "./middlewares/loggerMiddleware";
import confirmTodoDeletionMiddleware from "./middlewares/confirmTodoDeletionMiddleware";
import rootReducer from "./reducers";

const composedEnhancer = composeWithDevTools(applyMiddleware(loggerMiddleware, confirmTodoDeletionMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
