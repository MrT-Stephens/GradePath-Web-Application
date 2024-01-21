"use client";

import { useState } from "react";

export default function EmailInput({ onEmailChange, className }) {
    const [userEmail, setUserEmail] = useState("");

    const handleChange = (e) => {
        setUserEmail(e.target.value);
        onEmailChange(e.target.value);
    };

    return (
        <input
            type="email"
            className={className || ""}
            id="userEmail"
            name="userEmail"
            value={userEmail}
            onChange={handleChange}
            placeholder="Email"
        />
    );
}