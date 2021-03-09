import React, { Component } from "react";
import FindEmployee from "./FindEmployee";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";

class EmployeeData extends Component {
  state = {
    Employee: [],
    results: [],
  };

  componentDidMount() {
    API.getEmployee().then((results) => {
      // console.log(results)
      this.setState({
        Employee: results.data.results,
        results: results.data.results
      });
    });
  }
  handleInputChange = event => {
    console.log(event.target.value);
    const term = event.target.value;
    const filteredList = this.state.Employee.filter(user => {
        let values = Object.values(user).join("").toLowerCase();
        return values.indexOf(term.toLowerCase()) !== -1;
    })
    this.setState({results: filteredList});
  }
  render() {
    return (
      <div>
        <FindEmployee 
        handleInputChange={this.handleInputChange}
        />
        <EmployeeTable users={this.state.results} />
      </div>
    );
  }
}

export default EmployeeData;
