// Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

// Funções

// Letras, Números e Símbolos
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const symbols = "(){}[]=<>/.,!@#$%&*+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Eventos
generatePasswordButton.addEventListener("click", () => {});
