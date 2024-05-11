import React from "react";
import './dialog.css'

const Dialog = (props) => {
    const { handleDeteleTrue, handleDeteleFalse } = props;
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span class="close" onClick={() => handleDeteleFalse()}>&times;</span>
                <p>Are you sure want to delete ?</p>
                <div className="dialog_buttons">
                    <button onClick={() => handleDeteleTrue()}>Ok</button>
                    <button onClick={() => handleDeteleFalse()}>Close</button>
                </div>
            </div>
        </div>

    )
}

export default Dialog