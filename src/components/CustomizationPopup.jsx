import React from "react";

const CustomizationPopup = ({ id }) => {
    return (
        <div className="flex justify-center" aria-label="close">
            <form className=" w-1/5 mx-28 my-10">
                <h4 className="flex justify-center mb-5 ">
                    Customize Key Number {id}
                </h4>
                <input
                    className="w-full border rounded-md p-2"
                    type="text"
                    placeholder="Type your desired key"
                />
                <p className="flex justify-center py-5">or</p>
                <select className="w-full border rounded-md p-2 mb-5">
                    <option value="">Select a Special Key</option>
                    <option value="Shift">Shift</option>
                    <option value="Control">Control</option>
                    <option value="Gui">GUI key (windows/Command)</option>
                    <option value="Alternate">
                        Alternate Key (Alt/Option)
                    </option>
                    <option value="Fn">Fn Key</option>
                    <option value="Caps">Caps Lock</option>
                    <option value="Tab">Tab</option>
                    <option value="Backspace">Backspace</option>
                    <option value="Spacebar">Spacebar</option>
                    <option value="Return">Return/Enter</option>
                    <option value="Up">Up arrow</option>
                    <option value="Down">Down arrow</option>
                    <option value="Left">Left arrow</option>
                    <option value="Right">Right arrow</option>
                </select>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Map
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CustomizationPopup;
