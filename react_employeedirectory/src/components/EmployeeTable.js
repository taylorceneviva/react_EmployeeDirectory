import React from 'react';
// actual table to hold data

function EmployeeTable(props) {
  console.log(props);
    return (
        <table className= "Table striped bordered hover responsive">
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Cell</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map( user => {
            return (
              <tr key={user.login.uuid} >
              <td><img alt={user.name.first +  user.name.last} src={user.picture.thumbnail}/></td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.cell}</td>
              <td>{user.email}</td>
            </tr> 
            )

          }

            
            )}
        </tbody>
      </table>
    );
  }

export default EmployeeTable;