"use client";

import { useState } from "react";

export default function LastNameInput({ onLastNameChange, className, enabled = true }) {
    const [userLName, setUserLName] = useState("");
    const [userLNameCorrect, setUserLNameCorrect] = useState(false);

    const handleChange = (e) => {
        setUserLName(e.target.value);
        onLastNameChange(e.target.value);

        let lNameRegex = /^[a-zA-Z0-9]{2,20}$/;
        setUserLNameCorrect(lNameRegex.test(e.target.value));
    };

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userLNameCorrect ? "border-green-500" : "border-red-500"
            }`}
            id="userLName"
            name="userLName"
            value={userLName}
            onChange={handleChange}
            placeholder="Last Name"
            disabled={!enabled}
        />
    );
}
