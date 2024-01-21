"use client";

import { useState, useEffect } from "react";

export default function ConfirmPasswordInput({
    onConfirmPasswordChange,
    className,
    otherPassword,
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

    return (
        <input
            type="password"
            className={`${className || ""} border-2 ${
                userConfirmPasswordCorrect
                    ? "border-green-500"
                    : "border-red-500"
            }`}
            id="userConfirmPassword"
            name="userConfirmPassword"
            value={userConfirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
        />
    );
}
