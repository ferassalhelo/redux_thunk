import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, deletElement } from "../axios/axios";

export default function Two() {
  let data = useSelector(state => state);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className={"items"}>
      {data.initial.lodding ? (
        "lodding..."
      ) : data.initial.error === "" ? (
        <>
          {" "}
          <h2>list items</h2>
          {data.list.map(item => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
                <button onClick={() => dispatch(deletElement(item.id))}>
                  delete
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <p>{data.initial.error}</p>
        </>
      )}
    </div>
  );
}
