"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import EmailInput from "@/app/(components)/inputs/email-input";
import PasswordInput from "@/app/(components)/inputs/password-input";
import MessageBox from "@/app/(components)/message-box";

export default function Login() {
    const [email, setEmail] = useState("");
    const [emailCorrect, setEmailCorrect] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordCorrect, setPasswordCorrect] = useState(false);
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [termsState, setTermsState] = useState(false);

    const router = useRouter();

    const handelSubmit = async (e) => {
        e.preventDefault();

        if (localStorage.getItem("cookieAccepted") === "false") {
            setError("Please accept the cookie policy");
            setShowError(true);
            return;
        }

        setSubmitClicked(true);

        if (!emailCorrect) {
            setError("Email is invalid. Please enter a valid email");
            setShowError(true);
        } else if (!passwordCorrect) {
            setError("Password is invalid. Please enter a valid password");
            setShowError(true);
        } else if (!termsState) {
            setError("Please accept the terms and conditions");
            setShowError(true);
        } else {
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
                    setShowError(true);
                    return;
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
        }
    };

    return (
        <div>
            {showError ? (
                <MessageBox
                    title="Error"
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
                        onEmailChange={(value, valid) => {
                            setEmail(value);
                            setEmailCorrect(valid);
                        }}
                        className="h-10 rounded-xl text-black p-2 mt-1 w-full"
                        value={email}
                    />
                    {!emailCorrect && submitClicked ? (
                        <p
                            className={`text-sm text-red-500 text-left mt-2 transition-all ease-in-out duration-700 ${
                                emailCorrect ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            Email is invalid. Please enter a valid email in the
                            format of 'example@gmail.com'.
                        </p>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="w-full">
                    <label className="text-left text-black dark:text-white">
                        Your password
                    </label>
                    <PasswordInput
                        onPasswordChange={(value, valid) => {
                            setPassword(value);
                            setPasswordCorrect(valid);
                        }}
                        className="h-10 rounded-xl text-black p-2 mt-1 w-full"
                        value={password}
                    />
                    {!passwordCorrect && submitClicked ? (
                        <p
                            className={`text-sm text-red-500 text-left mt-2 transition-all ease-in-out duration-700 ${
                                passwordCorrect ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            Password is invalid. Please enter a valid password
                            with a minimum of 8 characters, at least one
                            uppercase letter, one lowercase letter, one number
                            and one special character (!@#$%^&*).
                        </p>
                    ) : (
                        <></>
                    )}
                </div>

                <div className="flex flex-row space-x-2">
                    <input
                        type="checkbox"
                        className="rounded-xl"
                        id="remember"
                        onChange={() => {
                            setTermsState(!termsState);
                        }}
                    />
                    <a
                        href="/terms"
                        htmlFor="remember"
                        className="text-black dark:text-white hover:underline cursor-pointer"
                    >
                        Accept Terms and Conditions
                    </a>
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
