import Image from "next/image";
import AccountInfomationForm from "@/app/(components)/account-infomation-form";
import AccountSecurityForm from "@/app/(components)/account-security-form";
import DeleteAccountForm from "@/app/(components)/delete-account-form";
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

                <AccountSecurityForm verified={user?.verified} />

                <DeleteAccountForm />
            </main>
        </div>
    );
}
