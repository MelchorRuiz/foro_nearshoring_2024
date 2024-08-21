interface Speaker {
    name: string;
    photo: string;
    profile?: string;
    position: string;
}

interface Program {
    name: string;
    description?: string;
    hours: string;
    speakers?: Speaker[];
}

/*
    {
        name: "Inaguración",
        description: "Palabras de bienvenida y presentación del foro",
        hours: "09:55 hrs",
        speakers: [
            {
                name: "Ricardo Haneine",
                photo: "https://via.placeholder.com/150",
                profile: "Es Ingeniero en Sistemas Computacionales por la Universidad de las Américas Puebla, Maestro en Ciencias en Ingeniería de Software por el Instituto Tecnológico de Estudios Superiores de Monterrey y Doctor en Ciencias de la Computación por la Universidad de las Américas Puebla. Actualmente es Director de la Facultad de Ingeniería de la Universidad de las Américas Puebla y profesor de tiempo completo en el Departamento de Ciencias de la Computación. Sus áreas de interés son la ingeniería de software, la calidad de software, la educación en ingeniería de software y la educación en línea.",
                position: "Director de la Facultad de Ingeniería",
            }
        ]
        
    }
*/

const program : Program[] = [
    {
        name: "Inauguración Foro Nearshoring 2024",
        hours: "10:00 - 10:30 Hrs",
        speakers: [
            {
                name: "Ramón Alfaro",
                photo: "/speakers/profile.svg",
                position: "Secretario de Desarrollo Económico y Sustentable de Guanajuato"
            },
            {
                name: "Jorge Enrique Hernández",
                photo: "/speakers/profile.svg",
                position: "Secretario de Educación del Estado de Guanajuato"
            },
            {
                name: "Bernd Rohde",
                photo: "/speakers/profile.svg",
                position: "CEO Italian German Exhibition Company Mexico"
            },
        ]
    },
    {
        name: "El rol de la geopolítica en el Nearshoring: oportunidades y desafíos del T-MEC como herramientas para el desarrollo regional",
        description: "La sesión analizará cómo las dinámicas geopolíticas impactan el Nearshoring, una práctica en crecimiento que permite a las empresas reducir costos y mejorar la eficiencia al acercar sus operaciones a mercados clave.",
        hours: "10:30 - 11:30 Hrs",
        speakers: [
            {
                name: "Ramón Alfaro",
                photo: "/speakers/profile.svg",
                position: "Secretario de Desarrollo Económico Sustentable de Guanajuato"
            },
            {
                name: "Esaú Garza",
                photo: "/speakers/esau_garza.webp",
                position: "Secretario de Desarrollo Económico, Ciencia y Tecnología de Aguascalientes - SEDECyT"
            },
            {
                name: "Miguel Leaman",
                photo: "/speakers/miguel_angel_leaman.webp",
                position: "Presidente Ejecutivo de Agencia Por México",
            },
        ]
    },
    {
        name: "Retos y soluciones en la logística e infraestructura para el Nearshoring",
        description: "Esta conversación proporcionará una plataforma para el intercambio de ideas y experiencias, fomentando la colaboración y el desarrollo de soluciones prácticas para los desafíos logísticos e infraestructurales del Nearshoring.",
        hours: "11:30 - 12:30 Hrs",
        speakers: [
            {
                name: "Alfonso Valdés",
                photo: "/speakers/alfonso_valdes.webp",
                position: "Presidente del Consejo Nacional de la Industria Maquiladora y Manufacturera de Exportación – INDEX"
            },
            {
                name: "Samuel Campos",
                photo: "/speakers/samuel_campos.webp",
                position: "Excecutive Managing Director de NEWMARK"
            },
        ]
    },
    {
        name: "Break",
        hours: "12:30 - 12:40 Hrs",
    },
    {
        name: "Innovación y avances en la transformación digital: el papel de la tecnología en el Nearshoring",
        description: "La transformación digital está revolucionando el Nearshoring al redefinir la eficiencia y optimizar las cadenas de suministro. Únete a nosotros para descubrir cómo la tecnología está impulsando esta evolución y aprovecha nuestro entorno innovador para intercambiar ideas y desarrollar estrategias.",
        hours: "12:40 - 13:40 Hrs",
        speakers: [
            {
                name: "Salvador Portillo",
                photo: "/speakers/salvador_portillo.webp",
                position: "Presidente de la Cámara Nacional de Manufacturas Eléctricas - CANAME"
            },
            {
                name: "Adriana Pulido Sandoval",
                photo: "/speakers/adriana_pulido_sandoval.webp",
                position: "CEO de Ilunka",
            },
            {
                name: "Edgar Guzman Moreno",
                photo: "/speakers/edgar_guzman_moreno.webp",
                position: "Director de la Carrera de Negocios Internacionales I T E S M - Campus León",
            },
        ]
    },
    {
        name: "Estrategias exitosas, lecciones aprendidas y mejores prácticas en Nearshoring",
        description: "Descubre cómo las empresas están transformando sus operaciones al acercar la producción y los servicios a los mercados finales. Obtén valiosos conocimientos para perfeccionar tus prácticas y potenciar tu competitividad en un entorno dinámico.",
        hours: "13:40 - 14:40 Hrs",
        speakers: [
            {
                name: "Fernando Rivadeneyra",
                photo: "/speakers/fernando_rivadeneyra.webp",
                position: "Presidente Ejecutivo de la Antena IGAPE México y Socio Fundador de RT&DC Abogados"
            },
            {
                name: "Luis Alfonso González",
                photo: "/speakers/profile.svg",
                position: "Rector de la Universidad Iberoamericana Campus León"
            },
        ]
    },
    {
        name: "El futuro del Nearshoring: tendencias y proyecciones",
        description: "Sumérgete en el futuro del Nearshoring y conoce las tendencias y proyecciones que definirán su evolución. Únete a nuestra sesión para descubrir cómo anticipar cambios, aprovechar nuevas oportunidades y optimizar tus operaciones al máximo. ",
        hours: "14:40 - 15:40 Hrs",
        speakers: [
            {
                name: "Carlos Alberto Yates",
                photo: "/speakers/carlos_alberto_yates.webp",
                position: "Presidente Clúster de Energía de Chihuahua",
            },
            {
                name: "Laura Frías",
                photo: "/speakers/laura_frias.webp",
                position: "Coordinadora de Atracción de Inversiones y Nearshoring de la Asociación Mexicana de Parques Industriales Privados - AMPIP"
            },
            {
                name: "Ari - Ben Saks",
                photo: "/speakers/ari_ben_saks.webp",
                position: "Ernst & Young Global Specialist",
            },
        ]
    },
]

export default program;