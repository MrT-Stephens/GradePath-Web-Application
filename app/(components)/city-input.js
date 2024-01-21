"use client";

import { useState } from "react";

export default function CityInput({ onCityChange, className }) {
    const [userCity, setUserCity] = useState("");

    const handleChange = (e) => {
        setUserCity(e.target.value);
        onCityChange(e.target.value);
    };

    return (
        <input
            type="text"
            className={className || ""}
            id="userCity"
            name="userCity"
            value={userCity}
            onChange={handleChange}
            placeholder="City"
        />
    );
}