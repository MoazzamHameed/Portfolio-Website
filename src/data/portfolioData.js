export const profile = {
  name: 'Moazzam Hameed',
  location: 'Pakistan',
  email: 'moazzamhameed07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/moazzam-hameed-softwareengineer/',
  github: 'https://github.com/moazzamhameed',
  roleOptions: [
    'Full Stack Engineer',
    'ASP.NET Core & React Developer',
    'Software Engineer',
  ],
  tagline:
    'Building secure, scalable, and user-focused web applications with a strong backend-first mindset.',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  summary:
    'I am a Full Stack Engineer and Software Engineering student who loves turning complex business requirements into elegant digital products. My core work centers around ASP.NET Core Web APIs, C#, React.js, and relational databases. I enjoy designing scalable backend architectures, building modern user experiences, and exploring entrepreneurship through SaaS product thinking.',
  bullets: [
    'Hands-on experience delivering SaaS-based ERP modules for real-world workflows.',
    'Strong focus on API security, JWT authentication, and maintainable code structure.',
    'Interested in modern software architecture, AI-powered products, and startup execution.',
  ],
}

export const skillGroups = [
  {
    title: 'Frontend Skills',
    items: [
      { name: 'React.js', value: 92 },
      { name: 'JavaScript', value: 88 },
      { name: 'HTML5', value: 95 },
      { name: 'CSS3', value: 90 },
      { name: 'Tailwind CSS', value: 89 },
    ],
  },
  {
    title: 'Backend Skills',
    items: [
      { name: 'ASP.NET Core Web API', value: 91 },
      { name: 'C#', value: 90 },
      { name: 'Entity Framework Core', value: 86 },
      { name: 'REST APIs', value: 92 },
      { name: 'JWT Authentication', value: 88 },
    ],
  },
  {
    title: 'Database Skills',
    items: [
      { name: 'SQL Server', value: 89 },
      { name: 'Oracle Database', value: 84 },
      { name: 'PL/SQL', value: 80 },
    ],
  },
  {
    title: 'Tools & Technologies',
    items: [
      { name: 'Git & GitHub', value: 90 },
      { name: 'Visual Studio', value: 88 },
      { name: 'VS Code', value: 93 },
      { name: 'Oracle APEX', value: 81 },
      { name: 'Postman', value: 87 },
      { name: 'Docker Basics', value: 72 },
    ],
  },
  {
    title: 'Other Knowledge',
    items: [
      { name: 'Networking', value: 78 },
      { name: 'DevOps Basics', value: 74 },
      { name: 'Virtualization', value: 76 },
      { name: 'Cloud Computing', value: 77 },
      { name: 'Data Mining', value: 73 },
      { name: 'Neural Networks', value: 70 },
    ],
  },
]

export const experiences = [
  {
    title: 'Full Stack Engineer',
    period: 'Professional Experience',
    details: [
      'Worked on SaaS-based ERP systems across finance, operations, and management workflows.',
      'Developed secure APIs using ASP.NET Core and C# for modular business services.',
      'Built responsive frontend interfaces with React.js and component-driven architecture.',
      'Integrated SQL Server and Oracle databases while improving query performance.',
      'Implemented authentication and authorization systems using JWT-based flows.',
      'Optimized backend logic and data access layers for reliability and scale.',
    ],
  },
  {
    title: 'Academic & Personal Projects',
    period: 'Hands-on Practice',
    details: [
      'Built Blog Platform API and Task Management System API with production-like patterns.',
      'Implemented reusable JWT authentication and role-based authorization modules.',
      'Worked on Deepfake Detection final-year project concepts and experimentation.',
      'Created dynamic Oracle APEX applications for recruitment and management use cases.',
    ],
  },
]

export const education = {
  degree: 'BS Information Technology',
  institution: 'GCUF 2022 - 2026',
  coursework: [
    'Programming Fundamentals',
    'DSA',
    'DBMS',
    'OOP',
    'Operating Systems',
    'Networking',
    'Data Mining',
    'Cloud Computing',
    'Operations Research',
    'Site Reliability Engineering',
    'Virtualization Technologies',
  ],
}

export const projects = [
  {
    title: 'Deepfake Detection System',
    category: 'AI',
    description:
      'An AI-focused system for detecting synthetic media using GAN-aware feature extraction and FastAPI-powered serving.',
    tech: ['FastAPI', 'Python', 'GAN', 'Deep Learning'],
    features: ['Model inference endpoint', 'Media confidence scoring', 'Structured evaluation pipeline'],
    showDemo: true,
    demo: 'https://example.com/deepfake-demo',
  },
  {
    title: 'Blog Platform API',
    category: 'Backend',
    description: 'Robust ASP.NET Core API for blog publishing, role-based access, and content workflows.',
    tech: ['ASP.NET Core', 'C#', 'EF Core', 'SQL Server'],
    features: ['JWT security', 'CRUD with validation', 'Modular architecture'],
    github: 'https://github.com/MoazzamHameed/DotNetTaskManagerAPI-ToDo',
    showGithub: true,
  },
  {
    title: 'Task Management System API',
    category: 'Backend',
    description: 'Task and workflow API designed for teams with status tracking and accountability metrics.',
    tech: ['ASP.NET Core', 'REST API', 'SQL Server'],
    features: ['Task lifecycle management', 'Priority and deadlines', 'Token-based auth'],
    github: 'https://github.com/MoazzamHameed/DotNetTaskManagerAPI-ToDo',
    showGithub: true,
  },
  {
    title: 'JWT Authentication System',
    category: 'Security',
    description: 'Reusable authentication and authorization starter with token refresh flow and secure endpoints.',
    tech: ['ASP.NET Core', 'JWT', 'Identity'],
    features: ['Role claims', 'Refresh tokens', 'Protected route policies'],
    github: 'https://github.com/MoazzamHameed/DotNetTaskManagerAPI-ToDo',
    showGithub: true,
  },
  {
    title: 'SaaS ERP Modules',
    category: 'Full Stack',
    description: 'Business-centric ERP modules for operations, user management, and reporting dashboards.',
    tech: ['React.js', 'ASP.NET Core', 'SQL Server', 'Oracle'],
    features: ['Scalable modules', 'Secure API integration', 'Data-heavy dashboards'],
    showGithub: false,
    showDemo: false,
  },
  {
    title: 'Oracle APEX Recruitment System',
    category: 'Database',
    description: 'Dynamic Oracle APEX app for candidate pipelines, hiring stages, and admin workflows.',
    tech: ['Oracle APEX', 'PL/SQL', 'Oracle Database'],
    features: ['Dynamic forms', 'Role-aware screens', 'Automated status updates'],
    showGithub: true,
  },
  {
    title: 'Chatting Application',
    category: 'Full Stack',
    description: 'Realtime-inspired chat interface with conversation management and clean UI components.',
    tech: ['React.js', 'Web API', 'SQL'],
    features: ['Conversation threads', 'Responsive chat layout', 'User presence concepts'],
    github: 'https://github.com/moazzamhameed/chatting-application',
    demo: 'https://example.com/chat-app',
    showGithub: false,
    showDemo: false,
  },
  {
    title: 'Portfolio Website',
    category: 'Frontend',
    description: 'Premium personal portfolio showcasing professional experience, projects, and technical focus.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    features: ['Project filtering', 'Dark/light mode', 'Animated sections'],
    github: 'https://github.com/moazzamhameed/portfolio-website',
    demo: 'https://example.com/portfolio',
    showGithub: false,
    showDemo: false,
  },
]

export const certifications = [
  'ASP.NET Core Development',
  'React.js Development',
  'Database Management',
  'Cloud & Virtualization Concepts',
  'Networking Fundamentals',
]
