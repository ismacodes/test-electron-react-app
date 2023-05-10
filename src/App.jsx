import React, { useState } from "react";
import KeyCap from "./components/KeyCap";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";

const App = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    return (
        <div>
            <Header />
            <Keyboard />
        </div>
    );
};

export default App;
