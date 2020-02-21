import React from "react";
import styled from "styled-components";

const MembersDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2%;
    flex-wrap: wrap;
`
const SingleMemberDiv = styled.div`
    background: white;
    padding: 1%;
`

const MembersHeading = styled.h2`
    color: #FFE5B4;

`

const Members = props => {
  return (
    <MembersDiv className="member-list">
      {props.members.map(member => (
        <SingleMemberDiv className="member" key={member.id}>
          <MembersHeading>{member.name}</MembersHeading>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          <button>Edit</button>
        </SingleMemberDiv>
      ))}
    </MembersDiv>
  );
};

export default Members;