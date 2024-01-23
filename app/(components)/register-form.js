"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FirstNameInput from "@/app/(components)/inputs/first-name-input";
import LastNameInput from "@/app/(components)/inputs/last-name-input";
import DoBInput from "@/app/(components)/inputs/dob-input";
import AddressLineOneInput from "@/app/(components)/inputs/address-line-one-input";
import AddressLineTwoInput from "@/app/(components)/inputs/address-line-two-input";
import CityInput from "@/app/(components)/inputs/city-input";
import PostcodeInput from "@/app/(components)/inputs/postcode-input";
import EmailInput from "@/app/(components)/inputs/email-input";
import PasswordInput from "@/app/(components)/inputs/password-input";
import ConfirmPasswordInput from "@/app/(components)/inputs/confirm-password-input";
import ErrorMessageBox from "@/app/(components)/error-message-box";

export default function Register() {
    const [userFName, setUserFName] = useState("");
    const [userLName, setUserLName] = useState("");
    const [userDoB, setUserDoB] = useState("");
    const [userAddressLine1, setUserAddressLine1] = useState("");
    const [userAddressLine2, setUserAddressLine2] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userPostcode, setUserPostcode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [termsState, setTermsState] = useState(false);

    const router = useRouter();

    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = {
                userFName,
                userLName,
                userDoB,
                userAddressLine1,
                userAddressLine2,
                userCity,
                userPostcode,
                email,
                password,
                passwordConfirm,
            };

            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                setError("Failed to create user");
                return;
            }

            const data = await response.json();

            if (data) {
                router.push("/auth/login");
                return;
            } else {
                setError("Failed to create user");
            }
        } catch (err) {
            setError("Failed to create user");
        }

        setShowError(true);
    };

    return (
        <form
            className="flex flex-col items-center justify-center space-y-5"
            onSubmit={handelSubmit}
        >
            {showError ? (
                <ErrorMessageBox
                    message={error}
                    onClose={() => setShowError(false)}
                />
            ) : (
                <></>
            )}

            <FirstNameInput
                onFirstNameChange={(value) => setUserFName(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                value={userFName}
            />
            <LastNameInput
                onLastNameChange={(value) => setUserLName(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                value={userLName}
            />
            <DoBInput
                onDoBChange={(value) => setUserDoB(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                value={userDoB}
            />
            <AddressLineOneInput
                onAddressLineOneChange={(value) => setUserAddressLine1(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                value={userAddressLine1}
            />
            <AddressLineTwoInput
                onAddressLineTwoChange={(value) => setUserAddressLine2(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                value={userAddressLine2}
            />
            <CityInput
                onCityChange={(value) => setUserCity(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                value={userCity}
            />
            <PostcodeInput
                onPostcodeChange={(value) => setUserPostcode(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                value={userPostcode}
            />
            <EmailInput
                onEmailChange={(value) => setEmail(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                value={email}
            />
            <PasswordInput
                onPasswordChange={(value) => setPassword(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                value={password}
            />
            <ConfirmPasswordInput
                onConfirmPasswordChange={(value) => setPasswordConfirm(value)}
                className="w-80 h-10 rounded-xl text-black p-2"
                otherPassword={password}
                value={passwordConfirm}
            />

            <button
                type="submit"
                className="group w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl"
            >
                Create Account{" "}
                <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                    -&gt;
                </span>
            </button>
            <h6 className="text-center text-gray-400">
                Already have an account?
            </h6>
            <a
                href="/auth/login"
                className="group flex items-center justify-center w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl"
            >
                Login to your GradePath account{" "}
                <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                    -&gt;
                </span>
            </a>
        </form>
    );
}
