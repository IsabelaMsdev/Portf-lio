import React from "react";
import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() { 
    
    const emailAddress = "isabelamarcelina25@gmail.com"; // **ATUALIZE SEU E-MAIL AQUI**
    const whatsappLink = "https://wa.me/55SEUNUMERO?text=Oi%20Isabela!%20Vim%20pelo%20seu%20portfólio.%20Tenho%20um%20projeto.%20😊"; // **ATUALIZE SEU NÚMERO AQUI**

    return ( 
        <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
                id="contact"
                data-aos="fade-up"
                className="flex flex-col items-center justify-center py-16 text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* 🌟 Título com sublinhado Pink */}
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 inline-block border-b-4 border-pink-500 pb-1">
                    Contato 💌
                </h2>
                <p className="text-base sm:text-xl text-gray-600 mb-10 max-w-2xl mt-4">
                    Se você tem um projeto em mente ou apenas quer trocar uma ideia sobre desenvolvimento web, me mande uma mensagem!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 w-full sm:w-auto"> 
                    <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-xl text-base sm:text-lg font-semibold 
                                 shadow-lg"
                        whileHover={{ scale: 1.05, y: -3 }} 
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <FaWhatsapp size={22} />
                        Conversar no WhatsApp
                    </motion.a>

                    <motion.a
                        href="https://github.com/IsabelaMsdev/Portf-lio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-900 text-gray-900 px-6 py-3 rounded-xl text-base sm:text-lg font-medium" 
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <FaGithub size={22} />
                        Ver Código no GitHub
                    </motion.a>
                </div>
                
                <motion.button 
                    onClick={() => navigator.clipboard.writeText(emailAddress)}
                    className="flex items-center gap-2 text-gray-900 font-medium text-base sm:text-xl bg-pink-50 px-4 py-2 rounded-lg"
                    whileHover={{ backgroundColor: "rgba(255, 192, 203, 0.2)" }} 
                    whileTap={{ scale: 0.98 }} 
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    aria-label="Copiar endereço de e-mail"
                >
                    <FaEnvelope size={20} />
                    {emailAddress}
                </motion.button>
            </motion.div>
        </div>
    );
}