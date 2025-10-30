// src/Home.jsx - 
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
};

export default function Home() {
  
  const titleLineClasses = "text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-gray-900 leading-tight block";

  return (
    <div id="home" className="container mx-auto px-6 py-20 relative flex items-center h-full"> 
      <motion.div
        className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto relative z-20" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.div variants={itemVariants} className="mb-4">
          <span className={titleLineClasses}>
            Olá, eu sou
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <span className={titleLineClasses}>
            Isabela Silva
          </span>
        </motion.div>
        
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl px-2 font-medium" 
          variants={itemVariants}
        >
          Desenvolvedora Front-end apaixonada por **UX/UI e animações**. Criando interfaces **modernas e responsivas** que combinam funcionalidade e design, usando React e Tailwind.
        </motion.p>

        {/* 🌟 Botão CTA - BORDA MANTIDA (Foco) */}
        <motion.a
          href="#projects"
          className="flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-pink-500 text-white rounded-xl 
                     shadow-tech border-2 border-gray-900 text-base sm:text-lg font-semibold" 
          whileHover={{ 
            scale: 1.05, 
            y: -3, 
            backgroundColor: '#db2777', 
            boxShadow: "0px 0px 0px 0px #1f2937" 
          }} 
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          variants={itemVariants} 
        >
          Ver Projetos <FaArrowRight />
        </motion.a>
        
      </motion.div>
    </div>
  );
}