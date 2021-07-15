import { createStore, combineReducers, applyMiddleware } from "redux";
import stageReducer from "./reducers/stageReducer/stageReducer";
import sportEventsReducer from "./reducers/sportsEventReducer/sportEventsReducer";
import loaderReducer from "./reducers/loaderReducer/loaderReducer";
import thunk from "redux-thunk";
import sportEventNodesMatrixReducer from "./reducers/sportEventNodesMatrixReducer/sportEventNodesMatrixReducer";
import componentsReducer from "./reducers/componentsReducer/componentsReducer";
import formatReducer from "./reducers/formatReducer/formatReducer";

const reducers = combineReducers({
  stage: stageReducer,
  sportEvents: sportEventsReducer,
  loader: loaderReducer,
  sportEventNodesMatrix: sportEventNodesMatrixReducer,
  components: componentsReducer,
  format: formatReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store
export default store;