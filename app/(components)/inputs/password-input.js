"use client";

import { useState, useEffect } from "react";

export default function PasswordInput({ onPasswordChange, className, enabled = true, value }) {
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordCorrect, setUserPasswordCorrect] = useState(false);

    const validate = (value) => {
        let passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        setUserPasswordCorrect(passwordRegex.test(value));
    };

    const handleChange = (e) => {
        setUserPassword(e.target.value);
        onPasswordChange(e.target.value);
        validate(e.target.value);
    };

    useEffect(() => {
        setUserPassword(value);
        validate(value);
    }, [value]);

    return (
        <input
            type="password"
            className={`${className || ""} border-2 ${
                userPasswordCorrect ? "border-green-500" : "border-red-500"
            }`}
            id="userPassword"
            name="userPassword"
            value={userPassword}
            onChange={handleChange}
            placeholder="Password"
            disabled={!enabled}
        />
    );
}
