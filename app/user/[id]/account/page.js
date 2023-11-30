import Image from 'next/image';
import { metadata } from '../../../layout';

export default function Page() {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gradient-to-r from-black-400 to-black-500 p-4 grid grid-cols-3">
                {/* Left Navbar buttons */}
                <div className="flex items-center">
                    <button className="mr-2 text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-600">
                        Accessibility
                    </button>
                    <button className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-600">
                        Policies
                    </button>
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
                                    <p className="text-xl text-white font-bold">JohnSmith</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Email:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">JohnSmith@example.com</p>
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
                                    <p className="text-xl text-white font-bold">Smith</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Date of Birth:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">XX/XX/XX</p>
                                </div>
                            </div>
                            
                        </div>

                        {/* Right Column */}
                        <div className="mb-6" style={{ paddingRight: '20px' }}>
                            <div style={{ height: '67px' }}></div>
                            <div className="mb-6">
                                <p className="text-lg text-white">Address Line 1:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">26 Hill Crescent</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">Address Line 2:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">N/A</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-lg text-white">City:</p>
                                <div className="rounded-lg bg-gray-800 p-4">
                                    <p className="text-xl text-white font-bold">CF38 4LL</p>
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