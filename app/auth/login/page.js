import Image from 'next/image'
import { metadata } from '../../layout'
import LoginForm from '@/app/(components)/login-form'

export default function Page() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center p-10">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1.5 rounded-xl">
                <div className="inline-block bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-xl p-10">
                    <a href="/">
                        <Image src={metadata.icon} alt="GradePath Logo" width={200} height={200} className="mx-auto" />
                    </a>
                    <h1 className="text-6xl font-bold text-center text-black dark:text-white mb-10">
                        Login
                    </h1>
                    <LoginForm />
                </div>
            </div>
        </main>
    )
}