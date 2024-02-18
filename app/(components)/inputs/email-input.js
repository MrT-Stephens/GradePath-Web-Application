"use client";

import { useState, useEffect } from "react";

export default function EmailInput({
    onEmailChange,
    className,
    enabled = true,
    value,
}) {
    const [userEmail, setUserEmail] = useState("");
    const [userEmailCorrect, setUserEmailCorrect] = useState(false);

    const validate = (value) => {
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setUserEmailCorrect(emailRegex.test(value));
    };

    const handleChange = (e) => {
        setUserEmail(e.target.value);
        onEmailChange(e.target.value);
        validate(e.target.value);
    };

    useEffect(() => {
        setUserEmail(value);
        validate(value);
    }, [value]);

    return (
        <input
            type="email"
            className={`${className || ""} border-2 ${
                userEmailCorrect
                    ? "focus:border-green-500"
                    : "focus:border-red-500"
            }`}
            id="userEmail"
            name="userEmail"
            value={userEmail}
            onChange={handleChange}
            placeholder="Email"
            disabled={!enabled}
        />
    );
}
