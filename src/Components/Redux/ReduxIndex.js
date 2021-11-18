import { createStore } from "redux";

const LOG_IN_ACTION = "mymusicstore.com/LOG_IN";

export const logInActionCreator = (user) => ({
  type: LOG_IN_ACTION,
  payload: { user: user },
});

const reducer = (state, action) => {
  if (action.type === LOG_IN_ACTION) {
    const { payload } = action;

    return { ...state, user: payload.user };
  }

  return state;
};

const initialState = { user: undefined };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
