"use client";

import { useState, useEffect } from "react";

export default function CookieMessageBox({ title, message }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("cookieAccepted") === "true") {
            return;
        }

        setIsVisible(true);
    }, []);

    return (
        <div
            className={`fixed bottom-0 right-0 z-50 lg:max-w-3xl flex flex-row justify-between p-4 m-10 bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl border-2 border-gray-500 transition-opacity duration-1000 ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <span className="absolute top-0 right-0 flex h-5 w-5 translate-x-2 -translate-y-2 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-green-400 to-blue-500"></span>
            </span>
            <div className="mb-4 md:mb-0 md:me-4">
                <h2 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                </h2>
                <p className="flex items-center text-lg font-normal text-gray-500 dark:text-gray-400">
                    {message}
                </p>
            </div>
            <div className="flex items-center flex-shrink-0 flex-row">
                <button
                    className="flex-shrink-0 inline-flex justify-center w-24 h-10 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                        setIsVisible(false);
                        localStorage.setItem("cookieAccepted", true);
                    }}
                >
                    Accept
                </button>
                <button
                    className="flex-shrink-0 inline-flex justify-center w-24 h-10 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                        setIsVisible(false);
                        localStorage.setItem("cookieAccepted", false);
                    }}
                >
                    Decline
                </button>
            </div>
        </div>
    );
}
