interface Speaker {
    name: string;
    photo: string;
    profile?: string[];
    position: string;
}

/*
    {
        name: "Ricardo Haneine",
        photo: "https://via.placeholder.com/150",
        profile: "Es Ingeniero en Sistemas Computacionales por la Universidad de las Américas Puebla, Maestro en Ciencias en Ingeniería de Software por el Instituto Tecnológico de Estudios Superiores de Monterrey y Doctor en Ciencias de la Computación por la Universidad de las Américas Puebla. Actualmente es Director de la Facultad de Ingeniería de la Universidad de las Américas Puebla y profesor de tiempo completo en el Departamento de Ciencias de la Computación. Sus áreas de interés son la ingeniería de software, la calidad de software, la educación en ingeniería de software y la educación en línea.",
        position: "Director de la Facultad de Ingeniería",
    }
*/

const speaker : Speaker[] = [
    {
        name: "Ramón Alfaro",
        photo: "/speakers/ramon_alfaro.webp",
        profile: [
            "Es Licenciado en Relaciones Internacionales por la Universidad Nacional Autónoma de México (UNAM). Su trayectoria incluye cargos municipales en la ciudad de León y otros puestos dentro del sector público estatal.",
            "Como algunas de sus actividades sobresalientes destaca el haber sido responsable de crear la Subsecretaría de Apoyo a las Micro, Pequeñas y Medianas Empresas, líder de programas como Mi Plaza y En Marcha; entre otras. Antes de su nuevo nombramiento se desempeñó como subsecretario de empleo y formación laboral."
        ],
        position: "Secretario de Desarrollo Económico Sustentable de Guanajuato"
    },
    {
        name: "Esaú Garza",
        photo: "/speakers/esau_garza.webp",
        profile: [
            "Secretario de Desarrollo Económico, Ciencia y Tecnología de Aguascalientes. Es Licenciado en Comercio Exterior, cuenta con experiencia como consejero Comercial en las embajadas de México en Japón (2008-2013) y Australia (2015 - 2019), fue secretario de Desarrollo Económico para el Estado de Aguascalientes (2013-2015).",
            "Destaca por su experiencia y trayectoria en la promoción de México como destino de inversión con un fuerte enfoque a la industria automotriz y de manufacturas avanzadas.",
            "Certificado como Perito Traductor Oficial en los idiomas inglés y japonés. Ha impartido ponencias en relación con las técnicas de negociación aplicables a la cultura japonesa en universidades y foros, así mismo ha participado en seminarios sobre oportunidades de negocios en sectores estratégicos ante empresarios."
        ],
        position: "Secretario de Desarrollo Económico, Ciencia y Tecnología de Aguascalientes - SEDECyT"
    },
    {
        name: "Miguel Leaman",
        photo: "/speakers/miguel_angel_leaman.webp",
        profile: [
            "Es Licenciado en Economía egresado del Instituto Tecnológico Autónomo de México (ITAM). Actualmente se desempeña como Director General de la Agencia por México, empresa de consultoría y asesoría comercial, internacionalización de empresas, y atracción de inversión extranjera.",
            "Trabajó durante once años en ProMéxico, desde su fundación hasta su extinción. Sus responsabilidades se enfocaron en apoyar las capacidades productivas de las empresas mexicanas, identificando y materializando oportunidades comerciales y de inversión en el exterior; asesorando a más de 300 empresas en temas de comercio exterior y logística para la exportación; así como vigorizando la participación de las compañías mexicanas en nuevos modelos de negocios, como la internacionalización de actividades de 280 empresas, apertura de más de 50 franquicias y licenciamiento de marcas en el extranjero; o el establecimiento de alianzas estratégicas por convenios de cooperación económica con organismos de la Comisión Europea, y de España, Alemania, Canadá, Estados Unidos, Japón, Honduras, o Chile."
        ],
        position: "Presidente Ejecutivo de Agencia Por México",
    },
    {
        name: "Alfonso Valdés",
        photo: "/speakers/alfonso_valdes.webp",
        profile: [
            "Nació en Irapuato, académicamente es Ingeniero Industrial egresado del Instituto Tecnológico de Celaya, cuenta con una Maestría en Finanzas por parte del ITESM y es Miembro Activo del American Academy of Financial Management – Capítulo Latinoamérica.",
            "Dentro de su desarrollo profesional, al día de hoy funge como Secretario de INDEX Nacional, Presidente de IINEX Guanajuato y Director del Sector Alimentos y Agroindustria de INDEX Nacional.",
            "Es integrante del Cuarto de Junto de la SE en la Negociación y seguimiento del TMEC y Apoderado Aduanal y Gerente de Comercio Exterior del Grupo Mar Bran (Empresa líder en exportación de Vegetales Congelados y Frescos).",
            "También es Consejero de diversos organismos, públicos y privados, principalmente relacionados con Comercio Internacional."
        ],
        position: "Presidente del Consejo Nacional de la Industria Maquiladora y Manufacturera de Exportación – INDEX"
    },
    {
        name: "Samuel Campos",
        photo: "/speakers/samuel_campos.webp",
        profile: [
            "Samuel Campos lleva 30 años promoviendo la atracción de inversión extranjera directa hacia México y Latinoamérica. Desde sus inicios como Director de Promoción Económica en el gobierno de Aguascalientes y en su etapa como  Director de Inversión Extranjera del estado de Guanajuato.",
            "Durante su carrera, ha sido partícipe en la creación de más de 60 mil empleos  directos en el país y más de 5,000 millones de dólares en proyectos de inversión en  Latinoamérica. Además, Samuel ha sido miembro del Consejo Consultivo de Desarrollo  Económico de la ciudad de León. ",
            "Ha sido responsable de la creación, manejo, consolidación y operación de parques  industriales en el país. Fue designado como Senior Vice Presidente de la prestigiosa Empresa CBRE, donde permaneció por 12 años a cargo de la región Bajío.",
            "También ha participado como conferencista y  panelista en diversos foros en México, Estados Unidos, Argentina, Asia y Europa,  donde ha participado activamente en tópicos como: Procesos de Inversión en México,  Nearshoring y Tendencias Industriales de Latinoamérica."
        ],
        position: "Excecutive Managing Director de NEWMARK"
    },
    {
        name: "Salvador Portillo",
        photo: "/speakers/salvador_portillo.webp",
        position: "Presidente de la Cámara Nacional de Manufacturas Eléctricas - CANAME"
    },
    {
        name: "Adriana Pulido Sandoval",
        photo: "/speakers/adriana_pulido_sandoval.webp",
        profile: [
            "Experta en ESG, sostenibilidad y gestión de riesgos, estratega con enfoque analítico y sistémico. Ha trabajado con Gobierno, sector privado y ONG’s, al contar con habilidades para hacer análisis de perspectivas y escenarios a futuro con base en la evolución de los riesgos socio-ambientales y las tendencias de los sistemas económicos, tecnológicos, regulatorios y de consumo.",
            "Emprendedora serial y pionera en sostenibilidad. Adriana cuenta con 17 años de experiencia en el desarrollo de la cultura en sostenibilidad corporativa en más de 12 industrias en México. Durante ese tiempo ha liderado el acompañamiento a 180 de las empresas más importantes en México, ayudándolas en su camino en ESG y sostenibilidad."
        ],
        position: "CEO de Ilunka",
    },
    {
        name: "Edgar Guzman Moreno",
        photo: "/speakers/edgar_guzman_moreno.webp",
        profile: [
            "Cuenta con más de 15 años de experiencia profesional en áreas de Negocios Internacionales y Administración. Ha trabajado en Empresa de Sector Automotriz como Responsable de Compras Internacionales y Exportaciones, en una Agencia Aduanal y de Logística como Gerente Comercial y Gerente General. En el Sector Público trabajó en Bancomext Singapur y fue Director de Competitividad del Municipio de León.",
            "Es Licenciado en Comercio Internacional egresado con Excelencia Académica y Mención Honorífica, cuenta con Maestría en Administración y realizó sus estudios de Doctorado en Administración. Terminó el Diplomado en Dirección Global de Cadena de Suministro en el Tec de Monterrey Campus León en 2018.",
            "Actualmente es Director del Programa de Negocios Internacionales en el Tecnológico de Monterrey Campus León y Consultor en Educación Continua con alcance a más de 800 ejecutivos y gerentes de varios sectores en América Latina principalmente en temas de: Habilidades Gerenciales, Negociación, Megatendencias y Planeación Estratégica."
        ],
        position: "Director de la Carrera de Negocios Internacionales I T E S M - Campus León",
    },
    {
        name: "Fernando Rivadeneyra",
        photo: "/speakers/fernando_rivadeneyra.webp",
        profile: [
            "Es socio patrimonial de la firma Rivadeneyra Treviño, especializada en Derecho Internacional Privado, Fusiones y Adquisiciones y Derecho Corporativo General, con clientes en México y otros países.",
            "Cuenta con un Business Degree del Suomi College, de Michigan, Estados Unidos y una Licenciatura en Derecho por la Universidad Iberoamericana Campus Santa Fe.",
            "Es Asociado a la Barra Internacional de Abogados y miembro de la Association of European Attorneys, forma parte del patronato de la Universidad Iberoamericana y es miembro del International Business Law Consortium.",
            "Su despacho representa en nuestro país la Antena IGAPE México, organismo español de promoción de negocios internacionales entre empresas mexicanas y gallegas."            
        ],
        position: "Presidente Ejecutivo de la Antena IGAPE México y Socio Fundador de RT&DC Abogados"
    },
    {
        name: "Luis Alfonso González",
        photo: "/speakers/profile.svg",
        position: "Rector de la Universidad Iberoamericana Campus León"
    },
    {
        name: "Carlos Alberto Yates",
        photo: "/speakers/carlos_alberto_yates.webp",
        profile: [
            "Cuenta con una Maestría en Administración Pública y un Doctorado en Filosofía de la Educación y Administración de Estadísticas Experimentales ambos por parte de la Universidad Estatal de Nuevo México. Es egresado de la carrera de  Ingeniería Química por el Instituto Tecnológico de Estudios Superiores de Monterrey – ITESM, Campus Monterrey. Actualmente es Presidente del Clúster de Energía de Chihuahua.",
            "Gracias a su perfil profesional y académico mantiene un papel de liderazgo en  el desarrollo de proyectos de cooperación, investigación, innovación y mejores prácticas  tanto con diferentes clústeres afines y similares de otros estados, como con instituciones  de enseñanza superior como el Colegio de Ingenieros Mecánicos y Electricistas."
        ],
        position: "Presidente Clúster de Energía de Chihuahua",
    },
    {
        name: "Laura Frías",
        photo: "/speakers/laura_frias.webp",
        profile: [
            "Es Coordinadora de Promoción IED de la Asociación Mexicana de Parques Industriales Privados – AMPIP, previo a ello se desempeñó como Consultora Externa de la Secretaría de Economía, y como Consultora experta para la región Asia - Pacífico, en BRATUS Consultores.",
            "Tiene experiencia en promoción internacional de negocios, trabajando como Consejera en la Embajada de México en Corea del Sur, y como Directora para Asia, Oceanía y Medio Oriente en ProMéxico, atendiendo temas como identificación, promoción y desarrollo de oportunidades comerciales, atracción de IED a México e internacionalización de empresas mexicanas a esa región del mundo.",
            "Académicamente es Licenciada en Relaciones Internacionales con la especialidad en Comercio y Negocios Internacionales, egresada de la UNAM, cuenta con varios diplomados y orgullosamente fue condecorada con la Medalla Gabino Barreda por su Alma Mater, Generación 2009."
        ],
        position: "Coordinadora de Atracción de Inversiones y Nearshoring de la Asociación Mexicana de Parques Industriales Privados - AMPIP"
    },
    {
        name: "Ari - Ben Saks González",
        photo: "/speakers/ari_ben_saks.webp",
        profile: [
            "Tiene más de 20 años de experiencia como desarrollador de nuevos negocios en Asia, donde ayudó a cerrar y aterrizar muchos proyectos entre China, Taiwán y México. Estos proyectos fueron en diversos campos e industrias como minería, energía, manufactura, infraestructura, automotriz, telecomunicaciones y materias primas, entre otros. Estuvo a cargo de misiones comerciales de alto nivel visitando México o China, lo que incluyó actividades que abarcaron el desarrollo y la promoción del comercio y las inversiones bilaterales, centrándose en el aterrizaje suave de las inversiones chinas y taiwanesas en México (SIED) y las inversiones mexicanas en China.",
            "Estuvo a cargo de proporcionar servicios de consultoría para resolver problemas de política comercial y negocios relacionados con empresas de China que intentaban invertir en México y empresas mexicanas que invertían o iniciaban operaciones en China. Actualmente, es Director de Desarrollo de Nuevos Negocios de Asia y Associate Partner de Servicios Fiscales y Legales en EY México."
        ],
        position: "Ernst & Young Global Specialist",
    },
    {
        name: "Sergio Contreras",
        photo: "/speakers/sergiocontreras.webp",
        profile: [
            "Sherpa del Business 20 por México y Sherpa del Capitulo México del Consejo Empresarial de la Alianza del Pacifico.",
            "Participa por el COMCE en el CCE, Consejero de COPARMEX León, mesa Directiva CONCAMIN y Consejero en BANCOMEXT, fue Pte. de la Asociación de Instituciones Financieras Internacionales.",
            "Ha sido representante de Banca Di Roma en México, DG del Centro de Excelencia en Gobierno Corporativo y Director del Área Internacional de BANCOMEXT.",
            "Es Licenciado en Administración por la UNAM. Maestría en Administración por la Universidad de Nápoles, Italia y por la UNAM."
        ],
        position: "Presidente Ejecutivo del Consejo Empresarial Mexicano de Comercio Exterior, Inversión y Tecnología - COMCE, Pte. del Consejo de Administración de Pirelli México y de Capital It Mx, y Vicepte. de la Cámara Nacional de la Industria Hulera",
    },
    {
        name: "Héctor López Santillana",
        photo: "/speakers/hectorlopez.webp",
        position: "Director General de Puerto Interior Guanajuato"
    }
]

export default speaker;