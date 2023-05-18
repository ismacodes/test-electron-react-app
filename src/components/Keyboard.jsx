import React from "react";
import KeyCap from "./KeyCap";
import "../sytles/Keyboard.css";

const Keyboard = ({ handleCustomize }) => {
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
                    <KeyCap id={6} onClick={handleCustomize}/>
                    <KeyCap id={7} onClick={handleCustomize}/>
                    <KeyCap id={8} onClick={handleCustomize}/>
                </div>
                <div className="col-4">
                    <KeyCap id={9} onClick={handleCustomize}/>
                    <KeyCap id={10} onClick={handleCustomize}/>
                    <KeyCap id={11} onClick={handleCustomize}/>
                </div>
                <div className="col-5">
                    <KeyCap id={12} onClick={handleCustomize}/>
                    <KeyCap id={13} onClick={handleCustomize}/>
                    <KeyCap id={14} onClick={handleCustomize}/>
                </div>
                <div className="col-6">
                    <KeyCap id={15} onClick={handleCustomize}/>
                    <KeyCap id={16} onClick={handleCustomize}/>
                    <KeyCap id={17} onClick={handleCustomize}/>
                </div>

                {/* Right half of keyboard */}
                <div className="col-7">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
                <div className="col-8">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
                <div className="col-9">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
                <div className="col-10">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
            <div className="col-11">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
                <div className="col-12">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>

                {/* Left side thumb buttons */}
                <div className="left-thumb-1">
                    <KeyCap id={18} onClick={handleCustomize}/>
                </div>
                <div className="left-thumb-2">
                    <KeyCap id={19} onClick={handleCustomize}/>
                </div>
                <div className="left-thumb-3">
                    <KeyCap id={20} onClick={handleCustomize}/>
                </div>

                {/* Right side thumb buttons */}
                <div className="right-thumb-1">
                    <KeyCap />
                </div>
                <div className="right-thumb-2">
                    <KeyCap />
                </div>
                <div className="right-thumb-3">
                    <KeyCap />
                </div>
            </div>
        </div>
    );
};

export default Keyboard;
