// src/About.jsx - ATUALIZADO
import React from "react";
import { motion } from "framer-motion";

function About() {
    
    // ... (Variantes, se houver)

  return (
    <div className="container mx-auto px-6 py-24 max-w-7xl">
      <div data-aos="fade-up" className="text-center mb-16 max-w-4xl mx-auto">
        {/* Título com Animação e Sombra */}
        <div className="w-full text-left mb-8">
            <motion.h2
                className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block border-b-4 border-pink-500 pb-1 text-shadow-tech" // 🌟 Aplicado
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Sobre Mim
            </motion.h2>
        </div>
        
        {/* ... (Conteúdo do About) ... */}
      </div>
    </div>
  );
}

export default About;