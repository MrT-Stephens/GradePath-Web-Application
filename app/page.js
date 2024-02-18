import LoginForm from "./(components)/login-form";
import { NavBar, NavBarItem } from "./(components)/navigation-bar";

export default function Home() {
    return (
        <div className="relative">
            <NavBar title="GradePath">
                <NavBarItem href="/#home" text="Home" />
                <NavBarItem href="/#about" text="About" />
                <NavBarItem href="/#contact" text="Contact" />
                <NavBarItem href="/auth/register" text="Register" />
            </NavBar>

            <main className="flex min-h-screen items-center justify-center px-5 py-32 pb-10 md:px-0 max-w-6xl mx-auto">
                <div className="w-full flex flex-col md:flex-row space-x-0 space-y-10 md:space-y-0 md:space-x-10">
                    <div className="text-center md:text-left my-auto space-y-4 md:w-2/3">
                        <h1 className="text-5xl font-bold">
                            Welcome to GradePath. Find your path to success!
                        </h1>
                        <div className="w-full h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
                        <h3 className="text-lg text-[#545454] dark:text-[#A6A6A6]">
                            Here at GradePath we focus on allowing students to,
                            find their path to success. We do this by providing
                            an easy to use interface that allows students to
                            find colleges, universitys, and other educational
                            institutions that fit their needs.
                        </h3>
                        <a
                            href="/"
                            className="text-md font-bold text-blue-500 inline-flex hover:underline"
                        >
                            Read more about our application
                            <svg
                                className="w-3.5 h-3.5 ms-1 -rotate-45"
                                aria-hidden="true"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-xl my-auto">
                        <div className="bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl p-10">
                            <h1 className="text-4xl font-bold text-left text-black dark:text-white mb-10">
                                Login to your account
                            </h1>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
