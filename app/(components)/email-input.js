"use client";

import { useState } from "react";

export default function EmailInput({ onEmailChange, className }) {
    const [userEmail, setUserEmail] = useState("");
    const [userEmailCorrect, setUserEmailCorrect] = useState(false);

    const handleChange = (e) => {
        setUserEmail(e.target.value);
        onEmailChange(e.target.value);

        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setUserEmailCorrect(emailRegex.test(e.target.value));
    };

    return (
        <input
            type="email"
            className={`${className || ""} border-2 ${
                userEmailCorrect ? "border-green-500" : "border-red-500"
            }`}
            id="userEmail"
            name="userEmail"
            value={userEmail}
            onChange={handleChange}
            placeholder="Email"
        />
    );
}
