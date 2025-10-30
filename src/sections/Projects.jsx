// src/Projects.jsx - ATUALIZADO (CAIXA DE LUZ)
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  
  const projects = [
    {
      title: "Lanchonete On-line",
      description: "Aplicativo de pedidos online, feito para demonstrar o processo de compra e gestão de carrinho. Focado em UX móvel.",
      image: "/assets/lanchonete-mockup.png", 
      technologies: ["React Native", "Expo", "TypeScript", "Styled Components"],
      liveLink: "https://seu-projeto-online.com", 
      githubLink: "https://github.com/IsabelaMsdev/Lanchonete-App",
    },
    {
      title: "MédAmigo",
      description: "App de lembrete de medicação com notificações e acompanhamento de histórico. Solução para gerenciamento de saúde.",
      image: "/assets/medamigo-mockup.png", 
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveLink: "#", 
      githubLink: "https://github.com/IsabelaMsdev/MedAmigo-Web",
    },
    {
      title: "Meu Portfólio Pessoal",
      description: "Este portfólio online que você está vendo, criado para demonstrar minhas habilidades em design e desenvolvimento Front-end.",
      image: "/assets/portfolio-mockup.png", 
      technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
      liveLink: "#home",
      githubLink: "https://github.com/IsabelaMsdev/Portf-lio",
    },
  ];

  return ( 
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Meus Projetos
        </motion.h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Cada projeto é um **Estudo de Caso** de como transformei um desafio em uma solução moderna e funcional.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-0 overflow-hidden 
                       shadow-soft transition duration-500 cursor-pointer" 
            data-aos-delay={index * 200}
            whileHover={{ 
                scale: 1.03,        
                y: -5,              
                // 🌟 ATUALIZADO: Caixa de Luz Pink
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.8)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }} 
          >
            <motion.div 
                className="h-48 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
                <img
                    src={project.image}
                    alt={`Mockup do projeto ${project.title}`}
                    className="w-full h-full object-cover" 
                />
            </motion.div>
            
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm sm:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                        <span 
                            key={techIndex}
                            className="bg-gray-200 text-gray-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold 
                                hover:bg-pink-600 transition disabled:opacity-50 text-center"
                        style={project.liveLink === "#" ? { pointerEvents: "none", opacity: 0.6 } : {}}
                    >
                        <FaExternalLinkAlt size={14} /> Live Demo
                    </a>

                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold 
                                hover:bg-gray-100 transition text-center"
                    >
                        <FaGithub size={14} /> Código
                    </a>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}