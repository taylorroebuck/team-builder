import React from "react";

const Members = props => {
  return (
    <div className="member-list">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>Name: {member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Members;