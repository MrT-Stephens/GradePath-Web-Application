'use client';

import { useSearchParams } from 'next/navigation'

export default function Page({ params }) {
    const { id } = params;

    return (
        <main className="flex flex-col min-h-screen items-center justify-center p-10">
            <h1 className="text-9xl font-bold text-center">
                Id: {id}
            </h1>
        </main>
    )
}