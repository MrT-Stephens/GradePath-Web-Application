"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import EmailInput from "@/app/(components)/email-input";
import PasswordInput from "@/app/(components)/password-input";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = { email, password };
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                setError("Failed to authenticate user");
            }

            const data = await response.json();

            if (data?.token) {
                router.push(`/user/main/`);
            } else {
                setError("Failed to authenticate user");
            }
        } catch (error) {
            setError("Failed to authenticate user");
        }
    };

    return (
        <form
            className="flex flex-col items-center justify-center space-y-5"
            onSubmit={handelSubmit}
        >
            <EmailInput
                onEmailChange={(value) => setEmail(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
            />
            <PasswordInput
                onPasswordChange={(value) => setPassword(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
            />

            <button
                type="submit"
                className="group w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl"
            >
                Login{" "}
                <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                    -&gt;
                </span>
            </button>
            <h6 className="text-center text-gray-400">
                Don't have an account?
            </h6>
            <a
                href="/auth/register"
                className="group flex items-center justify-center w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl"
            >
                Create your GradePath account{" "}
                <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                    -&gt;
                </span>
            </a>
        </form>
    );
}
