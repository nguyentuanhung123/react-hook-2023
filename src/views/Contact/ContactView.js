import React, { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid"
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ContactView = () => {

    const [contact, setContact] = useState({
        id: uuidV4(),
        name: "",
        email: ""
    })

    const { contactId } = useParams();

    useEffect(() => {
        loadContact();
    })

    const loadContact = async (e) => {
        const result = await axios.get(`http://localhost:3006/contacts/${contactId}`);
        setContact(result.data);
    }

    return (
        <div className="container">
            <Link className="btn btn-primary" to="/">Back to home</Link>
            <h1>Contact Id: {contactId}</h1>
            <hr />
            <ul className="list-group">
                <li className="list-group-item">Name : {contact.name}</li>
                <li className="list-group-item">Name : {contact.email}</li>
            </ul>
        </div>
    )
}

export default ContactView;