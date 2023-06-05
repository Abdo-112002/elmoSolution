import React from "react";
import { BsArrowUp } from "react-icons/bs";

function UpToPage() {
    return (
        <div className="upWrapper flex items-center justify-center">
            <div className="upIcon">
                <span className="after">abdo</span>
                <span className="befor"></span>
                <BsArrowUp className="icon" />
            </div>
        </div>
    );
}

export default UpToPage;
