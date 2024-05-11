import React from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "../../../views/Contact/AddContact.jsx";
import Contact from "../../../views/Contact/Contact.jsx";
import ContactView from "../../../views/Contact/ContactView.jsx";
import EditContact from "../../../views/Contact/EditContact.jsx";
import CRUD from "../../../views/CRUD/CRUD.jsx";
import DeleteMultiple from "../../../views/DeleteMultiple/DeleteMultiple.jsx";
import NotFound from "../../../views/NotFound/NotFound.jsx";


const Content = () => {
    return (
        <div className='content'>
            <Routes>
                <Route path="/" element={<Contact />}></Route>
                <Route path="/crud" element={<CRUD />}></Route>
                <Route path="/delete" element={<DeleteMultiple />}></Route>
                <Route path="/user-add" element={<AddContact />}></Route>
                <Route path="/user-edit/:contactId" element={<EditContact />}></Route>
                <Route path="/user-view/:contactId" element={<ContactView />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default Content;