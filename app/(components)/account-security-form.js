"use client";

import { useState } from "react";

export default function AccountSecurityForm({ verified }) {
    const [userVerified, setUserVerified] = useState(verified || false);

    const handleChangePassword = (e) => {
        e.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


    };

    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-xl mb-8 lg:w-1/2 w-full">
            <form className="relative bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl overflow-hidden">
                <div className="p-8 text-white grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <h1 className="text-3xl font-bold mb-4 mt-4 lg:col-span-2">
                        Account Security
                    </h1>

                    <p className="min-w-60 h-10 rounded-xl text-black p-2 bg-white">
                        {userVerified ? "Verified" : "Not Verified"}
                    </p>

                    <button className="bg-blue-500 hover:opacity-75 text-white font-bold rounded px-4 py-2">
                        {userVerified ? "Verify" : "Resend Verification"}
                    </button>

                    <p className="min-w-60 h-10 rounded-xl text-black p-2 bg-white">
                        ************
                    </p>

                    <button
                        className="bg-green-500 hover:opacity-75 text-white font-bold rounded px-4 py-2"
                        onClick={handleChangePassword}
                    >
                        Request Change Password
                    </button>

                </div>
            </form>
        </div>
    );
}
