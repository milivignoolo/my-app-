import React, { useState } from "react";

function Passwordinput({ password, setPassword }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col items-start">
      <label className="mb-1">Contraseña:</label>
      <div className="flex items-center gap-2">
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={() => setShow(!show)}
          className="bg-gray-300 px-2 py-1 rounded"
        >
          {show ? "Ocultar" : "Mostrar"}
        </button>
      </div>
    </div>
  );
}

export default Passwordinput;
