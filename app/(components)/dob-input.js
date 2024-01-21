"use client";

import { useState } from "react";

export default function DoBInput({ onDoBChange, className }) {
    const [userDoB, setUserDoB] = useState("");

    const handleChange = (e) => {
        setUserDoB(e.target.value);
        onDoBChange(e.target.value);
    };

    return (
        <input
            type="date"
            className={className || ""}
            id="userDoB"
            name="userDoB"
            value={userDoB}
            onChange={handleChange}
            placeholder="Date of Birth"
        />
    );
}