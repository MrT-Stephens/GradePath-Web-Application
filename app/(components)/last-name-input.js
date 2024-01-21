"use client";

import { useState } from "react";

export default function LastNameInput({ onLastNameChange, className }) {
    const [userLName, setUserLName] = useState("");

    const handleChange = (e) => {
        setUserLName(e.target.value);
        onLastNameChange(e.target.value);
    };

    return (
        <input
            type="text"
            className={className || ""}
            id="userLName"
            name="userLName"
            value={userLName}
            onChange={handleChange}
            placeholder="Last Name"
        />
    );
}