import React, { useRef, useState } from "react";
import { UserlistDisplay } from "./UserlistDisplay";

export const Form = ({ display }) => {
  const [list, setlist] = useState([]);
  const inputRef = useRef();

  // onbsubmit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setlist([...list, inputRef.current.value]);
    console.log(list);
  };
  // onchange hnadler
  const onchangehandler = (e) => {
    const inputValue = e.target.value;
    display(inputValue);
  };
  return (
    <>
      {/* form */}

      <form
        className="row row-cols-lg-auto g-3 align-items-center"
        onSubmit={onSubmitHandler}
      >
        <div className="col-8">
          <div className="input-group">
            <input
              ref={inputRef}
              onChange={onchangehandler}
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Username"
            />
          </div>
        </div>

        <div className="col-4">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {/* userlist display component */}
      <hr style={{ width: "50%" }} />

      {list.length >= 1 && <UserlistDisplay list={list}></UserlistDisplay>}
    </>
  );
}