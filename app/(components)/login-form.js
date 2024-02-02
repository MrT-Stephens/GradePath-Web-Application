"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import EmailInput from "@/app/(components)/inputs/email-input";
import PasswordInput from "@/app/(components)/inputs/password-input";
import ErrorMessageBox from "@/app/(components)/error-message-box";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);

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
                return;
            } else {
                setError("Failed to authenticate user");
            }
        } catch (error) {
            setError("Failed to authenticate user");
        }

        setShowError(true);
    };

    return (
        <div>
            {showError ? (
                <ErrorMessageBox
                    message={error}
                    onClose={() => setShowError(false)}
                />
            ) : (
                <></>
            )}
            <form
                className="flex flex-col items-center justify-center space-y-5"
                onSubmit={handelSubmit}
            >
                <div className="w-full">
                    <label className="text-left text-black dark:text-white">
                        Your email
                    </label>
                    <EmailInput
                        onEmailChange={(value) => setEmail(value)}
                        className="h-10 rounded-xl text-black p-2 mt-1 w-full"
                        value={email}
                    />
                </div>
                <div className="w-full">
                    <label className="text-left text-black dark:text-white">
                        Your password
                    </label>
                    <PasswordInput
                        onPasswordChange={(value) => setPassword(value)}
                        className="h-10 rounded-xl text-black p-2 mt-1 w-full"
                        value={password}
                    />
                </div>

                <button
                    type="submit"
                    className="group w-3/4 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl"
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
                    className="group flex items-center justify-center w-3/4 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl"
                >
                    Create account{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </a>
            </form>
        </div>
    );
}
