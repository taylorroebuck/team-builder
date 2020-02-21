import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MemberForm from './Components/MemberForm';
import Members from './Components/Members';
import styled from "styled-components";

const MemberDiv = styled.div`
    margin: 10%;
    background: #FFE5B4;
    padding: 1%;
`

// const teamMembers = [
//   {
//     name: "Taylor Roebuck",
//     email: "taylornroebuck@gmail.com",
//     role: "Full-Stack Developer"
//   }
// ]

function App() {
  const [members, setMembers] = useState([
    {
      id: 0,
      name: "Taylor Roebuck",
      email: "taylornroebuck@gmail.com",
      role: "Full-Stack Developer"
    },
    {
      id: 1,
      name: "Jerry Seinfeld",
      email: "jerryseinfeld@richperson.com",
      role: "Comedian"
    },
    {
      id: 2,
      name: "George Costanza",
      email: "george@vandalayindustries.com",
      role: "Architect"
    },
    {
      id: 3,
      name: "Elaine Bennis",
      email: "elaine@jpeterman.com",
      role: "Dancer"
    },
    {
      id: 4,
      name: "Kramer",
      email: "kramer@aol.com",
      role: "Unknown"
    }
  ]);
  

    const addNewInfo = info => {
      const newInfo = {
        id: Date.now(),
        name: info.name,
        email: info.email,
        role: info.role
      };

      setMembers([...members, newInfo])
    };
  return (
    <MemberDiv className="App">
      <h1>Team Builder</h1>
      <MemberForm addNewInfo={addNewInfo} />
      <Members members={members} />
    </MemberDiv>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

export default App;
