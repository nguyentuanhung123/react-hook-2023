import React from "react";
import Header from '../Nav/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Content from '../Content/Content.jsx';
import Footer from '../Footer/Footer.jsx';
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