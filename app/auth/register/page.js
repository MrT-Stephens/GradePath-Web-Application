import RegisterForm from "@/app/(components)/register-form";
import { NavBar, NavBarItem } from "@/app/(components)/navigation-bar";
import CookieMessageBox from "@/app/(components)/cookie-message-box";

export default function Page() {
    return (
        <div>
            <NavBar title="GradePath">
                <NavBarItem href="/#home" text="Home" />
                <NavBarItem href="/#about" text="About" />
                <NavBarItem href="/#contact" text="Contact" />
            </NavBar>

            <div className="h-20 w-full"></div>

            <main className="flex flex-col min-h-screen items-center justify-center p-5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-xl lg:w-1/3">
                    <div className="inline-block bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl p-10 w-full">
                        <h1 className="text-4xl font-bold text-left text-black dark:text-white mb-10">
                            Register your account
                        </h1>
                        <RegisterForm />
                    </div>
                </div>
                <CookieMessageBox
                    title="Cookies"
                    message="For full functionality of the website you must accept these 'Required' cookies."
                />
            </main>
        </div>
    );
}
