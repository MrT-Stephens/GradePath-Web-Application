﻿import Image from 'next/image'
import { metadata } from './layout'

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center p-10">
            <Image src={metadata.icon} alt="GradePath Logo" width={500} height={500} />
            <h1 className="text-9xl font-bold text-center">
                {metadata.title}
            </h1>
            <h3 className="text-4xl font-bold text-center text-[#545454] dark:text-[#A6A6A6]">
                {metadata.slogan}
            </h3>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center p-10">
                <a href="/login" className="group rounded-xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold">
                        Login {' '}
                        <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50 mx-auto">
                        Sign in or create an account to access your GradePath dashboard and save your pathway.
                    </p>
                </a>
                <a href="/guest" className="group rounded-xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
                    <h2 className="mb-3 text-2xl font-semibold">
                        Guest {' '}
                        <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50 mx-auto">
                        Continue as a guest your data will not be saved. Only used to generate your pathway.
                    </p>
                </a>
            </div>
        </main>
    )
}
