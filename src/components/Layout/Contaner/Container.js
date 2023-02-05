import React from "react";
import Header from '../Nav/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Content from '../Content/Content.js';
import Footer from '../Footer/Footer.js';
import '../../../assets/css/style.css'

const Container = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Content />
            <Footer />
        </div>
    )
}

export default Container;