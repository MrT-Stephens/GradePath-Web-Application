import Image from "next/image";
import db from "../../(db)/index";
import { cookies } from "next/headers";

const GetUserName = async () => {
    const user = await db.getUser(cookies());
    return user?.userFName;
};

export default async function Page() {
    const userName = await GetUserName();

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] p-3 grid grid-cols-3">
                {/* Left Navbar buttons */}
                <div className="flex items-center">
                    <h1 className="text-white font-bold py-2 px-4 rounded bg-blue-500">
                        Hello, {userName}!
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
                        href="/user/main/account/"
                        className="text-white font-bold py-2 px-4 rounded bg-green-500 hover:opacity-75"
                    >
                        Account Settings
                    </a>

                    <button
                        className="text-white font-bold py-2 px-4 rounded bg-red-500 hover:opacity-75"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            {/* Line break between Navbar and Content */}
            <div className="h-1 bg-gradient-to-r from-green-500 to-blue-600"></div>

            {/* Main Content */}
            <main className="flex flex-col min-h-screen items-center justify-center p-10"></main>
        </div>
    );
}
