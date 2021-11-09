import React from 'react'
import './UserTable.css'
const UserTable = props => (
  <table className="Table">
    <thead>
      <tr className="row">
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody className="Table-body">
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button-edit"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button-delete"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable;