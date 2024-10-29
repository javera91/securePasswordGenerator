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

    const manejarLongitudChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newLongitud = Number(e.target.value);
        // Set minimum length to 8 and maximum length to 16
        if (newLongitud >= 8 && newLongitud <= 16) {
            setLongitud(newLongitud);
        } else if (newLongitud < 8) {
            setLongitud(8); // Reset to minimum length if less than 8
        } else {
            setLongitud(16); // Reset to maximum length if greater than 16
        }
    };

    return (
        <div className='custom-container'>
            <label>
                Longitud:
                <input type="number" value={longitud} onChange={manejarLongitudChange} min={8} max={16} />
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