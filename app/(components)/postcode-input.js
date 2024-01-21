"use client";

import { useState } from "react";

export default function PostcodeInput({ onPostcodeChange, className }) {
    const [userPostcode, setUserPostcode] = useState("");

    const handleChange = (e) => {
        setUserPostcode(e.target.value);
        onPostcodeChange(e.target.value);
    };

    return (
        <input
            type="text"
            className={className || ""}
            id="userPostcode"
            name="userPostcode"
            value={userPostcode}
            onChange={handleChange}
            placeholder="Postcode"
        />
    );
}