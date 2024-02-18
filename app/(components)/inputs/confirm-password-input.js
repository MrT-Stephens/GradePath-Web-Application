"use client";

import { useState, useEffect } from "react";

export default function ConfirmPasswordInput({
    onConfirmPasswordChange,
    className,
    otherPassword,
    enabled = true,
    value,
}) {
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [userConfirmPasswordCorrect, setUserConfirmPasswordCorrect] =
        useState(false);

    useEffect(() => {
        if (
            userConfirmPassword !== "" &&
            userConfirmPassword === otherPassword
        ) {
            setUserConfirmPasswordCorrect(true);
            onConfirmPasswordChange(userConfirmPassword);
        } else {
            setUserConfirmPasswordCorrect(false);
            onConfirmPasswordChange(userConfirmPassword);
        }
    }, [userConfirmPassword, otherPassword]);

    const handleChange = (e) => {
        setUserConfirmPassword(e.target.value);
    };

    useEffect(() => {
        setUserConfirmPassword(value);
    }, [value]);

    return (
        <input
            type="password"
            className={`${className || ""} border-2 ${
                userConfirmPasswordCorrect
                    ? "focus:border-green-500"
                    : "focus:border-red-500"
            }`}
            id="userConfirmPassword"
            name="userConfirmPassword"
            value={userConfirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            disabled={!enabled}
        />
    );
}
