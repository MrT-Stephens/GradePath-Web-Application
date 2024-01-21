"use client";

import { useState } from "react";

export default function AddressLineTwoInput({ onAddressLineTwoChange, className }) {
    const [userAddressLine2, setUserAddressLine2] = useState("");

    const handleChange = (e) => {
        setUserAddressLine2(e.target.value);
        onAddressLineTwoChange(e.target.value);
    };

    return (
        <input
            type="text"
            className={className || ""}
            id="userAddressLine2"
            name="userAddressLine2"
            value={userAddressLine2}
            onChange={handleChange}
            placeholder="Address Line 2"
        />
    );
}