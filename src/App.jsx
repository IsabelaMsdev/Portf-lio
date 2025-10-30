// src/App.jsx - FINALIZADO
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🌟 Importações de Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// 🌟 Imports para Partículas (Background)
import Particles from "react-particles"; 
import { useCallback } from "react"; 
import { loadSlim } from "tsparticles-slim"; 

// Objeto de Configuração das Partículas (Rede Neural Sutil)
const particlesOptions = {
    background: {
        color: {
            value: "transparent", 
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#9ca3af", // gray-400
        },
        links: {
            color: "#d1d5db", // gray-300
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};

function App() {
    
    // Inicialização do AOS (Animate On Scroll)
    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out' });
    }, []);

    // Função de inicialização das Partículas
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);


    return (
        <div className="min-h-screen antialiased">
            <Navbar />

            {/* SEÇÃO HOME: Fundo Branco com Partículas (z-index 10) */}
            <section id="home" className="min-h-screen relative overflow-hidden bg-white pt-24">
                {/* Partículas com position absoluta/fixed */}
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={particlesOptions}
                    className="absolute top-0 left-0 w-full h-full"
                />
                <Home />
            </section>

            {/* SEÇÃO SOBRE MIM: Fundo Branco Puro (Contraste) */}
            <section 
                id="about" 
                className="min-h-screen flex items-center justify-center py-24 bg-white"
            >
                <About />
            </section>

            {/* SEÇÃO HABILIDADES: Fundo Gradiente Sutil ROSE */}
            <section 
                id="skills" 
                className="min-h-screen flex items-center justify-center py-24 
                           bg-gradient-to-t from-rose-50/70 to-white" 
            >
                <Skills />
            </section>

            {/* SEÇÃO PROJETOS: Fundo Branco Puro (Contraste) */}
            <section 
                id="projects" 
                className="min-h-screen flex items-center justify-center py-24 bg-white"
            >
                <Projects />
            </section>

            {/* SEÇÃO CONTATO: Fundo Gradiente Sutil ROSE */}
            <section 
                id="contact" 
                className="min-h-screen flex items-center justify-center py-24 
                           bg-gradient-to-b from-rose-50/70 to-white" 
 >
                <Contact />
            </section>

            <Footer />
        </div>
    );
}

export default App;