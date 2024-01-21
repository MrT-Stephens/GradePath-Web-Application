"use client";

import { useState } from "react";

export default function AddressLineTwoInput({
    onAddressLineTwoChange,
    className,
}) {
    const [userAddressLine2, setUserAddressLine2] = useState("");
    const [userAddressLineTwoCorrect, setUserAddressLineTwoCorrect] =
        useState(true);

    const handleChange = (e) => {
        setUserAddressLine2(e.target.value);
        onAddressLineTwoChange(e.target.value);

        let AddressLineTwoRegex = /^[a-zA-Z0-9\s.,#'-]{0,100}$/;
        setUserAddressLineTwoCorrect(AddressLineTwoRegex.test(e.target.value));
    };

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userAddressLineTwoCorrect
                    ? "border-green-500"
                    : "border-red-500"
            }`}
            id="userAddressLine2"
            name="userAddressLine2"
            value={userAddressLine2}
            onChange={handleChange}
            placeholder="Address Line 2"
        />
    );
}
