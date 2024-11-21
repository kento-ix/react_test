import React from "react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {email, password};

        try {
            const response = await fetch('http://localhost:5000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data), // データをJSON形式で送信
            });
      
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="h-96 w-1/3 bg-white flex flex-col items-center justify-center">
            <input 
                type="text" 
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border border-black w-60 h-9"
            />
            <input 
                type="text"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border border-black w-60 h-9"
            />
            <button className="bg-red-600 text-white p-3 w-24">Login</button>
        </form>
    );
}
export default Login;