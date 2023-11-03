import Image from 'next/image'
import { metadata } from './layout'

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center p-10">
            <Image src="/GradePathLogo.svg" alt="GradePath Logo" width={500} height={500} />
            <h1 className="text-9xl font-bold text-center">
                {metadata.title}
            </h1>
            <h3 className="text-4xl font-bold text-center">
                {metadata.slogan}
            </h3>

            <div className="flex flex-wrap items-center justify-center space-x-10 p-10">
                <a href="/login" className="inline-block w-80 h-32 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 hover:text-4xl hover:w-96 hover:h-40 text-white text-2xl font-bold rounded-xl">
                    Login {' '} -&gt;
                </a>
                <a href="/register" className="inline-block w-80 h-32 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 hover:text-4xl hover:w-96 hover:h-40 text-white text-2xl font-bold rounded-xl">
                    Register {' '} -&gt;
                </a>
            </div>
        </main>
    )
}
