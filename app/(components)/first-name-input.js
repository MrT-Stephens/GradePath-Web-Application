"use client";

import { useState } from "react";

export default function FirstNameInput({ onFirstNameChange, className }) {
    const [userFName, setUserFName] = useState("");

    const handleChange = (e) => {
        setUserFName(e.target.value);
        onFirstNameChange(e.target.value);
    };

    return (
        <input
            type="text"
            className={className || ""}
            id="userFName"
            name="userFName"
            value={userFName}
            onChange={handleChange}
            placeholder="First Name"
        />
    );
}
