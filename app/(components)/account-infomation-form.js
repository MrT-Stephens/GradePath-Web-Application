"use client";

import { useState } from "react";
import FirstNameInput from "./inputs/first-name-input";
import LastNameInput from "./inputs/last-name-input";
import DoBInput from "./inputs/dob-input";
import AddressLineOneInput from "./inputs/address-line-one-input";
import AddressLineTwoInput from "./inputs/address-line-two-input";
import CityInput from "./inputs/city-input";
import PostcodeInput from "./inputs/postcode-input";
import MessageBox from "./message-box";
import { useRouter } from "next/navigation";

export default function AccountInfomationForm({ userData }) {
    const [userFName, setUserFName] = useState(userData?.userFName || "");
    const [userLName, setUserLName] = useState(userData?.userLName || "");
    const [userDoB, setUserDoB] = useState(userData?.userDoB || "");
    const [userAddressLine1, setUserAddressLine1] = useState(
        userData?.userAddressLine1 || ""
    );
    const [userAddressLine2, setUserAddressLine2] = useState(
        userData?.userAddressLine2 || ""
    );
    const [userCity, setUserCity] = useState(userData?.userCity || "");
    const [userPostcode, setUserPostcode] = useState(
        userData?.userPostcode || ""
    );
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);

    const router = useRouter();

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditing === false) return;

        try {
            const form = {
                userFName,
                userLName,
                userDoB,
                userAddressLine1,
                userAddressLine2,
                userCity,
                userPostcode
            };

            const response = await fetch("/api/user/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                setError("Failed to update user information");
                setIsEditing(false);
                setShowError(true);
                return;
            }
            else {
                setIsEditing(false);
                router.refresh();
                return;
            }
        } catch (err) {
            console.log(err);
            setError("Failed to update user information");
        }

        setIsEditing(false);
        setShowError(true);
    };

    return (
        <div className="lg:w-1/2 w-full bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-xl mb-8">
            {showError ? (
                <MessageBox
                    title="Error"
                    message={error}
                    onClose={() => setShowError(false)}
                />
            ) : (
                <></>
            )}

            <form className="relative bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl overflow-hidden">
                <div className="p-8 text-black dark:text-white grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <h1 className="text-3xl font-bold mb-4 mt-4 lg:col-span-2">
                        Account Information
                    </h1>

                    <FirstNameInput
                        onFirstNameChange={(value) => setUserFName(value)}
                        className="min-w-60 h-10 rounded-xl text-black p-2"
                        value={userFName}
                        enabled={isEditing}
                    />
                    <LastNameInput
                        onLastNameChange={(value) => setUserLName(value)}
                        className="min-w-60 h-10 rounded-xl text-black p-2"
                        value={userLName}
                        enabled={isEditing}
                    />
                    <DoBInput
                        onDoBChange={(value) => setUserDoB(value)}
                        className="min-w-60 h-10 rounded-xl text-black p-2"
                        value={userDoB}
                        enabled={isEditing}
                    />
                    <AddressLineOneInput
                        onAddressLineOneChange={(value) =>
                            setUserAddressLine1(value)
                        }
                        className="min-w-60 h-10 rounded-xl text-black p-2"
                        value={userAddressLine1}
                        enabled={isEditing}
                    />
                    <AddressLineTwoInput
                        onAddressLineTwoChange={(value) =>
                            setUserAddressLine2(value)
                        }
                        className="min-w-60 h-10 rounded-xl text-black p-2"
                        value={userAddressLine2}
                        enabled={isEditing}
                    />
                    <CityInput
                        onCityChange={(value) => setUserCity(value)}
                        className="min-w-60 h-10 rounded-xl text-black p-2"
                        value={userCity}
                        enabled={isEditing}
                    />
                    <PostcodeInput
                        onPostcodeChange={(value) => setUserPostcode(value)}
                        className="min-w-60 h-10 rounded-xl text-black p-2 lg:col-span-2"
                        value={userPostcode}
                        enabled={isEditing}
                    />
                </div>

                {/* Edit and Save buttons */}
                <div className="flex justify-center items-end mt-4 space-x-2 mb-4">
                    <button
                        className="bg-green-500 hover:opacity-75 text-black dark:text-white font-bold py-2 px-4 rounded"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-blue-500 hover:opacity-75 text-black dark:text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
