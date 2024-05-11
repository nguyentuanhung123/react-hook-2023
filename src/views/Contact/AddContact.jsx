import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidV4 } from "uuid"
import { useNavigate } from 'react-router-dom';
import "./addContact.css"
const AddContact = () => {
    let navigate = useNavigate();

    const [contact, setContact] = useState({
        id: uuidV4(),
        name: "",
        email: ""
    })

    const { id, name, email } = contact;

    const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3006/contacts", contact);
        navigate("/");
    }
    return (
        <div className="container-form">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Contact</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <input type="submit" value="Add Contact" />
                </form>
            </div>
        </div>
    )
}

export default AddContact;