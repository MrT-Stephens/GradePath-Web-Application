'use client';

import { useState } from 'react'
import PocketBase from 'pocketbase'
import { useRouter } from 'next/navigation'

export default function Register() {
    const [userFName, setUserFName] = useState('');
    const [userLName, setUserLName] = useState('');
    const [userDoB, setUserDoB] = useState('');
    const [userAddressLine1, setUserAddressLine1] = useState('');
    const [userAddressLine2, setUserAddressLine2] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userPostcode, setUserPostcode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const pbClient = new PocketBase('http://localhost:8090');
    const router = useRouter();

    const handelSubmit = async (e) => {
        e.preventDefault();

        var response;

        try {
            response = await pbClient.collection('users').create({
                "email": email,
                "emailVisibility": true,
                "password": password,
                "passwordConfirm": confirm,
                "userFName": userFName,
                "userLName": userLName,
                "userDoB": userDoB,
                "userAddressLine1": userAddressLine1,
                "userAddressLine2": userAddressLine2,
                "userCity": userCity,
                "userPostcode": userPostcode
            });
        }
        catch (error) {
            alert(error);
            setUserFName('');
            setUserLName('');
            setUserDoB('');
            setUserAddressLine1('');
            setUserAddressLine2('');
            setUserCity('');
            setUserPostcode('');
            setEmail('');
            setPassword('');
            setConfirm('');
            console.log(error);
            return;
        }

        router.push(`/user/${response.id}`);
    }

    return (
        <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handelSubmit}>
            <input type="text" className="w-80 h-10 rounded-xl text-black p-2" placeholder="First Name" value={userFName} onChange={(e) => setUserFName(e.target.value)} />
            <input type="text" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Last Name" value={userLName} onChange={(e) => setUserLName(e.target.value)} />
            <input type="data" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Date of Birth" value={userDoB} onChange={(e) => setUserDoB(e.target.value)} />
            <input type="text" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Address Line 1" value={userAddressLine1} onChange={(e) => setUserAddressLine1(e.target.value)} />
            <input type="text" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Address Line 2" value={userAddressLine2} onChange={(e) => setUserAddressLine2(e.target.value)} />
            <input type="text" className="w-80 h-10 rounded-xl text-black p-2" placeholder="City" value={userCity} onChange={(e) => setUserCity(e.target.value)} />
            <input type="text" className="w-80 h-10 rounded-xl text-black p-2" placeholder="Postcode" value={userPostcode} onChange={(e) => setUserPostcode(e.target.value)} />
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