"use client";

import { useState } from "react";

export default function PasswordInput({ onPasswordChange, className }) {
    const [userPassword, setUserPassword] = useState("");

    const handleChange = (e) => {
        setUserPassword(e.target.value);
        onPasswordChange(e.target.value);
    };

    return (
        <input
            type="password"
            className={className || ""}
            id="userPassword"
            name="userPassword"
            value={userPassword}
            onChange={handleChange}
            placeholder="Password"
        />
    );
}