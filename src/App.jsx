import React, { useState } from "react";
import Passwordinput from "./components/Passwordinput";
import StrengthIndicator from "./components/StrengthIndicator";
import GeneratorPanel from "./components/GeneratorPanel";
import "./App.css";


function App() {
  const [password, setPassword] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const generatePassword = (options) => {
    const { length, lower, upper, number, symbol } = options;
    const lowers = "abcdefghijklmnopqrstuvwxyz";
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let chars = "";
    if (lower) chars += lowers;
    if (upper) chars += uppers;
    if (number) chars += numbers;
    if (symbol) chars += symbols;

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }
    setPassword(pass);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Verificador de Fortaleza de Contraseña</h1>

      <Passwordinput password={password} setPassword={setPassword} />
      <StrengthIndicator password={password} />

      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCopy}
        >
          Copiar
        </button>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => generatePassword({ length: 12, lower: true, upper: true, number: true })}
        >
          Generar aleatoria
        </button>

        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          {showAdvanced ? "Ocultar panel avanzado" : "Mostrar panel avanzado"}
        </button>
      </div>

      {copied && <div className="text-green-600">¡Contraseña copiada!</div>}

      {showAdvanced && <GeneratorPanel onGenerate={generatePassword} />}
    </div>
  );
}

export default App;

