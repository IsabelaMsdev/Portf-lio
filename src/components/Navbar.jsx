// src/components/Navbar.jsx - NOVO E FINAL
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Efeito para mudar a Navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      // isScrolled é true quando o scrollY é maior que 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variantes para a animação do menu mobile
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300
        ${isScrolled ? "bg-rose-50 shadow-md" : "bg-white/90"}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 10 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        {/* Logo/Nome */}
        <a href="#home" className="text-2xl font-extrabold text-gray-900">
          <span className="text-rose-500">I</span>sabela<span className="text-rose-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-gray-600 hover:text-rose-500 font-medium transition-colors
                          relative group`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              {/* Efeito de sublinhado animado */}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900 text-2xl" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menu Mobile (Painel Lateral) */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-rose-50 shadow-2xl p-6 md:hidden z-50 transform
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        <div className="text-right mb-10">
            <button className="text-gray-900 text-3xl" onClick={toggleMenu} aria-label="Close menu">
                <FaTimes />
            </button>
        </div>
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 text-xl font-semibold hover:text-rose-500 transition-colors border-b border-gray-200 pb-2"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
      
      {/* Overlay (Fundo escuro) para fechar ao clicar fora */}
      {isOpen && (
        <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-50 md:hidden z-40" 
            onClick={toggleMenu}
        ></div>
      )}
    </motion.header>
  );
}