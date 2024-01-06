import Image from 'next/image';
import PocketBase from 'pocketbase';
import { metadata } from '../../../layout';


// Access Point : http://localhost:3000/user/guest/account

async function getUserName(userId) {
    const pocketbase = new PocketBase('http://127.0.0.1:8090');

    const user = await pocketbase.collection('users').getOne(userId);

    return user;
}

export default async function Page({ params }) {
    const { id } = params;

    var user;
    var userName;

    if (id === 'guest') {
        userName = 'Guest';
    }
    else {
        user = await getUserName(id);
        userName = `${user.userFName} ${user.userLName}`;
    }

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gradient-to-r from-black-400 to-black-500 p-4 grid grid-cols-3">
                {/* Left Navbar buttons */}
                <div className="flex items-center">
                    <h1 className="text-white font-bold py-2 px-4 rounded bg-blue-500">Hello, {userName}!</h1>
                </div>

                {/* Centered Logo */}
                <div className="flex items-center justify-center col-span-1">
                    <a href="/">
                        {/* Centered Image */}
                        <Image src={metadata.icon} alt="GradePath Logo" width={50} height={80} />
                    </a>
                </div>

                {/* Right Navbar button */}
                <div className="flex items-center justify-end">
                    <button className="text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-600">
                        Settings
                    </button>
                </div>
            </nav>

            {/* Line break between Navbar and Content */}
            <div className="h-1 bg-gradient-to-r from-green-500 to-blue-600"></div>

            {/* Main Content */}
            <main className="flex flex-col min-h-screen items-center justify-center p-10">
                {/* Account Information Panel */}
                <div className="relative w-5/12 h-1/2 bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-md overflow-hidden mb-8">
                    <div className="p-8 text-white grid grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-4 mt-4">
                                Account Information
                            </h2>

                            <div className="mb-6">
                                <p className="text-lg text-white">Email:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">{user.email}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">First Name:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">{user.userFName}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Last Name:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">{user.userLName}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Date of Birth:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">{user.userDoB}</p>
                                </div>
                            </div>

                        </div>

                        {/* Right Column */}
                        <div className="mb-6" style={{ paddingRight: '20px' }}>
                            <div style={{ height: '67px' }}></div>
                            <div className="mb-6">
                                <p className="text-lg text-white">Address Line 1:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">{user.userAddressLine1}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Address Line 2:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">{user.userAddressLine2}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">City:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">{user.userCity}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Postcode:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">{user.userPostcode}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Edit and Save buttons */}
                    <div className="flex justify-center items-end mt-4 space-x-2 mb-4">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                    </div>

                    {/* Gradient effect on the border */}
                    <div
                        className="absolute inset-0 border-4"
                        style={{
                            borderImage: 'linear-gradient(to right, #68D391, #4299E1) 1',
                            borderImageSlice: 1,
                        }}
                    ></div>
                </div>

                {/* Account Security Panel */}
                <div className="relative w-5/12 h-1/2 bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-md overflow-hidden mb-8">
                    <div className="p-8 text-white grid grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-4 mt-4">
                                Account Security
                            </h2>

                            <div className="mb-6">
                                <p className="text-lg text-white">Verification Status:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">{user.verified ? 'Verified' : 'Not Verified'}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Password:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">********</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="mb-6">
                            <div style={{ height: '103px' }}></div>
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
                            borderImage: 'linear-gradient(to right, #68D391, #4299E1) 1',
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
                            borderImage: 'linear-gradient(to right, #FF0000, #FF0000) 1',
                            borderImageSlice: 1,
                        }}
                    ></div>
                </div>
            </main>
        </div>
    );
}