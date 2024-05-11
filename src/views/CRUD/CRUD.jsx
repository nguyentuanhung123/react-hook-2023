import React from "react";
import ChildComponent from "./ChildComponent";
import { useState } from "react";
import Dialog from "../dialog/Dialog";

const CRUD = () => {
    const [messageFromChild, setMessageFromChild] = useState("");

    const [vegetables, setVegetables] = useState([
        { id: 1, name: "Lettuce" },
        { id: 2, name: "Carrot" },
        { id: 3, name: "Onion" },
        { id: 4, name: "Brocolli" },
        { id: 5, name: "Mushroom" },
    ]);

    const [isDialog, setIsDialog] = useState({
        show: false,
        id: null
    });

    const handleMessageFromChild = (message) => {
        setMessageFromChild("Message from child : " + message);
    }

    const handleDeleteVegetable = (id) => {
        try {
            setIsDialog({
                show: true,
                id: id
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleDeleteVegetableTrue = () => {
        try {
            if (isDialog.show && isDialog.id) {
                let filteredData = vegetables.filter((vegetable) => vegetable.id !== isDialog.id);
                setVegetables(filteredData);
                setIsDialog({
                    show: false,
                    id: null
                })
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleDeleteVegetableFalse = () => {
        try {
            setIsDialog({
                show: false,
                id: null
            })
        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <>
            <div className='CRUD'>
                {messageFromChild}
            </div>
            <ChildComponent
                vegetables={vegetables}
                onSendMessage={handleMessageFromChild}
                handleDelete={handleDeleteVegetable}
            />
            {
                isDialog.show === true &&
                <Dialog handleDeteleTrue={handleDeleteVegetableTrue}
                    handleDeteleFalse={handleDeleteVegetableFalse}
                />
            }
        </>
    )
}

export default CRUD;