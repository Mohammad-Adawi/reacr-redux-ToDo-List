import { CREATE, REMOVE, TOGGLE, CHANGE_INPUT } from "./types";

let autoId = 0;
  
  function create(text: string) {
    return {
      type: CREATE,
      payload: {
        id: autoId++,
        text: text,
        done: false
      }
    };
  }
  
  function remove(id: number) {
    return {
      type: REMOVE,
      meta: {
        id
      }
    };
  }
  
  function toggle(id: number) {
    return {
      type: TOGGLE,
      meta: {
        id
      }
    };
  }
  
  function changeInput(input: string) {
    return {
      type: CHANGE_INPUT,
      meta: {
        input
      }
    };
  }
  
  export const actionCreators = {
    create,
    toggle,
    remove,
    changeInput
  };