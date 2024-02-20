"use client";

import { useState, useEffect } from "react";

export default function LastNameInput({
    onLastNameChange,
    className,
    enabled = true,
    value,
}) {
    const [userLName, setUserLName] = useState("");
    const [userLNameCorrect, setUserLNameCorrect] = useState(false);

    const validate = (value) => {
        let lNameRegex = /^[a-zA-Z0-9]{2,20}$/;
        return lNameRegex.test(value);
    };

    const handleChange = (e) => {
        setUserLName(e.target.value);
        const valid = validate(e.target.value);
        onLastNameChange(e.target.value, valid);
        setUserLNameCorrect(valid);
    };

    useEffect(() => {
        setUserLName(value);
        validate(value);
    }, [value]);

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userLNameCorrect
                    ? "focus:border-green-500"
                    : "focus:border-red-500"
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
