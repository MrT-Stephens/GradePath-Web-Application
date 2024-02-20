"use client";

import { useEffect, useState } from "react";

export default function FirstNameInput({
    onFirstNameChange,
    className,
    enabled = true,
    value,
}) {
    const [userFName, setUserFName] = useState("");
    const [userFNameCorrect, setUserFNameCorrect] = useState(false);

    const validate = (value) => {
        let fNameRegex = /^[a-zA-Z0-9]{2,20}$/;
        return fNameRegex.test(value);
    };

    const handleChange = (e) => {
        setUserFName(e.target.value);
        const valid = validate(e.target.value);
        onFirstNameChange(e.target.value, valid);
        setUserFNameCorrect(valid);
    };

    useEffect(() => {
        setUserFName(value);
        validate(value);
    }, [value]);

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userFNameCorrect
                    ? "focus:border-green-500"
                    : "focus:border-red-500"
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
