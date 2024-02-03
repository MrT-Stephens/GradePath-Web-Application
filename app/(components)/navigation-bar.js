import Image from "next/image";

function NavBarItem({ href, text }) {
    return (
        <a href={href} className="text-md hover:underline">
            {text}
        </a>
    );
}

function NavBar({ children }) {
    return (
        <header className="fixed top-0 w-full backdrop-blur-xl">
            <nav className="flex items-center justify-between py-3 max-w-6xl mx-auto">
                <a href="/" className="flex items-center space-x-4">
                    <Image
                        src="/GradePathLogo.svg"
                        alt="GradePath Logo"
                        width={44}
                        height={44}
                    />
                    <h1 className="text-2xl font-bold">GradePath</h1>
                </a>
                <div className="flex items-center space-x-10">{children}</div>
            </nav>
            <div className="w-full h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
        </header>
    );
}

export { NavBar, NavBarItem };
