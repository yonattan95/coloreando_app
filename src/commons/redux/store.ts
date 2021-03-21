import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { useMemo } from "react";
import { rootReducer } from "./reducers";

//funcion principal para crear el store
function initStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

let store;
const initializeStore = preloadedState => {
  //para verificar si ya existe un store
  let _store = store ?? initStore(preloadedState);

  //para fusionar stores
  if (preloadedState && store) {
    _store = initStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  //para flujos SSG y SSR, se crea un nuevo store
  if (typeof window === 'undefined') {
    return _store;
  }

  //para crear el store por unica vez (browser)
  if (!store) {
    store = _store;
  }

  return _store;
}

//para memorizar el store
export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}