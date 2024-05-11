import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidV4 } from "uuid"
import { useNavigate, useParams } from 'react-router-dom';
import "./addContact.css"
import useFetch from "../../customize/useFetch";
const EditContact = () => {
    let navigate = useNavigate();
    const { contactId } = useParams();
    // alert(contactId);

    const [contact, setContact] = useState({
        id: uuidV4(),
        name: "",
        email: ""
    })

    const { id, name, email } = contact;


    const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadContact();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3006/contacts/${contactId}`, contact);
        navigate("/");
        // alert("Edit suceess");
    }

    const loadContact = async (e) => {
        const result = await axios.get(`http://localhost:3006/contacts/${contactId}`);
        setContact(result.data);
    }


    return (
        <div className="container-form">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A Contact</h2>
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

                    <input type="submit" value="Update Contact" />
                </form>
            </div>
        </div>
    )
}

export default EditContact;