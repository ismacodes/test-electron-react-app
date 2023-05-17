import React, { useState } from "react";
import KeyCap from "./components/KeyCap";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import CustomizationPopup from "./components/CustomizationPopup";

const App = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClick = (id) => {
        setIsPopupVisible(true);
        console.log(id);
    };

    return (
        <div>
            <Header />
            <Keyboard handleCustomize={handleClick}/>
            {isPopupVisible && <CustomizationPopup />}
        </div>
    );
};

export default App;
