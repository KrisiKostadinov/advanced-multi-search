import React from "react";

const Table = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Website</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.website}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
