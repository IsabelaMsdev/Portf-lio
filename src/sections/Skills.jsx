// src/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiFramer, SiVite } from "react-icons/si";

function Skills() {
    
    // Mantendo a cor de destaque Pink para as tecnologias principais
    const skillsList = [
        { name: "React", icon: FaReact, color: "text-pink-500" }, 
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-pink-500" }, 
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-700" },
        { name: "Framer Motion", icon: SiFramer, color: "text-purple-500" },
        { name: "Vite", icon: SiVite, color: "text-yellow-600" },
    ];

    return (
        <div className="container mx-auto px-6 py-24 max-w-7xl">
            {/* 🌟 REMOVIDO data-aos="fade-up" */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
                
                <div className="w-full text-left mb-8">
                    {/* 🌟 NOVO: motion.h2 com animação de deslize lateral */}
                    <motion.h2
                        className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block border-b-4 border-pink-500 pb-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Habilidades Técnicas
                    </motion.h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mt-4">
                        Ferramentas e tecnologias que uso no meu dia a dia.
                    </p>
                </div>
            </div>

            {/* Grid de Habilidades (Clean Look) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillsList.map((skill, index) => (
                    <motion.div
                        key={index}
                        // 🌟 Fundo branco e sombra sutil
                        className="bg-white p-6 rounded-xl shadow-card flex flex-col items-center 
                                   transition duration-300 transform border border-gray-100" 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        whileHover={{ 
                            scale: 1.05, 
                            y: -5, 
                            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" // Sombra ligeiramente maior no hover
                        }}
                    >
                        <div className={`text-5xl mb-3 ${skill.color}`}>
                            <skill.icon />
                        </div>
                        <span className="text-lg font-semibold text-gray-800 text-center">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;