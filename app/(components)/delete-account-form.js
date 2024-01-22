"use client";

import { useState } from "react";
import PasswordInput from "@/app/(components)/password-input";

export default function DeleteAccountForm() {
    const [password, setPassword] = useState("");

    return (
        <div className="bg-red-500 p-1 rounded-xl mb-8 w-1/2">
            <div className="relative bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl overflow-hidden">
                <div className="p-8 text-white grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <h1 className="text-3xl font-bold mb-4 mt-4 lg:col-span-2">
                        Delete Account
                    </h1>

                    <p className="col-span-2">
                        Enter your password to delete your account. This action is irreversible.
                    </p>

                    <PasswordInput
                        value={password}
                        onChange={(value) => setPassword(value)}
                        className="min-w-60 h-10 rounded-xl text-black p-2 bg-white"
                    />

                    <button className="bg-red-500 hover:opacity-75 text-white font-bold rounded px-4 py-2">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
}
