import React from "react";

function StrengthIndicator({ password }) {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^a-zA-Z0-9]/.test(pass)) strength++;

    if (strength <= 1) return "Poco segura";
    if (strength === 2 || strength === 3) return "Segura";
    return "Muy segura";
  };

  return (
    <div>
      <strong>Fortaleza:</strong> {getStrength(password)}
    </div>
  );
}

export default StrengthIndicator;