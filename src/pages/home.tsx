// src/pages/Home.tsx
import React, { useState } from 'react';
import GenerationControls from '../components/generationControls';
import GeneratedPassword from '../components/generatedPassword';

const Home: React.FC = () => {
    const [contrasena, setContrasena] = useState('');
    

    const generarContrasena = (longitud: number, incluirMayusculas: boolean, incluirNumeros: boolean, incluirSimbolos: boolean) => {
        const caracteres = 'abcdefghijklmnopqrstuvwxyz' +
            (incluirMayusculas ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
            (incluirNumeros ? '0123456789' : '') +
            (incluirSimbolos ? '!@#$%^&*()_+' : '');

        let nuevaContrasena = '';
        for (let i = 0; i < longitud; i++) {
            nuevaContrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        setContrasena(nuevaContrasena);
    };

    

    return (
        <div>
            <h1>Generador de Contraseñas Seguras</h1>
            <GenerationControls onGenerar={generarContrasena} />
            <GeneratedPassword contrasena={contrasena}  />
        </div>
    );
};
export default Home;