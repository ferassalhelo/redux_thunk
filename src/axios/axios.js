import axios from "axios";
import {
  getItems,
  lodding,
  errorFitchData,
  deleatItem,addItem
} from "../redux/actionsCareator";

let API = "https://jsonplaceholder.typicode.com/albums";

let getData = () => {
  return async dispatch => {
    try {
      dispatch(lodding());
      let get = await axios.get(API);
      let data = await get.data;
      dispatch(getItems(data));
    } catch (error) {
      dispatch(errorFitchData(error.message));
    }
  };
};

let addElment = text => {
  return async dispatch => {
    try {
      dispatch(lodding());
      await axios.post(API, addItem());
      dispatch(addItem(text));
    } catch (error) {
      dispatch(errorFitchData(error.message));
    }
  };
};

let deletElement = id => {
  return async dispatch => {
    try {
      await axios.delete(`${API}/${id}`);
      dispatch(deleatItem(id));
    } catch (error) {
      dispatch(errorFitchData(error.message));
    }
  };
};

export { getData, deletElement,addElment };
