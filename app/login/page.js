import Image from 'next/image'
import { metadata } from '../layout'

export default function Page() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center p-10">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1.5 rounded-xl">
                <div className="inline-block bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl p-10">
                    <a href="/">
                        <Image src={metadata.icon} alt="GradePath Logo" width={200} height={200} className="mx-auto" />
                    </a>
                    <h1 className="text-6xl font-bold text-center mb-10">
                        Login
                    </h1>
                    <form className="flex flex-col items-center justify-center space-y-5">
                        <input type="text" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Username" />
                        <input type="password" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Password" />
                        <button type="submit" className="group w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl font-bold rounded-xl">
                            Login {' '}
                            <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </button>
                        <h6 className="text-center text-gray-400">
                            Don't have an account?
                        </h6>
                        <a href="/register" className="group flex items-center justify-center w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-xl">
                            Create your GradePath account {' '}
                            <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </a>
                    </form>
                </div>
            </div>
        </main>
    )
}