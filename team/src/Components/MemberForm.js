import React, { useState } from "react";

const MemberForm = props => {
    const [info, setInfo] = useState({
        id: '',
        name: "initial name",
        email: "initial email",
        role: "initial role"
    });

    const handleChanges = event => {
        // console.log("event", event.target.value);

        setInfo({...info, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        console.log("submitting!");
        event.preventDefault();
        props.addNewInfo(info);
        setInfo({
            id: '',
            name: '',
            email: '',
            role: ''
        });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input
            type="text"
            placeholder="Enter name"
            id="name"
            name="name"
            value={info.name}
            onChange={handleChanges}
            />

            <label htmlFor="email">Email: </label>
            <input
            type="text"
            placeholder="Enter email"
            id="email"
            name="email"
            value={info.email}
            onChange={handleChanges}
            />

            <label htmlFor="role">Role: </label>
            <input
            type="text"
            placeholder="Know your role"
            id="role"
            name="role"
            value={info.role}
            onChange={handleChanges}
            />

            <button type="submit">Add Member</button>
        </form>
    )
}

export default MemberForm;