"use client";

import { useState } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

export default function Register() {
    const [userFName, setUserFName] = useState("");
    const [userLName, setUserLName] = useState("");
    const [userDoB, setUserDoB] = useState("");
    const [userAddressLine1, setUserAddressLine1] = useState("");
    const [userAddressLine2, setUserAddressLine2] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userPostcode, setUserPostcode] = useState("");
    const [email, setEmail] = useState("");
    const [emailCorrect, setEmailCorrect] = useState(false);
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [termsState, setTermsState] = useState(false);

    const pbClient = new PocketBase("http://localhost:8090");
    const router = useRouter();

    // Email validation function
    // This function is called every time the user types in the email input
    // It checks if the email is valid and sets the emailCorrect state to true or false
    // This is used to change the border colour of the email input
    const validateEmail = (email) => {
        // Regex for email validation
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Set the emailCorrect state to true or false depending on if the email is valid
        setEmailCorrect(emailRegex.test(email));
    };

    const handelSubmit = async (e) => {
        e.preventDefault();

        var response;

        if (termsState) {
            // If the user has accepted the terms and conditions
            try {
                response = await pbClient.collection("users").create({
                    email: email,
                    emailVisibility: true,
                    password: password,
                    passwordConfirm: confirm,
                    userFName: userFName,
                    userLName: userLName,
                    userDoB: userDoB,
                    userAddressLine1: userAddressLine1,
                    userAddressLine2: userAddressLine2,
                    userCity: userCity,
                    userPostcode: userPostcode,
                });
            } catch (error) {
                alert(error);
                setUserFName("");
                setUserLName("");
                setUserDoB("");
                setUserAddressLine1("");
                setUserAddressLine2("");
                setUserCity("");
                setUserPostcode("");
                setEmail("");
                setPassword("");
                setConfirm("");
                console.log(error);
                return;
            }

            router.push(`/user/${response.id}`);
        }
    };

    return (
        <form
            className="flex flex-col items-center justify-center space-y-5"
            onSubmit={handelSubmit}
        >
            <input
                type="text"
                className="w-80 h-10 rounded-xl text-black p-2"
                placeholder="First Name"
                value={userFName}
                onChange={(e) => setUserFName(e.target.value)}
            />
            <input
                type="text"
                className="w-80 h-10 rounded-xl text-black p-2"
                placeholder="Last Name"
                value={userLName}
                onChange={(e) => setUserLName(e.target.value)}
            />
            <input
                type="data"
                className="w-80 h-10 rounded-xl text-black p-2"
                placeholder="Date of Birth"
                value={userDoB}
                onChange={(e) => setUserDoB(e.target.value)}
            />
            <input
                type="text"
                className="w-80 h-10 rounded-xl text-black p-2"
                placeholder="Address Line 1"
                value={userAddressLine1}
                onChange={(e) => setUserAddressLine1(e.target.value)}
            />
            <input
                type="text"
                className="w-80 h-10 rounded-xl text-black p-2"
                placeholder="Address Line 2"
                value={userAddressLine2}
                onChange={(e) => setUserAddressLine2(e.target.value)}
            />
            <input
                type="text"
                className="w-80 h-10 rounded-xl text-black p-2"
                placeholder="City"
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
            />
            <input
                type="text"
                className="w-80 h-10 rounded-xl text-black p-2"
                placeholder="Postcode"
                value={userPostcode}
                onChange={(e) => setUserPostcode(e.target.value)}
            />
            <input
                type="email"
                className={`w-80 h-10 rounded-xl text-black p-2 border-2 ${
                    emailCorrect ? "border-green-400" : "border-red-400"
                }`} // If the email is correct, set the border colour to green, else set it to red
                placeholder="Email"
                value={email}
                onChange={(e) => {
                    // When the user types in the email input, this function is called
                    setEmail(e.target.value); // Set the email state to the value of the email input
                    validateEmail(e.target.value); // Call the validateEmail function with the value of the email input
                }}
            />
            <p className="text-gray-400 text-xs text-center">
                {emailCorrect ? "Email is correct" : "Email is incorrect"}
            </p>
            <input
                type="password"
                className="w-80 h-10 rounded-xl text-black p-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                className="w-80 h-10 rounded-xl text-black p-2"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
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
                href="/login"
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
