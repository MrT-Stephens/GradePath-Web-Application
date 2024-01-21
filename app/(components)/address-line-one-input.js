"use client";

import { useState } from "react";

export default function AddressLineOneInput({
    onAddressLineOneChange,
    className,
}) {
    const [userAddressLine1, setUserAddressLine1] = useState("");
    const [userAddressLineOneCorrect, setUserAddressLineOneCorrect] =
        useState(false);

    const handleChange = (e) => {
        setUserAddressLine1(e.target.value);
        onAddressLineOneChange(e.target.value);

        let AddressLineOneRegex = /^[a-zA-Z0-9\s.,#'-]{2,100}$/;
        setUserAddressLineOneCorrect(AddressLineOneRegex.test(e.target.value));
    };

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
        />
    );
}
