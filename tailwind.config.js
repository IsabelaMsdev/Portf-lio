/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      // 🌟 CORES Rose PERSONALIZADAS (Para garantir os tons suaves e o destaque)
      colors: {
        'rose': {
          50: '#fff1f2', // Cor de fundo mais clara (usada em App.jsx e Navbar)
          100: '#ffe4e6',
          200: '#fecdd3',
          400: '#fb7185', 
          500: '#f43f5e', // Cor de destaque principal (usada em botões/links)
        },
      },
      
      // 🌟 SHADOWS ESSENCIAIS (Para Neo-Brutalismo e Sombra Suave)
      boxShadow: {
        // 1. Essencial para o botão CTA na Home (Neo-Brutalismo)
        'tech': '8px 8px 0px 0px #1f2937', 
        
        // 2. Essencial para a sombra fixa e visível nos cards (Skills, Projects, Contact)
        'soft': '0 10px 20px -5px rgba(0, 0, 0, 0.15), 0 4px 8px -4px rgba(0, 0, 0, 0.1)',
        
        // Mantido como 'card' padrão do Tailwind, agora acessível.
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};