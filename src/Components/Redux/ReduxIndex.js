import { createStore } from "redux";

const LOG_IN_ACTION = "mymusicstore.com/LOG_IN";

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const initialState = { user: undefined };

const reducer = (state, action) => {
  if (action.type === LOG_IN_ACTION) {
    const { payload } = action;

    return {
      ...state,
      user: {
        ...state.user,
      },
    };
  }
  return state;
};

export default store;
