import RegisterForm from "@/app/(components)/register-form";
import { NavBar, NavBarItem } from "@/app/(components)/navigation-bar";

export default function Page() {
    return (
        <div>
            <NavBar>
                <NavBarItem href="/#home" text="Home" />
                <NavBarItem href="/#about" text="About" />
                <NavBarItem href="/#contact" text="Contact" />
            </NavBar>

            <main className="flex flex-col min-h-screen items-center justify-center p-10">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-xl">
                    <div className="inline-block bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl p-10">
                        <h1 className="text-4xl font-bold text-left text-black dark:text-white mb-10">
                            Register your account
                        </h1>
                        <RegisterForm />
                    </div>
                </div>
            </main>
        </div>
    );
}
