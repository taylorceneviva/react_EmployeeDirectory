import React from "react";

function FindEmployee(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search Employee:</label>
        <input
          onChange={e => props.handleInputChange(e)}
        //   value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employees"
          id="search"
        />
      </div>
    </form>
  );
}

export default FindEmployee;