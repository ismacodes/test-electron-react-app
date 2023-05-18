import React, { useState } from "react";
import KeyCap from "./components/KeyCap";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import CustomizationPopup from "./components/CustomizationPopup";

const App = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [keyToCustomize, setKeyToCustomize] = useState(null);

    const handleClick = (id) => {
        setIsPopupVisible(true);
        setKeyToCustomize(id);
        console.log(id);
    };


    return (
        <div>
            <Header />
            <Keyboard handleCustomize={handleClick}/>
            {isPopupVisible && <CustomizationPopup id={keyToCustomize}/>}
        </div>
    );
};

export default App;
