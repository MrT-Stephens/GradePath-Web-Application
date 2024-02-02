import Image from "next/image";
import LoginForm from "./(components)/login-form";

export default function Home() {
    return (
        <div className="relative">
            <header className="fixed top-0 w-full backdrop-blur-xl">
                <nav className="flex items-center justify-between py-3 max-w-6xl mx-auto">
                    <a href="/" className="flex items-center space-x-4">
                        <Image
                            src="/GradePathLogo.svg"
                            alt="GradePath Logo"
                            width={40}
                            height={40}
                        />
                        <h1 className="text-2xl font-bold">GradePath</h1>
                    </a>
                    <div className="flex items-center space-x-4">
                        <a href="/" className="text-lg font-bold">
                            Register
                        </a>
                    </div>
                </nav>
                <div className="w-full h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
            </header>

            <main className="flex min-h-screen items-center justify-center px-10 py-32 pb-10 md:px-0 max-w-6xl mx-auto">
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
                                class="w-3.5 h-3.5 ms-1 -rotate-45"
                                aria-hidden="true"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
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
