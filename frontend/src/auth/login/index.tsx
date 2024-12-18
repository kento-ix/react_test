import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {email, password};

        try {
            const response = await axios.post('http://backend:5001/login', data);
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Unknown Error:', error);
        }
    };

    return(
        <form onSubmit={handleSubmit} className="h-96 w-1/3 bg-white flex flex-col items-center justify-center rounded">
            <h1 className="text-xl pb-9">Login</h1>
            <input 
                type="text" 
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border border-black rounded-lg w-60 h-9 mb-6"
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border border-black rounded-lg w-60 h-9 mb-6"
            />
            <button className="bg-red-500 text-white p-3 w-24 rounded-lg">Login</button>
        </form>
    );
}
export default Login;