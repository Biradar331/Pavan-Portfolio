export const personal = {
  name: 'Pavan Biradar',
  title: 'Software Engineer',
  subtitle: 'Python · React · AWS',
  email: 'biradarpavan843@gmail.com',
  location: 'Bengaluru, India',
  relocation: 'Open to relocation',
  workModes: 'On-site · Hybrid · Remote',
  rolesOpenTo:
    'Software Engineer · Frontend Developer · Full Stack Developer · GET / Analyst',
  resumePath: '/resume/Resume_Software.pdf',
  photoPath: '/images/profile.jpg',
};

/** Concise, recruiter-scannable about content */
export const aboutSummary =
  'Final-year Software Engineer (ETE, BIT Bengaluru) building web, cloud, and ML systems with Python, React, and AWS.';

export const bio = [
  `I'm Pavan Biradar, a final-year B.E. student in Electronics and Telecommunication Engineering at Bangalore Institute of Technology, graduating in June 2026. I focus on software engineering—designing and shipping applications across full-stack web development, cloud infrastructure, and applied machine learning.`,
  `Technically, I work with Python, JavaScript, React.js, Django, MySQL, and AWS. I've completed internships in Python Full Stack (Kodnest) and Cloud Computing (Corizo EdTech), and built projects including a deployed Django food-ordering platform (Meal Buddy), a CNN-based handwritten math-to-LaTeX system (HMER), and IoT systems research presented at an international conference.`,
  `I strengthen fundamentals through 50+ LeetCode problems (DSA & SQL), active GitHub contributions, and continuous learning in modern web and AI-assisted development. I'm seeking full-time Software Engineer and related roles—open to relocation and flexible work modes.`,
];

export const careerObjective = `To join an engineering team as an entry-level Software Engineer where I can deliver reliable, maintainable software, contribute to product features from design to deployment, and grow in full-stack and cloud-native development.`;

export const aboutHighlights = [
  { label: 'Core stack', value: 'Python · React · AWS · MySQL' },
  { label: 'Experience', value: '2 internships · 3 projects' },
  { label: 'Problem solving', value: '50+ LeetCode (DSA & SQL)' },
  { label: 'Availability', value: 'June 2026 · Internship & full-time' },
];

export const aboutFocusAreas = [
  'Full-stack web applications',
  'Cloud & AWS services',
  'ML / computer vision pipelines',
  'Clean code & system design basics',
];

export const applyingFor =
  'Internship + Full-time · Campus & off-campus 2025–26 · Joining June 2026';

export const softSkills = [
  'Communication',
  'Teamwork / Collaboration',
  'Problem solving',
  'Quick learner',
  'Time management',
  'Adaptability',
  'Critical thinking',
];

/** Categorized skills for the portfolio skills section */
export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'code',
    accent: 'blue',
    skills: ['Python', 'JavaScript', 'SQL', 'HTML / CSS'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    accent: 'violet',
    skills: ['React.js', 'Bootstrap', 'Responsive UI', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    accent: 'indigo',
    skills: ['Django', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: 'cloud',
    accent: 'sky',
    skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'Amazon Lex', 'Gunicorn', 'Render'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    accent: 'teal',
    skills: ['MySQL', 'SQLite', 'SQL Queries', 'DBMS'],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    icon: 'ai',
    accent: 'purple',
    variant: 'detailed',
    skills: [
      { name: 'OpenAI', description: 'ChatGPT & API-assisted development' },
      { name: 'GitHub Copilot', description: 'AI pair programming' },
      { name: 'Cursor', description: 'AI-powered IDE workflow' },
      { name: 'Hugging Face', description: 'ML models & experimentation' },
      { name: 'Prompt Engineering', description: 'Structured AI prompts' },
      { name: 'Generative AI', description: 'Fundamentals & workflows' },
    ],
  },
  {
    id: 'dev-tools',
    title: 'Developer Tools',
    icon: 'tool',
    accent: 'slate',
    skills: ['Git & GitHub', 'VS Code', 'Framer Motion', 'Vite', 'Postman'],
  },
];

/** @deprecated Use skillCategories — kept for backward compatibility if needed */
export const programmingLanguages = skillCategories[0].skills;
export const frameworks = {
  frontend: skillCategories[1].skills,
  backend: skillCategories[2].skills,
  cloud: skillCategories[3].skills,
  aiMl: ['CNN', 'Machine Learning', 'OpenCV', 'Data Structures & Algorithms'],
};
export const tools = skillCategories[6].skills;
export const aiTools = skillCategories[5].skills;

export const education = {
  degree: {
    title: 'Bachelor of Engineering (B.E.)',
    branch: 'Electronics and Telecommunication Engineering (ETE)',
    college: 'Bangalore Institute of Technology, Bengaluru',
    duration: '2022 – 2026',
    cgpa: '7.8',
    graduation: 'June 2026',
    coursework: [
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Web Technologies / Internet Programming',
      'Python Programming',
      'Machine Learning / AI',
      'Cloud Computing (Corizo EdTech)',
      'Software Engineering',
    ],
  },
  puc: {
    board: 'Department of Pre-University Education, Karnataka',
    college: 'Diamond Independent PU Science College, Bhalki, Bidar',
    stream: 'PCMB',
    year: '2022',
    percentage: '76.5%',
  },
  tenth: {
    board: 'Karnataka Secondary Education Examination Board (SSLC)',
    school: 'Sri Khadkeshwar Vidhya Mandir, Bhalki, Bidar',
    year: '2020',
    percentage: '87.5%',
  },
};

export const internships = [
  {
    id: 'kodnest',
    company: 'Kodnest',
    role: 'Python Full Stack Intern',
    type: 'Internship',
    focus: 'Full-Stack Development',
    location: 'Online (Remote)',
    duration: 'Feb 2026 – May 2026',
    period: '9 Feb 2026 – 9 May 2026',
    description:
      'Completed Python Full Stack online internship with project-based learning, strengthening end-to-end web development and delivery skills.',
    highlights: [
      'Python full-stack development training',
      'Hands-on project-based learning',
      'Industry-oriented internship completion',
    ],
    skills: ['Python', 'Full Stack', 'Web Development', 'Projects'],
  },
  {
    id: 'corizo',
    company: 'Corizo EdTech',
    role: 'Cloud Computing Trainee / Intern',
    type: 'Internship',
    focus: 'Cloud Computing',
    location: 'Bangalore, India (Remote)',
    duration: 'Oct 2025 – Dec 2025',
    period: 'Oct 2025 – Dec 2025',
    description:
      'Remote cloud program with hands-on AWS: EC2, S3, IAM, and an Amazon Lex chatbot for hotel room booking automation.',
    highlights: [
      'Provisioned and managed AWS EC2 (Linux / web server workloads)',
      'Configured S3 for cloud storage use cases',
      'Implemented IAM users, groups, and RBAC-style permissions',
      'Developed Amazon Lex chatbot for hotel room booking automation',
    ],
    skills: ['AWS', 'EC2', 'S3', 'IAM', 'Amazon Lex'],
  },
];

export const projects = [
  {
    id: 'hmer',
    category: 'Machine Learning',
    featured: true,
    title: 'Handwritten Mathematical Expression Recognition (HMER)',
    summary:
      'Production-style ML pipeline that converts handwritten math images into structured LaTeX using deep learning.',
    description:
      'Built an end-to-end HMER system for digitizing handwritten mathematical expressions. Designed preprocessing (normalization, denoising), CNN-based feature extraction (DenseNet-121), and attention-based sequence decoding to output LaTeX. Validated on the CROHME benchmark with focus on complex layouts including fractions and superscripts.',
    impact: [
      'End-to-end pipeline: image ingestion → model inference → LaTeX output',
      'Evaluated on CROHME — industry-standard handwritten math dataset',
      'Demonstrates strong ML engineering & computer vision fundamentals',
    ],
    techStack: ['Python', 'DenseNet-121', 'Attention RNN', 'OpenCV', 'LaTeX', 'CROHME'],
    features: [
      'Image preprocessing & noise normalization pipeline',
      'CNN feature extraction for spatial math structure',
      'Sequence modeling for symbols and expression layout',
      'LaTeX export for digital publishing workflows',
    ],
    challenges: [
      'Handwriting variance across users and scan quality',
      'Multi-line and nested expression structures',
      'Balancing model accuracy with inference pipeline stability',
    ],
    github: 'https://github.com/Biradar331/HMER',
    liveDemo: null,
    imageFolder: 'hmer',
  },
  {
    id: 'meal-buddy',
    category: 'Full-Stack Web',
    featured: false,
    title: 'Meal Buddy — Food Ordering Platform',
    summary:
      'Deployed full-stack food ordering web app with admin operations, cart/checkout, and Razorpay payments.',
    description:
      'Engineered a Django-based food ordering platform with separate customer and admin experiences. Implemented relational data models, session-based flows, cart management, and Razorpay checkout. Deployed to production on Render with Gunicorn and static asset optimization.',
    impact: [
      'Live production deployment — recruiter-verifiable demo',
      'Real payment flow integration (Razorpay)',
      'Multi-role architecture (customer + admin CRUD)',
    ],
    techStack: ['Python', 'Django', 'SQLite', 'Razorpay', 'Gunicorn', 'WhiteNoise', 'Render'],
    features: [
      'Auth, restaurant discovery, and menu browsing',
      'Cart persistence with dynamic pricing',
      'Admin dashboard for restaurants & menu items',
      'Payment gateway checkout & order confirmation',
    ],
    challenges: [
      'Designing scalable Django models for cart M2M relations',
      'Secure payment order creation (INR/paise handling)',
      'Production config: static files, hosting, and environment setup',
    ],
    github: 'https://github.com/Biradar331/meal-buddy',
    liveDemo: 'https://meal-buddy-app.onrender.com',
    imageFolder: 'meal-buddy',
  },
  {
    id: 'gesture-vehicle',
    category: 'Embedded Systems',
    featured: false,
    title: 'Gesture-Controlled Vehicle (Research Project)',
    summary:
      'IoT system mapping real-time hand gestures to wireless vehicle control — presented at an international conference.',
    description:
      'Developed a gesture-driven control system using Arduino Nano, MPU6050 motion sensing, L298N motor control, and HC-05 Bluetooth. Translated hand motion patterns into reliable movement commands with applications in assistive tech and HCI prototyping.',
    impact: [
      'International conference paper presentation (Dec 2024)',
      'Real-time embedded control under hardware constraints',
      'Cross-disciplinary hardware + software integration',
    ],
    techStack: ['Arduino', 'MPU6050', 'L298N', 'Bluetooth HC-05', 'Embedded C'],
    features: [
      'Live gesture-to-motion command mapping',
      'Wireless Bluetooth-based control channel',
      'Motor driver integration for stable locomotion',
      'Research-backed prototype for HCI / assistive use cases',
    ],
    challenges: [
      'Sensor noise calibration and gesture classification',
      'Latency-sensitive control loop on embedded hardware',
      'Power and motor driver stability during continuous use',
    ],
    github: null,
    liveDemo: null,
    imageFolder: 'gesture-vehicle',
    note: 'International conference · Dec 2024',
  },
];

export const certifications = [
  {
    id: 'tcs-ion',
    title: 'Career Edge – Young Professional',
    issuer: 'TCS iON',
    provider: 'Tata Consultancy Services',
    issueDate: 'August 2025',
    status: 'completed',
    logo: 'tcs',
    credentialId: '240640-28062778-1016',
    description:
      'Certified in workplace readiness, communication skills, business etiquette, IT fundamentals, and AI overview.',
    tags: ['Communication', 'IT Fundamentals', 'AI Overview'],
  },
  {
    id: 'corizo-cloud',
    title: 'Cloud Computing Internship',
    issuer: 'Corizo EdTech',
    provider: 'AWS Training Program',
    issueDate: 'October – December 2025',
    status: 'completed',
    logo: 'aws',
    description:
      'Worked with AWS EC2, S3, IAM, and Amazon Lex chatbot development during internship training.',
    tags: ['AWS EC2', 'S3', 'IAM', 'Amazon Lex'],
  },
  {
    id: 'udemy-web',
    title: 'Web Development Course',
    issuer: 'Udemy',
    provider: 'Colt Steele',
    issueDate: 'In progress',
    status: 'in-progress',
    logo: 'udemy',
    description:
      'Currently learning full stack web development including frontend, backend, APIs, databases, and deployment.',
    tags: ['React', 'Node.js', 'APIs', 'Deployment'],
  },
  {
    id: 'conference-paper',
    title: 'International Conference Paper Presentation',
    issuer: 'International Conference',
    provider: 'Research & Academia',
    issueDate: 'December 2024',
    status: 'completed',
    logo: 'conference',
    description:
      'Presented a research paper on an Arduino-based hand gesture controlled vehicle in an international conference.',
    tags: ['Research', 'Embedded Systems', 'Paper Presentation'],
  },
];

export const achievements = [
  'Solved 50+ DSA and SQL problems on LeetCode',
  'Built and maintained multiple GitHub repositories (Python & web development)',
  'International conference presentation — gesture-controlled vehicle (Dec 2024)',
  'INCEPTRA 2025 poster presentation at BIT (Apr 2025)',
];

export const profiles = {
  leetcode: 'https://leetcode.com/u/Pavan8073/',
  github: 'https://github.com/Biradar331',
  linkedin: 'https://www.linkedin.com/in/pavan-biradar-a69444262',
};

/** Recruiter-optimized nav order: proof → experience → skills */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export const navSectionIds = navLinks.map((l) => l.id);
