import React, { useState } from "react";
import Solution from "./Solution";

function NumberDiv() {
  const [number, setNumber] = useState("");
  const [id, setId] = useState(1);
  const [solutions, setSolutions] = useState([]);
  const [interval, setInterval] = useState(100);

  const changeHandler = (e) => {
    const regex = /^[0-9]*$/;
    if (regex.test(e.target.value)) {
      //   console.log(e.target.value);
      setNumber(e.target.value);
    }
  };

  const getResult = () => {
    if (number) {
      const randomNumber = Math.floor(Math.random() * interval) + 1;
      // console.log(`Random Number = ${randomNumber}`);
      const difference = Math.abs(number - randomNumber);
      // console.log(`Difference = ${difference}`);

      const spanTagTwo = document.querySelector(`.result`);
      const spanTag = document.querySelector(`.answer`);
      spanTag.classList.remove("btn-primary");
      spanTag.classList.remove("btn-warning");
      spanTag.classList.remove("btn-danger");
      spanTag.classList.remove("btn-success");

      if (difference === 0) {
        console.log("Correct - Green");
        spanTag.innerHTML = "Correct!";
        spanTag.classList.add("btn-success");
        spanTagTwo.innerHTML = "Congratulations, that's correct!! ";
        setSolutions([...solutions, number]);
        setInterval(interval + 100);
        setId(id + 1);
      } else if (difference > 0 && difference <= 4) {
        console.log("Hot - Red");
        spanTag.innerHTML = "Hot!";
        spanTag.classList.add("btn-danger");
        spanTagTwo.innerHTML = "Wrong, try again...";
      } else if (difference > 4 && difference <= 15) {
        console.log("Warn - Yellow");
        spanTag.innerHTML = "Warm!";
        spanTag.classList.add("btn-warning");
        spanTagTwo.innerHTML = "Wrong, try again...";
      } else if (difference > 15 && difference <= interval) {
        console.log("Cold - Blue");
        spanTag.innerHTML = "Cold!";
        spanTag.classList.add("btn-primary");
        spanTagTwo.innerHTML = "Wrong, try again...";
      }
    }
  };

  return (
    <>
      <div className="p-2 d-flex justify-content-center flex-wrap">
        <div className="m-2">
          <input
            className="form-control"
            placeholder="Enter a Number"
            type="text"
            value={number}
            onChange={changeHandler}
          />
        </div>
        <div className="m-2">
          <button className="btn btn-md btn-secondary" onClick={getResult}>
            Submit
          </button>
        </div>
      </div>

      <div className="row p-0 my-3">
        <div className="col-md-4 text-center">
          <h4 className="btn btn-outline-secondary">Level - {id}</h4>
        </div>
        <div className="col-md-4 text-center">
          <span className="btn answer"></span>
          <br />
          <span className="btn result"></span>
        </div>
        <div className="col-md-4 text-center">
          <h4 className="btn btn-outline-secondary">Range: 1 - {interval}</h4>
        </div>
      </div>

      <table className="table container">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Level</th>
            <th scope="col">Your Answer</th>
            <th scope="col">Input</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody>
          {solutions.map((solution, i) => (
            <Solution
              key={i}
              number={number}
              changeHandler={changeHandler}
              solution={solution}
              getResult={getResult}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NumberDiv;
