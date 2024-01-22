import Image from "next/image";
import AccountInfomationForm from "@/app/(components)/account-infomation-form";
import db from "@/app/(db)/index";
import { cookies } from "next/headers";

// Access Point : http://localhost:3000/user/guest/account

export default async function Page() {
    const user = await db.getUser(cookies());

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] p-3 grid grid-cols-3">
                {/* Left Navbar buttons */}
                <div className="flex items-center">
                    <h1 className="text-white font-bold py-2 px-4 rounded bg-blue-500">
                        Hello, {user?.userFName}!
                    </h1>
                </div>

                {/* Centered Logo */}
                <div className="flex items-center justify-center col-span-1">
                    <a href="/">
                        {/* Centered Image */}
                        <Image
                            src="/GradePathLogo.svg"
                            alt="GradePath Logo"
                            width={50}
                            height={50}
                        />
                    </a>
                </div>

                {/* Right Navbar button */}
                <div className="flex items-center justify-end">
                    <a
                        href="/user/main/"
                        className="text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-600"
                    >
                        Account Grades
                    </a>
                </div>
            </nav>

            {/* Line break between Navbar and Content */}
            <div className="h-1 bg-gradient-to-r from-green-500 to-blue-600"></div>

            {/* Main Content */}
            <main className="flex flex-col min-h-screen items-center justify-center p-10">
                <AccountInfomationForm userData={user} />

                {/* Account Security Panel */}
                <div className="relative w-5/12 h-1/2 bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-md overflow-hidden mb-8">
                    <div className="p-8 text-white grid grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-4 mt-4">
                                Account Security
                            </h2>

                            <div className="mb-6">
                                <p className="text-lg text-white">
                                    Verification Status:
                                </p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">
                                        {user.verified
                                            ? "Verified"
                                            : "Not Verified"}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Password:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">
                                        *************
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="mb-6">
                            <div style={{ height: "103px" }}></div>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded mb-20">
                                Request Verification Email
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-8">
                                Change Password
                            </button>
                        </div>
                    </div>

                    {/* Gradient effect on the border */}
                    <div
                        className="absolute inset-0 border-4"
                        style={{
                            borderImage:
                                "linear-gradient(to right, #68D391, #4299E1) 1",
                            borderImageSlice: 1,
                        }}
                    ></div>
                </div>

                {/* Account Deletion Panel */}
                <div className="relative w-5/12 h-1/2 bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-md overflow-hidden mb-8">
                    <div className="p-8 text-white grid grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-4 mt-4">
                                Delete Account
                            </h2>
                        </div>
                    </div>

                    {/* Edit and Save buttons */}
                    <div className="flex justify-center items-end mt-4 space-x-2 mb-4">
                        <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </button>
                    </div>

                    {/* Gradient effect on the border */}
                    <div
                        className="absolute inset-0 border-4"
                        style={{
                            borderImage:
                                "linear-gradient(to right, #FF0000, #FF0000) 1",
                            borderImageSlice: 1,
                        }}
                    ></div>
                </div>
            </main>
        </div>
    );
}
