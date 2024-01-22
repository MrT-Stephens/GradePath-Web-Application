"use client";

import { useState, useEffect } from "react";

export default function DoBInput({ onDoBChange, className, enabled = true, value }) {
    const [userDoB, setUserDoB] = useState("");
    const [userDoBCorrect, setUserDoBCorrect] = useState(false);

    const validate = (value) => {
        let DoBRegex = /^\d{4}-\d{2}-\d{2}$/;
        setUserDoBCorrect(DoBRegex.test(value));
    };

    const handleChange = (e) => {
        setUserDoB(e.target.value);
        onDoBChange(e.target.value);
        validate(e.target.value);
    };

    useEffect(() => {
        setUserDoB(value);
        validate(value);
    }, [value]);

    return (
        <input
            type="date"
            className={`${className || ""} border-2 ${
                userDoBCorrect ? "border-green-500" : "border-red-500"
            }`}
            id="userDoB"
            name="userDoB"
            value={userDoB}
            onChange={handleChange}
            placeholder="Date of Birth"
            disabled={!enabled}
        />
    );
}
