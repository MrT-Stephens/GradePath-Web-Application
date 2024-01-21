"use client";

import { useState } from "react";

export default function AddressLineOneInput({ onAddressLineOneChange, className }) {
    const [userAddressLine1, setUserAddressLine1] = useState("");

    const handleChange = (e) => {
        setUserAddressLine1(e.target.value);
        onAddressLineOneChange(e.target.value);
    };

    return (
        <input
            type="text"
            className={className || ""}
            id="userAddressLine1"
            name="userAddressLine1"
            value={userAddressLine1}
            onChange={handleChange}
            placeholder="Address Line 1"
        />
    );
}