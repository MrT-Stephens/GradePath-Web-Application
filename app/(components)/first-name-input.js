"use client";

import { useState } from "react";

export default function FirstNameInput({ onFirstNameChange, className, enabled = true }) {
    const [userFName, setUserFName] = useState("");
    const [userFNameCorrect, setUserFNameCorrect] = useState(false);

    const handleChange = (e) => {
        setUserFName(e.target.value);
        onFirstNameChange(e.target.value);

        let fNameRegex = /^[a-zA-Z0-9]{2,20}$/;
        setUserFNameCorrect(fNameRegex.test(e.target.value));
    };

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userFNameCorrect ? "border-green-500" : "border-red-500"
            }`}
            id="userFName"
            name="userFName"
            value={userFName}
            onChange={handleChange}
            placeholder="First Name"
            disabled={!enabled}
        />
    );
}
