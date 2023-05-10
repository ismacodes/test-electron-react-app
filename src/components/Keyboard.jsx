import React from "react";
import KeyCap from "./KeyCap";
import "../sytles/Keyboard.css";

const Keyboard = () => {
    return (
        <div className="keyboard-container">
            <div className="relative">
                {/* Left half of keyboard */}
                <div className="col-1">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
                <div className="col-2">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
                <div className="col-3">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
                <div className="col-4">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
                <div className="col-5">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
                </div>
                <div className="col-6">
                    <KeyCap />
                    <KeyCap />
                    <KeyCap />
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
                    <KeyCap />
                </div>
                <div className="left-thumb-2">
                    <KeyCap />
                </div>
                <div className="left-thumb-3">
                    <KeyCap />
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
