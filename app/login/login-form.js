'use client';

import { useState } from 'react'
import PocketBase from 'pocketbase'
import { useRouter } from 'next/navigation'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pbClient = new PocketBase('http://localhost:8090');
    const router = useRouter();

    const handelSubmit = async (e) => {
        e.preventDefault();

        var response;

        try {
            response = await pbClient.collection('users').authWithPassword(email, password);
        }
        catch (error) {
            alert(error);
            setEmail('');
            setPassword('');
            console.log(error);
            return;
        }

        router.push(`/user/${response.record.id}`);
    }

    return (
        <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handelSubmit}>
            <input type="email" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="group w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl">
                Login {' '}
                <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                    -&gt;
                </span>
            </button>
            <h6 className="text-center text-gray-400">
                Don't have an account?
            </h6>
            <a href="/register" className="group flex items-center justify-center w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl">
                Create your GradePath account {' '}
                <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                    -&gt;
                </span>
            </a>
        </form>
    )
}