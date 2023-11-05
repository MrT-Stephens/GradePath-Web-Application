'use client';

import { useState } from 'react'
import PocketBase from 'pocketbase'

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const pbClient = new PocketBase('http://localhost:8090');

    const handelSubmit = async () => {
        try {
            await pbClient.collection('users').create({
                "email": email,
                "emailVisibility": true,
                "password": password,
                "passwordConfirm": confirm,
                "firstname": firstname,
                "lastname": lastname
            });
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    return (
        <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handelSubmit}>
            <input type="text" className="w-80 h-10 rounded-xl text-black p-2" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <input type="text" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <input type="email" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            <button type="submit" className="group w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl">
                Create Account {' '}
                <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                    -&gt;
                </span>
            </button>
            <h6 className="text-center text-gray-400">
                Already have an account?
            </h6>
            <a href="/login" className="group flex items-center justify-center w-80 h-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white font-bold rounded-xl">
                Login to your GradePath account {' '}
                <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                    -&gt;
                </span>
            </a>
        </form>
    )
}