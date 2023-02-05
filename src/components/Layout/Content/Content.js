import React from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "../../../views/Contact/AddContact.js";
import Contact from "../../../views/Contact/Contact.js";
import CRUD from "../../../views/CRUD/CRUD.js";
import DeleteMultiple from "../../../views/DeleteMultiple/DeleteMultiple.js";


const Content = () => {
    return (
        <div className='content'>
            <Routes>
                <Route path="/" element={<Contact />}></Route>
                <Route path="/crud" element={<CRUD />}></Route>
                <Route path="/delete" element={<DeleteMultiple />}></Route>
                <Route path="/user-add" element={<AddContact />}></Route>
            </Routes>
        </div>
    )
}

export default Content;