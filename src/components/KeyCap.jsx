import React from "react";

const KeyCap = ({ label, id, onClick }) => {
    return (
        <div onClick={() => onClick(id)} className="border-2 hover:border-blue-400 rounded-md w-12 h-12 m-1 flex justify-center items-center">
            _
        </div>
    );
};

export default KeyCap;
