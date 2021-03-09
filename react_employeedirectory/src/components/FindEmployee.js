import React from "react";

function FindEmployee(props) {
  return (
    <form>
      <div className="form-group">
        <label style={{fontSize:"25px", marginLeft:"20px"}} htmlFor="search">Search Employee:</label>
        <input
          onChange={e => props.handleInputChange(e)}
        //   value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search..."
          id="search"
        />
      </div>
    </form>
  );
}

export default FindEmployee;