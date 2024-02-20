"use client";

import { useState, useEffect } from "react";

export default function CityInput({
    onCityChange,
    className,
    enabled = true,
    value,
}) {
    const [userCity, setUserCity] = useState("");
    const [userCityCorrect, setUserCityCorrect] = useState(false);

    const validate = (value) => {
        let cityRegex = /^[a-zA-Z]{2,20}$/;
        return cityRegex.test(value);
    };

    const handleChange = (e) => {
        setUserCity(e.target.value);
        const valid = validate(e.target.value);
        onCityChange(e.target.value, valid);
        setUserCityCorrect(valid);
    };

    useEffect(() => {
        setUserCity(value);
        validate(value);
    }, [value]);

    return (
        <input
            type="text"
            className={`${className || ""} border-2 ${
                userCityCorrect
                    ? "focus:border-green-500"
                    : "focus:border-red-500"
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
