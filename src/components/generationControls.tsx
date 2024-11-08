import React, { useState } from 'react';

interface GenerationControlsProps {
    onGenerate: (length: number, includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean) => void;
}

const GenerationControls: React.FC<GenerationControlsProps> = ({ onGenerate }) => {
    const [length, setlength] = useState(12);
    const [includeUppercase, setincludeUppercase] = useState(true);
    const [includeNumbers, setincludeNumbers] = useState(true);
    const [includeSymbols, setincludeSymbols] = useState(true);

    const handleGenerate = () => {
        onGenerate(length, includeUppercase, includeNumbers, includeSymbols);
    };

    const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newlength = Number(e.target.value);
        // Set minimum length to 8 and maximum length to 16
        if (newlength >= 8 && newlength <= 16) {
            setlength(newlength);
        } else if (newlength < 8) {
            setlength(8); // Reset to minimum length if less than 8
        } else {
            setlength(16); // Reset to maximum length if greater than 16
        }
    };

    return (
        <div className='custom-container'>
            <label>
                Length:
                <input type="number" value={length} onChange={handleLengthChange} min={8} max={16} />
            </label>
            <label>
                Include uppercase letters:
                <input type="checkbox" checked={includeUppercase} onChange={() => setincludeUppercase(!includeUppercase)} />
            </label>
            <label>
                Include Numbers:
                <input type="checkbox" checked={includeNumbers} onChange={() => setincludeNumbers(!includeNumbers)} />
            </label>
            <label>
                Include Symbols:
                <input type="checkbox" checked={includeSymbols} onChange={() => setincludeSymbols(!includeSymbols)} />
            </label>
            <button onClick={handleGenerate}>Generate Password</button>
        </div>
    );
};

export default GenerationControls;