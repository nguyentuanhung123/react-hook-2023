import React from "react";

const ChildComponent = (props) => {

    const { onSendMessage, vegetables, handleDelete } = props;

    return (
        <div className='child'>
            <button onClick={() => onSendMessage('Thế giới tươi sáng')}>Send message to Parent</button>
            {
                vegetables.map((vegetable, index) => {
                    return (
                        <li key={vegetable.id}>
                            {vegetable.name}
                            <span onClick={() => handleDelete(vegetable.id)}>x</span>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default ChildComponent;