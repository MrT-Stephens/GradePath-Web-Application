import Image from 'next/image';
import PocketBase from 'pocketbase';
import { metadata } from '../../layout';

async function getUserName(userId) {
    const pocketbase = new PocketBase('http://127.0.0.1:8090');

    const user = await pocketbase.collection('users').getOne(userId);

    return `${user.userFName} ${user.userLName}`;
}

export default async function Page({ params }) {
    const { id } = params;

    const userName = (id === 'guest') ? 'Guest' : await getUserName(id);

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gradient-to-r from-black-400 to-black-500 p-4 grid grid-cols-3">
                {/* Left Navbar buttons */}
                <div className="flex items-center">
                    <h1 className="text-white font-bold py-2 px-4 rounded bg-blue-500">Hello, {userName}!</h1>
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

            </main>
        </div>
    )
}