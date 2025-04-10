import React, { useState } from "react";

function GeneratorPanel({ onGenerate }) {
  const [length, setLength] = useState(12);
  const [lower, setLower] = useState(true);
  const [upper, setUpper] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(false);

  const handleGenerate = () => {
    onGenerate({ length, lower, upper, number, symbol });
  };

  return (
    <div className="bg-white shadow p-4 rounded w-full max-w-md">
      <h2 className="text-lg font-bold mb-2">Configuración avanzada</h2>
      <div className="flex flex-col gap-2">
        <label>
          Largo:
          <input
            type="number"
            min="8"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="ml-2 border px-2 py-1 rounded"
          />
        </label>
        <label>
          <input type="checkbox" checked={lower} onChange={() => setLower(!lower)} /> Minúsculas
        </label>
        <label>
          <input type="checkbox" checked={upper} onChange={() => setUpper(!upper)} /> Mayúsculas
        </label>
        <label>
          <input type="checkbox" checked={number} onChange={() => setNumber(!number)} /> Números
        </label>
        <label>
          <input type="checkbox" checked={symbol} onChange={() => setSymbol(!symbol)} /> Caracteres especiales
        </label>
        <button onClick={handleGenerate} className="bg-green-600 text-white px-4 py-2 rounded mt-2">
          Generar contraseña
        </button>
      </div>
    </div>
  );
}

export default GeneratorPanel;
