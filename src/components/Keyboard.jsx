import React, { useState } from "react";
import KeyCap from "./KeyCap";
import "../sytles/Keyboard.css";

const Keyboard = ({ handleCustomize }) => {
    const [keyMaps, setKeyMaps] = useState({
        0: "-",
        1: "-",
        2: "-",
        3: "-",
        4: "-",
        5: "-",
        6: "-",
        7: "-",
        8: "-",
        9: "-",
        10: "-",
        11: "-",
        12: "-",
        13: "-",
        14: "-",
        15: "-",
        16: "-",
        17: "-",
        18: "-",
        19: "-",
        20: "-",
        21: "-",
        22: "-",
        23: "-",
        24: "-",
        25: "-",
        26: "-",
        27: "-",
        28: "-",
        29: "-",
        30: "-",
        31: "-",
        32: "-",
        33: "-",
        34: "-",
        35: "-",
        36: "-",
        37: "-",
        38: "-",
        39: "-",
        40: "-",
    });
    return (
        <div className="keyboard-container">
            <div className="relative">
                {/* Left half of keyboard */}
                <div className="col-1">
                    <KeyCap id={0} onClick={handleCustomize} />
                    <KeyCap id={1} onClick={handleCustomize} />
                    <KeyCap id={2} onClick={handleCustomize} />
                </div>
                <div className="col-2">
                    <KeyCap id={3} onClick={handleCustomize} />
                    <KeyCap id={4} onClick={handleCustomize} />
                    <KeyCap id={5} onClick={handleCustomize} />
                </div>
                <div className="col-3">
                    <KeyCap id={6} onClick={handleCustomize} />
                    <KeyCap id={7} onClick={handleCustomize} />
                    <KeyCap id={8} onClick={handleCustomize} />
                </div>
                <div className="col-4">
                    <KeyCap id={9} onClick={handleCustomize} />
                    <KeyCap id={10} onClick={handleCustomize} />
                    <KeyCap id={11} onClick={handleCustomize} />
                </div>
                <div className="col-5">
                    <KeyCap id={12} onClick={handleCustomize} />
                    <KeyCap id={13} onClick={handleCustomize} />
                    <KeyCap id={14} onClick={handleCustomize} />
                </div>
                <div className="col-6">
                    <KeyCap id={15} onClick={handleCustomize} />
                    <KeyCap id={16} onClick={handleCustomize} />
                    <KeyCap id={17} onClick={handleCustomize} />
                </div>

                {/* Right half of keyboard */}
                <div className="col-7">
                    <KeyCap id={21} onClick={handleCustomize}/>
                    <KeyCap id={22} onClick={handleCustomize}/>
                    <KeyCap id={20} onClick={handleCustomize}/>
                </div>
                <div className="col-8">
                    <KeyCap id={23} onClick={handleCustomize}/>
                    <KeyCap id={24} onClick={handleCustomize}/>
                    <KeyCap id={25} onClick={handleCustomize}/>
                </div>
                <div className="col-9">
                    <KeyCap id={26} onClick={handleCustomize}/>
                    <KeyCap id={27} onClick={handleCustomize}/>
                    <KeyCap id={28} onClick={handleCustomize}/>
                </div>
                <div className="col-10">
                    <KeyCap id={29} onClick={handleCustomize}/>
                    <KeyCap id={30} onClick={handleCustomize}/>
                    <KeyCap id={31} onClick={handleCustomize}/>
                </div>
                <div className="col-11">
                    <KeyCap id={32} onClick={handleCustomize}/>
                    <KeyCap id={33} onClick={handleCustomize}/>
                    <KeyCap id={34} onClick={handleCustomize}/>
                </div>
                <div className="col-12">
                    <KeyCap id={35} onClick={handleCustomize}/>
                    <KeyCap id={36} onClick={handleCustomize}/>
                    <KeyCap id={37} onClick={handleCustomize}/>
                </div>

                {/* Left side thumb buttons */}
                <div className="left-thumb-1">
                    <KeyCap id={18} onClick={handleCustomize} />
                </div>
                <div className="left-thumb-2">
                    <KeyCap id={19} onClick={handleCustomize} />
                </div>
                <div className="left-thumb-3">
                    <KeyCap id={20} onClick={handleCustomize} />
                </div>

                {/* Right side thumb buttons */}
                <div className="right-thumb-1">
                    <KeyCap id={38} onClick={handleCustomize}/>
                </div>
                <div className="right-thumb-2">
                    <KeyCap id={39} onClick={handleCustomize}/>
                </div>
                <div className="right-thumb-3">
                    <KeyCap id={40} onClick={handleCustomize}/>
                </div>
            </div>
        </div>
    );
};

export default Keyboard;
