import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addElment } from "../axios/axios";

export default function One() {
  let dispatch = useDispatch();
  let [text, handleText] = useState("");
  let [test, handleTest] = useState(true);
  let input = useRef();

  let handleInput = () => {
    let value = input.current.value;
    handleText(value);
    value === "" ? handleTest(true) : handleTest(false);
  };

  return (
    <div className={"items"}>
      <h1>ADD ITEM</h1>
      <br />
      <input
        ref={input}
        type="text"
        value={text}
        onChange={() => {
          handleInput();
        }}
      />

      {test === true ? (
        <p className={"red"}>please enter value</p>
      ) : (
        <>
          <br /> <br />
          <button
            onClick={() => {
              dispatch(addElment(text));
              handleText("");
              handleTest(true);
            }}
          >
            {" "}
            add item
          </button>
        </>
      )}
    </div>
  );
}
