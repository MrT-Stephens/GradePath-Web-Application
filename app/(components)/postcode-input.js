"use client";

import { useState } from "react";

export default function PostcodeInput({ onPostcodeChange, className, enabled = true }) {
    const [userPostcode, setUserPostcode] = useState("");
    const [userPostcodeCorrect, setUserPostcodeCorrect] = useState(false);

    const handleChange = (e) => {
        setUserPostcode(e.target.value);
        onPostcodeChange(e.target.value);

        let PostcodeRegex = /^[a-zA-Z0-9\s-]{3,10}$/;
        setUserPostcodeCorrect(PostcodeRegex.test(e.target.value));
    };

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userPostcodeCorrect ? "border-green-500" : "border-red-500"
            }`}
            id="userPostcode"
            name="userPostcode"
            value={userPostcode}
            onChange={handleChange}
            placeholder="Postcode"
            disabled={!enabled}
        />
    );
}
