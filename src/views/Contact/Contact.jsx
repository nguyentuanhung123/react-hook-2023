import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from '../../customize/useFetch.js';
import './Contact.css'
import '../../assets/css/button.css'
import Loading from "../Loading/Loading.jsx"
import { Link } from "react-router-dom";

const Contact = () => {
    const { data: contacts, isLoading, isError } = useFetch('http://localhost:3006/contacts');

    return (
        <div className='contact'>
            <div className="contact-toolbar">
                <h1>Home Contact</h1>
                <Link to="/user-add" className="btn btn-dark">
                    Add
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "30px" }} className="text-center">#</th>
                        <th style={{ width: "300px" }} className="text-center">Name</th>
                        <th style={{ width: "300px" }} className="text-center">Email</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        isLoading === true && <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}><Loading /></td>
                        </tr>
                    }
                    {
                        isLoading === false && isError === false &&
                        contacts && contacts.length > 0 &&
                        contacts.map((contact, index) => {
                            return (
                                <tr key={contact.id}>
                                    <td style={{ width: "30px" }}>{index + 1}</td>
                                    <td style={{ width: "300px" }}>{contact.name}</td>
                                    <td style={{ width: "300px" }}>{contact.email}</td>
                                    <td style={{ display: "flex" }}>
                                        <Link to={`/user-view/${contact.id}`} className="btn btn-primary">
                                            View
                                        </Link>
                                        <Link to={`/user-edit/${contact.id}`} className="btn btn-edit">
                                            Edit
                                        </Link>
                                        <div className="btn btn-delete">
                                            Delete
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        isError === true && <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>An error occurred. Awkward..</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contact;