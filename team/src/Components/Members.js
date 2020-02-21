import React from "react";
import styled from "styled-components";

const MembersDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2%;
    flex-wrap: wrap;
`

const Members = props => {
  return (
    <MembersDiv className="member-list">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>Name: {member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          <button>Edit</button>
        </div>
      ))}
    </MembersDiv>
  );
};

export default Members;