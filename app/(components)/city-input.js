"use client";

import { useState } from "react";

export default function CityInput({ onCityChange, className, enabled = true }) {
    const [userCity, setUserCity] = useState("");
    const [userCityCorrect, setUserCityCorrect] = useState(false);

    const handleChange = (e) => {
        setUserCity(e.target.value);
        onCityChange(e.target.value);

        let cityRegex = /^[a-zA-Z]{2,20}$/;
        setUserCityCorrect(cityRegex.test(e.target.value));
    };

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userCityCorrect ? "border-green-500" : "border-red-500"
            }`}
            id="userCity"
            name="userCity"
            value={userCity}
            onChange={handleChange}
            placeholder="City"
            disabled={!enabled}
        />
    );
}
