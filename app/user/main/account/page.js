import Image from "next/image";
import AccountInfomationForm from "@/app/(components)/account-infomation-form";
import AccountSecurityForm from "@/app/(components)/account-security-form";
import DeleteAccountForm from "@/app/(components)/delete-account-form";
import db from "@/app/(db)/index";
import { cookies } from "next/headers";
import { NavBar, NavBarItem } from "@/app/(components)/navigation-bar";

// Access Point : http://localhost:3000/user/guest/account

export default async function Page() {
    const user = await db.getUser(cookies());

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar title={`Hello, ${user.userFName}!`}>
                <NavBarItem href="/#home" text="Home" />
                <NavBarItem href="/#about" text="About" />
                <NavBarItem href="/#contact" text="Contact" />
                <NavBarItem href="/user/main" text="Account Grades" />
            </NavBar>

            <div className="h-20 w-full"></div>

            {/* Main Content */}
            <main className="flex flex-col min-h-screen items-center justify-center p-5">
                <AccountInfomationForm userData={user} />

                <AccountSecurityForm verified={user?.verified} />

                <DeleteAccountForm />
            </main>
        </div>
    );
}
