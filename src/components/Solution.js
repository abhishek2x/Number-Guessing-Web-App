import React from "react";

function Solution({
  number,
  changeHandler,
  solution,
  getResult,
}) {
  return (
    <tr>
      <th scope="row">#</th>
      <td>{solution}</td>
      <td>
        <input
          placeholder="Enter a Number"
          type="text"
          value={number}
          onChange={changeHandler}
        />
      </td>
      <td>
        <button className="btn btn-md btn-success" onClick={getResult}>Submit</button>
      </td>
    </tr>
  );
}

export default Solution;
