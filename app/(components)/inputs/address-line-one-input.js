"use client";

import { useState, useEffect } from "react";

export default function AddressLineOneInput({
    onAddressLineOneChange,
    className,
    enabled = true,
    value
}) {
    const [userAddressLine1, setUserAddressLine1] = useState("");
    const [userAddressLineOneCorrect, setUserAddressLineOneCorrect] =
        useState(false);

    const validate = (value) => {
        let AddressLineOneRegex = /^[a-zA-Z0-9\s.,#'-]{2,100}$/;
        setUserAddressLineOneCorrect(AddressLineOneRegex.test(value));
    };

    const handleChange = (e) => {
        setUserAddressLine1(e.target.value);
        onAddressLineOneChange(e.target.value);
        validate(e.target.value);
    };

    useEffect(() => {
        setUserAddressLine1(value);
        validate(value);
    }, [value]);

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userAddressLineOneCorrect
                    ? "border-green-500"
                    : "border-red-500"
            }`}
            id="userAddressLine1"
            name="userAddressLine1"
            value={userAddressLine1}
            onChange={handleChange}
            placeholder="Address Line 1"
            disabled={!enabled}
        />
    );
}
