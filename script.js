const translations = {
    'pt': {
        'subtitle': 'Information Systems Student | System Dev | AI Enthusiast',
        'about': 'Apaixonado por entender como as coisas funcionam "por baixo do capô". Atualmente focado em estrutura de dados, algoritmos complexos e visão computacional. Sempre transformando café em código C e Java.',
        'skills_title': 'Habilidades',
        'tech_title': 'Tecnologias',
        'tag_func': 'Programação funcional / Haskell',
        'tag_decl': 'Programação declarativa / Prolog',
        'soft_title': 'Soft Skills',
        'soft_1': 'Resolução de Problemas',
        'soft_2': 'Autodidata',
        'soft_3': 'Comunicação Técnica',
        'soft_4': 'Trabalho em Equipe',
        'soft_5': 'Pensamento Lógico',
        'projects_title': 'Projetos Recentes',
        'desc_java': 'Aplicação gráfica interativa para visualizar algoritmos de busca (A* e Dijkstra) encontrando o menor caminho em tempo real.',
        'btn_view': 'Ver Código',
        'title_shell': 'Mini Shell em C',
        'desc_shell': 'Um interpretador de comandos cross-platform (Windows/Linux) com gerenciamento de processos, built-ins e manipulação de memória.',
        'desc_hand': 'Interface futurista de controle gestual (mouse e jogos) usando Webcam, OpenCV e MediaPipe. Sem tocar no teclado!',
        'title_huff': 'Compressor Huffman C++',
        'desc_huff': 'Implementação do algoritmo de Huffman para compressão de dados sem perdas, manipulando bits e árvores binárias.',
        'title_port': 'Este Portfólio',
        'desc_port': 'Desenvolvido com HTML5 Semântico e CSS3 Moderno (Flexbox/Grid). Responsivo, acessível e hospedado no GitHub Pages.',
        'footer_title': 'Vamos conversar?',
        'footer_text': 'Estou aberto a novas oportunidades e projetos.',
        'footer_copy': '© 2026 Desenvolvido por Igor Dias'
    },
    'en': {
        'subtitle': 'Information Systems Student | System Dev | AI Enthusiast',
        'about': 'Passionate about understanding how things work "under the hood". Currently focused on data structures, complex algorithms, and computer vision. Always turning coffee into C and Java code.',
        'skills_title': 'Skills',
        'tech_title': 'Technologies',
        'tag_func': 'Functional Programming / Haskell',
        'tag_decl': 'Declarative Programming / Prolog',
        'soft_title': 'Soft Skills',
        'soft_1': 'Problem Solving',
        'soft_2': 'Self-taught',
        'soft_3': 'Technical Communication',
        'soft_4': 'Teamwork',
        'soft_5': 'Logical Thinking',
        'projects_title': 'Recent Projects',
        'desc_java': 'Interactive graphic application to visualize search algorithms (A* and Dijkstra) finding the shortest path in real-time.',
        'btn_view': 'View Code',
        'title_shell': 'Mini Shell in C',
        'desc_shell': 'A cross-platform (Windows/Linux) command interpreter with process management, built-ins, and memory manipulation.',
        'desc_hand': 'Futuristic gesture control interface (mouse and games) using Webcam, OpenCV, and MediaPipe. Touchless!',
        'title_huff': 'Huffman Compressor C++',
        'desc_huff': 'Implementation of the Huffman algorithm for lossless data compression, manipulating bits and binary trees.',
        'title_port': 'This Portfolio',
        'desc_port': 'Developed with Semantic HTML5 and Modern CSS3 (Flexbox/Grid). Responsive, accessible, and hosted on GitHub Pages.',
        'footer_title': 'Let\'s talk?',
        'footer_text': 'I am open to new opportunities and projects.',
        'footer_copy': '© 2026 Developed by Igor Dias'
    },
    'es': {
        'subtitle': 'Estudiante de Sistemas de Información | Dev | Entusiasta de IA',
        'about': 'Apasionado por entender cómo funcionan las cosas "bajo el capó". Actualmente enfocado en estructuras de datos, algoritmos complejos y visión por computadora. Siempre transformando café en código C y Java.',
        'skills_title': 'Habilidades',
        'tech_title': 'Tecnologías',
        'tag_func': 'Programación Funcional / Haskell',
        'tag_decl': 'Programación Declarativa / Prolog',
        'soft_title': 'Habilidades Blandas',
        'soft_1': 'Resolución de Problemas',
        'soft_2': 'Autodidacta',
        'soft_3': 'Comunicación Técnica',
        'soft_4': 'Trabajo en Equipo',
        'soft_5': 'Pensamiento Lógico',
        'projects_title': 'Proyectos Recientes',
        'desc_java': 'Aplicación gráfica interactiva para visualizar algoritmos de búsqueda (A* y Dijkstra) encontrando el camino más corto en tiempo real.',
        'btn_view': 'Ver Código',
        'title_shell': 'Mini Shell en C',
        'desc_shell': 'Un intérprete de comandos multiplataforma (Windows/Linux) con gestión de procesos, comandos internos y manipulación de memoria.',
        'desc_hand': 'Interfaz futurista de control gestual (mouse y juegos) usando Webcam, OpenCV y MediaPipe. ¡Sin tocar el teclado!',
        'title_huff': 'Compresor Huffman C++',
        'desc_huff': 'Implementación del algoritmo de Huffman para compresión de datos sin pérdidas, manipulando bits y árboles binarios.',
        'title_port': 'Este Portafolio',
        'desc_port': 'Desarrollado con HTML5 Semántico y CSS3 Moderno (Flexbox/Grid). Responsivo, accesible y alojado en GitHub Pages.',
        'footer_title': '¿Hablamos?',
        'footer_text': 'Estoy abierto a nuevas oportunidades y proyectos.',
        'footer_copy': '© 2026 Desarrollado por Igor Dias'
    }
};

function changeLanguage(lang) {
    const langLabel = document.querySelector('.lang-text');
    langLabel.textContent = lang.toUpperCase();
    if(lang === 'pt') langLabel.textContent = 'PT-BR';

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}