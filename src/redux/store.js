// Modules
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
// Redux App
import { rootEpic } from "@epic";
import { rootReducer } from "./reducer";
import { initialState } from "./state";

export const makeStore = () => {
  const epicMiddleware = createEpicMiddleware();
  const middleware = [epicMiddleware];
  const composeEnhancers = composeWithDevTools({
    name: 'Chibbis-Redux-Store',
    realtime: true,
    trace: true,
    traceLimit: 25,
  });
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(rootReducer, initialState, enhancer);

  epicMiddleware.run(rootEpic);

  return store;
};

export const makeStoreWrapper = createWrapper(makeStore, { debug: true });
