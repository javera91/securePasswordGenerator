// src/components/generationControls.tsx
import React, { useState } from 'react';

interface GenerationControlsProps {
    onGenerar: (longitud: number, incluirMayusculas: boolean, incluirNumeros: boolean, incluirSimbolos: boolean) => void;
}

const GenerationControls: React.FC<GenerationControlsProps> = ({ onGenerar }) => {
    const [longitud, setLongitud] = useState(12);
    const [incluirMayusculas, setIncluirMayusculas] = useState(true);
    const [incluirNumeros, setIncluirNumeros] = useState(true);
    const [incluirSimbolos, setIncluirSimbolos] = useState(true);

    const manejarGenerar = () => {
        onGenerar(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos);
    };

    return (
        <div className='custom-container'>
            <label>
                Longitud:
                <input type="number" value={longitud} onChange={(e) => setLongitud(Number(e.target.value))} />
            </label>
            <label>
                Incluir Mayúsculas:
                <input type="checkbox" checked={incluirMayusculas} onChange={() => setIncluirMayusculas(!incluirMayusculas)} />
            </label>
            <label>
                Incluir Números:
                <input type="checkbox" checked={incluirNumeros} onChange={() => setIncluirNumeros(!incluirNumeros)} />
            </label>
            <label>
                Incluir Símbolos:
                <input type="checkbox" checked={incluirSimbolos} onChange={() => setIncluirSimbolos(!incluirSimbolos)} />
            </label>
            <button onClick={manejarGenerar}>Generar Contraseña</button>
        </div>
    );
};

export default GenerationControls;