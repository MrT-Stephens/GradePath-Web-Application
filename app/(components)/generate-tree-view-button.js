"use client";

import { useRouter } from "next/navigation";

export default function GenerateTreeViewButon() {
    const router = useRouter();

    const handleGenerate = () => {};

    return (
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-2xl">
            <div className="bg-gradient-to-r from-[#D6DBDC] dark:from-[#000000] to-[#FFFFFF] dark:to-[#141414] rounded-2xl flex flex-col">
                <div className="p-8 text-white">
                    <div className="w-full flex flex-col space-y-6">
                        <h1 className="text-2xl font-bold mb-4">
                            Generate your Advisments
                        </h1>
                        <div className="grid md:grid-cols-2 items-center">
                            <label
                                htmlFor="level"
                                className="block text-lg font-medium leading-6 text-black dark:text-white"
                            >
                                Click Here &rarr;
                            </label>
                            <button
                                className="bg-green-500 rounded-xl text-black dark:text-white font-bold py-2 px-4 max-w-min hover:opacity-75 self-center md:place-self-end"
                                onClick={handleGenerate}
                            >
                                Generate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
