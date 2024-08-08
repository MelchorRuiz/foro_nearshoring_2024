interface Speaker {
    name: string;
    photo: string;
    profile?: string;
    position: string;
    social?: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        twitter?: string;
    }
}

/*
    {
        "name": "Ricardo Haneine",
        "photo": "https://via.placeholder.com/150",
        "profile": "Es Ingeniero en Sistemas Computacionales por la Universidad de las Américas Puebla, Maestro en Ciencias en Ingeniería de Software por el Instituto Tecnológico de Estudios Superiores de Monterrey y Doctor en Ciencias de la Computación por la Universidad de las Américas Puebla. Actualmente es Director de la Facultad de Ingeniería de la Universidad de las Américas Puebla y profesor de tiempo completo en el Departamento de Ciencias de la Computación. Sus áreas de interés son la ingeniería de software, la calidad de software, la educación en ingeniería de software y la educación en línea.",
        "position": "Director de la Facultad de Ingeniería",
        "social": {
            "facebook": "https://www.facebook.com/ricardo.haneine",
            "instagram": "https://www.instagram.com/ricardo.haneine",
            "linkedin": "https://www.linkedin.com/in/ricardo-haneine",
            "twitter": "https://twitter.com/ricardo.haneine"
        }
    }
*/

const speaker : Speaker[] = [
    {
        "name": "Bernd Rohde",
        "photo": "/assets/profile.svg",
        "position": "CEO Italian German Exhibition Company Mexico",
    },
    {
        "name": "Miguel Leaman Rivas",
        "photo": "/assets/profile.svg",
        "position": "Presidente Ejecutivo de Agencia Por México",
    },
    {
        "name": "Carlos Alberto Yates García",
        "photo": "/assets/profile.svg",
        "position": "Presidente del Clúster de Energía del Estado de Chihuahua",
    },
    {
        "name": "Laura Frias",
        "photo": "/assets/profile.svg",
        "position": "Coordinadora de Atracción de IED y Nearshoring de la AMPIP",
    },
    {
        "name": "Ari - Ben Saks González",
        "photo": "/assets/profile.svg",
        "position": "Ernst & Young Global Specialist",
    },
]

export default speaker;