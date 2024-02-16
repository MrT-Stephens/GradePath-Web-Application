"use client";

function NavBarItem({ href, text }) {
    return (
        <div className="w-full lg:w-fit flex lg:static flex-col lg:flex-none">
            <a href={href} className="text-md hover:underline mx-auto py-2">
                {text}
            </a>
            <div className="lg:hidden w-full h-px bg-gray-500"></div>
        </div>
    );
}

function NavBar({ children, title }) {
    return (
        <header
            id="nav-bar"
            className="fixed top-0 w-full backdrop-blur-xl z-50"
        >
            <nav className="flex items-center justify-between py-3 max-w-6xl mx-auto px-2">
                <a href="/" className="flex items-center space-x-4">
                    <img
                        src="/GradePathLogo.svg"
                        alt="GradePath Logo"
                        width={44}
                        height={44}
                    />
                    <h1 className="text-2xl font-bold">{title}</h1>
                </a>
                <div className="hidden lg:flex items-center space-x-10">
                    {children}
                </div>
                <button className="group lg:hidden flex"
                    onClick={() => {
                        document.getElementById("nav-mobile-menu").classList.toggle("hidden");
                    }}>
                    <svg
                        className="w-10 h-10 text-white group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                </button>
            </nav>
            <div className="w-full h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div id="nav-mobile-menu" className="hidden flex-col items-center">
                <div className="hidden w-full h-px bg-gray-500"></div>
                {children}
            </div>
        </header>
    );
}

export { NavBar, NavBarItem };
