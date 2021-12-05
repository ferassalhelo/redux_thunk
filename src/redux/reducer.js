import {
  LODDING,
  LODDING_END,
  ADD_ITEMS,
  ADD_ITEM,
  DELEAT_ITEM,
  ERROR
} from "./actions";

let listReducer = (init = [], action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return [...action.data];

    case ADD_ITEM:
      return [action.item, ...init];

    case DELEAT_ITEM:
      return [...init].filter(element => element.id !== action.id);

    default:
      return init;
  }
};

let loddingReducer = (initial = { lodding: false, error: "" }, action) => {
  switch (action.type) {
    case LODDING:
      return {
        ...initial,
        lodding: true
      };

    case LODDING_END:
    case ADD_ITEMS:
    case ADD_ITEM:
      return {
        ...initial,
        lodding: false
      };

    case ERROR:
      return {
        ...initial,
        error: action.error,
        lodding: false
      };

    default:
      return initial;
  }
};

export { listReducer, loddingReducer };
