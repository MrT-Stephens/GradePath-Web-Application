"use client";

import { useState, useEffect } from "react";

export default function AddressLineTwoInput({
    onAddressLineTwoChange,
    className,
    enabled = true,
    value
}) {
    const [userAddressLine2, setUserAddressLine2] = useState("");
    const [userAddressLineTwoCorrect, setUserAddressLineTwoCorrect] =
        useState(true);

    const validate = (value) => {
        let AddressLineTwoRegex = /^[a-zA-Z0-9\s.,#'-]{0,100}$/;
        setUserAddressLineTwoCorrect(AddressLineTwoRegex.test(value));
    };

    const handleChange = (e) => {
        setUserAddressLine2(e.target.value);
        onAddressLineTwoChange(e.target.value);
        validate(e.target.value);
    };

    useEffect(() => {
        setUserAddressLine2(value);
        validate(value);
    }, [value]);

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userAddressLineTwoCorrect
                    ? "focus:border-green-500"
                    : "focus:border-red-500"
            }`}
            id="userAddressLine2"
            name="userAddressLine2"
            value={userAddressLine2}
            onChange={handleChange}
            placeholder="Address Line 2"
            disabled={!enabled}
        />
    );
}
