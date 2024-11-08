// src/pages/Home.tsx
import React, { useState } from 'react';
import GenerationControls from '../components/generationControls';
import GeneratedPassword from '../components/generatedPassword';

const Home: React.FC = () => {
    const [password, setpassword] = useState('');
    

    const generatePassword = (length: number, includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean) => {
        const characters = 'abcdefghijklmnopqrstuvwxyz' +
            (includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
            (includeNumbers ? '0123456789' : '') +
            (includeSymbols ? '!@#$%^&*()_+' : '');

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setpassword(newPassword);
    };

    

    return (
        <div>
            <h1>Secure Password Generator</h1>
            <GenerationControls onGenerate={generatePassword} />
            <GeneratedPassword password={password}  />
        </div>
    );
};
export default Home;