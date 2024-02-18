"use client";

import { useState, useEffect } from "react";

export default function PostcodeInput({
    onPostcodeChange,
    className,
    enabled = true,
    value,
}) {
    const [userPostcode, setUserPostcode] = useState("");
    const [userPostcodeCorrect, setUserPostcodeCorrect] = useState(false);

    const validate = (value) => {
        let PostcodeRegex = /^[a-zA-Z0-9\s-]{3,10}$/;
        setUserPostcodeCorrect(PostcodeRegex.test(value));
    };

    const handleChange = (e) => {
        setUserPostcode(e.target.value);
        onPostcodeChange(e.target.value);
        validate(e.target.value);
    };

    useEffect(() => {
        setUserPostcode(value);
        validate(value);
    }, [value]);

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userPostcodeCorrect
                    ? "focus:border-green-500"
                    : "focus:border-red-500"
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
