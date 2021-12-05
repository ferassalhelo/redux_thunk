import {
  LODDING,
  LODDING_END,
  ADD_ITEMS,
  ADD_ITEM,
  DELEAT_ITEM,
  ERROR
} from "./actions";

let lodding = () => {
  return {
    type: LODDING
  };
};

let loddingEnd = () => {
  return {
    type: LODDING_END
  };
};

let getItems = data => {
  return {
    type: ADD_ITEMS,
    data: data
  };
};

let addItem = text => {
  let id = Math.random() + Math.random();
  return {
    type: ADD_ITEM,
    item: { id: id, title: text }
  };
};

let deleatItem = id => {
  return {
    type: DELEAT_ITEM,
    id: id
  };
};

let errorFitchData = error => {
  return {
    type: ERROR,
    error: error
  };
};

export { lodding, loddingEnd, getItems, addItem, deleatItem, errorFitchData };
