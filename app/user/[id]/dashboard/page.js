import React from 'react';

export default function Page() {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-2">
                        <button className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-600">
                            Accessibility
                        </button>
                        <button className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-600">
                            Policies
                        </button>
                    </div>
                    <div className="flex">
                        <div className="ml-auto">
                            <button className="text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-600">
                                Settings
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex flex-col min-h-screen items-center justify-center p-10">
                {/* Account Information Panel */}
                <div className="relative w-120 h-140 bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-md overflow-hidden">
                    <div className="p-8 text-white grid grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-4 mt-4">
                                Account Information
                            </h2>

                            <div className="mb-6">
                                <p className="text-lg text-white">Username:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">JohnDoe</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Email:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">JohnDoe@example.com</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">First Name:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">John</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Last Name:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">Doe</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="mb-6" style={{ paddingRight: '20px' }}>
                            <div style={{ height: '67px' }}></div>
                            <div className="mb-6">
                                <p className="text-lg text-white">Address Line:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">26 Hill Crescent</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">City:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">Somecity</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Postcode:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">CF38 4LL</p>
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
            </main>
        </div>
    );
}