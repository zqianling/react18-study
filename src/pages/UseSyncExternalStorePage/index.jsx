import React, { useSyncExternalStore } from "react";
import { createStore } from "redux";
function reducer(state = { number: 0 }, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, number: state.number + 1 };
    case 'SUB':
      return {...state, number: state.number - 1};
    default:
      return state;
  }
}

const store = createStore(reducer);
export default function UseSyncExternalStorePage() {
  const state = useSyncExternalStore(store.subscribe, store.getState);

  function handleAdd() {
    store.dispatch({type: 'ADD'});
  }
  return (
    <div>
      <h2>{state.number}</h2>
      <button onClick={handleAdd}>改变</button>
    </div>
  );
}
