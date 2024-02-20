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
import MessageBox from "@/app/(components)/message-box";

export default function Register() {
    const [userFName, setUserFName] = useState("");
    const [userFNameCorrect, setUserFNameCorrect] = useState(false);
    const [userLName, setUserLName] = useState("");
    const [userLNameCorrect, setUserLNameCorrect] = useState(false);
    const [userDoB, setUserDoB] = useState("");
    const [userDoBCorrect, setUserDoBCorrect] = useState(false);
    const [userAddressLine1, setUserAddressLine1] = useState("");
    const [userAddressLine1Correct, setUserAddressLine1Correct] =
        useState(false);
    const [userAddressLine2, setUserAddressLine2] = useState("");
    const [userAddressLine2Correct, setUserAddressLine2Correct] =
        useState(true);
    const [userCity, setUserCity] = useState("");
    const [userCityCorrect, setUserCityCorrect] = useState(false);
    const [userPostcode, setUserPostcode] = useState("");
    const [userPostcodeCorrect, setUserPostcodeCorrect] = useState(false);
    const [email, setEmail] = useState("");
    const [emailCorrect, setEmailCorrect] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordCorrect, setPasswordCorrect] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [termsState, setTermsState] = useState(false);

    const router = useRouter();

    const checkError = () => {
        if (!userFNameCorrect) {
            setError(
                "First name is incorrect. Please enter a valid first name."
            );
        } else if (!userLNameCorrect) {
            setError("Last name is incorrect. Please enter a valid last name.");
        } else if (!userDoBCorrect) {
            setError(
                "Date of birth is incorrect. Please enter a valid date of birth."
            );
        } else if (!userAddressLine1Correct) {
            setError(
                "Address line 1 is incorrect. Please enter a valid address line 1."
            );
        } else if (!userAddressLine2Correct) {
            setError(
                "Address line 2 is incorrect. Please enter a valid address line 2."
            );
        } else if (!userCityCorrect) {
            setError("City is incorrect. Please enter a valid city.");
        } else if (!userPostcodeCorrect) {
            setError("Postcode is incorrect. Please enter a valid postcode.");
        } else if (!emailCorrect) {
            setError(
                "Email is invalid. Please enter a valid email in the format of 'example@gmail.com'."
            );
        } else if (!passwordCorrect) {
            setError(
                "Password is invalid. Please enter a valid password with a minimum of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character (!@#$%^&*)."
            );
        } else if (password != passwordConfirm) {
            setError(
                "Passwords do not match. Please enter matching passwords."
            );
        } else if (!termsState) {
            setError("Please accept the terms and conditions.");
        } else {
            return true;
        }

        return false;
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        setSubmitClicked(true);

        if (checkError()) {
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
                    setShowError(true);
                    return;
                }

                const data = await response.json();

                if (data) {
                    router.push("/");
                    return;
                } else {
                    setError("Failed to create user");
                }
            } catch (err) {
                setError("Failed to create user");
            }
        }

        setShowError(true);
    };

    return (
        <div className=" lg:max-w-screen-md">
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
                className="grid lg:grid-cols-2 items-center justify-center gap-5 w-full"
                onSubmit={handelSubmit}
            >
                <FirstNameInput
                    onFirstNameChange={(value, valid) => {
                        setUserFName(value);
                        setUserFNameCorrect(valid);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    value={userFName}
                />
                <LastNameInput
                    onLastNameChange={(value, valid) => {
                        setUserLName(value);
                        setUserLNameCorrect(valid);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    value={userLName}
                />
                <DoBInput
                    onDoBChange={(value, valid) => {
                        setUserDoB(value);
                        setUserDoBCorrect(valid);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    value={userDoB}
                />
                <AddressLineOneInput
                    onAddressLineOneChange={(value, valid) => {
                        setUserAddressLine1(value);
                        setUserAddressLine1Correct(valid);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    value={userAddressLine1}
                />
                <AddressLineTwoInput
                    onAddressLineTwoChange={(value, valid) => {
                        setUserAddressLine2(value);
                        setUserAddressLine2Correct(valid);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    value={userAddressLine2}
                />
                <CityInput
                    onCityChange={(value, valid) => {
                        setUserCity(value);
                        setUserCityCorrect(valid);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    value={userCity}
                />
                <PostcodeInput
                    onPostcodeChange={(value, valid) => {
                        setUserPostcode(value);
                        setUserPostcodeCorrect(valid);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    value={userPostcode}
                />
                <EmailInput
                    onEmailChange={(value, valid) => {
                        setEmail(value);
                        setEmailCorrect(valid);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    value={email}
                />
                <PasswordInput
                    onPasswordChange={(value, valid) => {
                        setPassword(value);
                        setPasswordCorrect(valid);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    value={password}
                />
                <ConfirmPasswordInput
                    onConfirmPasswordChange={(value) => {
                        setPasswordConfirm(value);
                        checkError();
                    }}
                    className="w-full h-10 rounded-xl text-black p-2"
                    otherPassword={password}
                    value={passwordConfirm}
                />

                {(!userFNameCorrect ||
                    !userLNameCorrect ||
                    !userDoBCorrect ||
                    !userAddressLine1Correct ||
                    !userAddressLine2Correct ||
                    !userCityCorrect ||
                    !userPostcodeCorrect ||
                    !emailCorrect ||
                    !passwordCorrect ||
                    password != passwordConfirm ||
                    !termsState) &&
                submitClicked ? (
                    <p className="text-sm text-red-500 text-center mt-2 transition-all ease-in-out duration-700 lg:col-span-2">
                        {error}
                    </p>
                ) : (
                    <></>
                )}

                <div className="flex flex-row space-x-2 lg:col-span-2 justify-center">
                    <input
                        type="checkbox"
                        className="rounded-xl"
                        id="remember"
                        onChange={() => {
                            setTermsState(!termsState);
                        }}
                    />
                    <a
                        htmlFor="remember"
                        className="text-black dark:text-white hover:underline cursor-pointer"
                    >
                        Accept Terms and Conditions
                    </a>
                </div>

                <button
                    type="submit"
                    className="group mx-auto lg:col-span-2 w-3/4 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl"
                >
                    Create Account{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </button>
                <h6 className="text-center text-gray-400 lg:col-span-2">
                    Already have an account?
                </h6>
                <a
                    href="/"
                    className="group mx-auto lg:col-span-2 flex items-center justify-center w-3/4 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl"
                >
                    Login to account{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </a>
            </form>
        </div>
    );
}
