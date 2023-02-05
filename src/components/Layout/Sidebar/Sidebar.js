import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/crud">CRUD</NavLink>
                </li>
                <li>
                    <NavLink to="/delete">Delete Multiple</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;