import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'kamrangulistan954@gmail.com',
    emailSubject: "Let's build something amazing together",
    emailBody:
        "Hi Kamran, I'm reaching out to discuss a potential collaboration...",

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev', // Optional
    upworkProfile: '', // You can update this if needed
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/kamranGul-77' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/mkamran3' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React.js', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Material UI', icon: '/logo/mui.svg' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
        { name: 'ShadCN', icon: '/logo/shadcn.png' },
        { name: 'JQuery', icon: '/logo/jquery.svg' },
        { name: 'GSAP', icon: '/logo/gsap.png' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
    ],
    database: [
        { name: 'PostgreSQL', icon: '/logo/postgresql.png' },
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'Drizzle ORM', icon: '/logo/drizzle.png' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'CI/CD', icon: '/logo/cicd.png' },
        { name: 'Firebase', icon: '/logo/firebase.svg' },
        { name: 'Google Play Console', icon: '/logo/playconsole.png' },
        { name: 'Jest', icon: '/logo/jest.png' },
        { name: 'Cypress', icon: '/logo/cypress.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Islamic Savings Center',
        slug: 'islamic-savings-center',
        liveUrl: 'https://www.islamicsavingscenter.com/',
        year: 2024,
        description: `
    A financial savings platform tailored for Islamic users with performance and SEO optimizations.<br/><br/>
    <ul>
      <li>⚙️ Built backend using Node.js, Express.js, Drizzle ORM, and PostgreSQL</li>
      <li>⚡️ Optimized SQL queries and caching to cut response time by 50%</li>
      <li>📈 Boosted Lighthouse score to 92+ with performance tuning</li>
      <li>📱 Achieved a 5x increase in organic traffic through improved UX</li>
    </ul>
  `,
        role: `
    As Full Stack Developer:<br/>
    <ul>
      <li>🔧 Designed backend logic and database schema</li>
      <li>🎯 Enhanced frontend with Next.js for fast navigation</li>
      <li>💡 Applied advanced caching and SSR for better UX</li>
    </ul>
  `,
        techStack: [
            'Next.js',
            'Node.js',
            'Express.js',
            'Drizzle ORM',
            'PostgreSQL',
        ],
        thumbnail: '/projects/images/isc.png',
        longThumbnail: '/projects/images/isc.png',
        images: ['/projects/images/isc.png'],
    },
    {
        title: 'Grace Kapital',
        slug: 'grace-kapital',
        liveUrl: 'https://gkfe.vercel.app/',
        year: 2024,
        description: `
    A MERN-based loan management system with real-time notifications, secure payments, and advanced authentication.<br/><br/>
    <ul>
      <li>💳 Integrated Paystack API for secure payments</li>
      <li>🔔 Real-time updates with Socket.io & node-cron</li>
      <li>🔐 Google OAuth + 2FA via Speakeasy for strong auth</li>
      <li>📉 Reduced overdue payments by 50%</li>
    </ul>
  `,
        role: `
    As Full Stack Developer:<br/>
    <ul>
      <li>🧱 Developed MERN stack frontend and backend</li>
      <li>🔐 Implemented advanced authentication flows</li>
      <li>📡 Built notification systems using WebSockets</li>
    </ul>
  `,
        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Socket.io',
            'Tailwind CSS',
            'Paystack',
            'OAuth',
            '2FA',
        ],
        thumbnail: '/projects/images/geace.png',
        longThumbnail: '/projects/images/geace.png',
        images: ['/projects/images/geace.png'],
    },
    {
        title: 'Mantaray Digital Solutions',
        slug: 'mantaray-digital',
        liveUrl: 'https://www.mantaraydigitalsolutions.com/',
        year: 2024,
        description: `
    A modern marketing agency website with scroll-based animations and blazing-fast load times.<br/><br/>
    <ul>
      <li>🎬 Interactive animations powered by GSAP</li>
      <li>🚀 Optimized for performance via SSR and code splitting</li>
      <li>📱 Fully responsive and visually appealing UI</li>
    </ul>
  `,
        role: `
    As Frontend Developer:<br/>
    <ul>
      <li>🎨 Created UI with Next.js and Tailwind CSS</li>
      <li>🎥 Built animations using GSAP</li>
      <li>⚡ Applied SSR and lazy loading for performance</li>
    </ul>
  `,
        techStack: ['Next.js', 'Tailwind CSS', 'GSAP'],
        thumbnail: '/projects/images/mantary.png',
        longThumbnail: '/projects/images/mantary.png',
        images: ['/projects/images/mantary.png'],
    },

    {
        title: 'TensaiCommerce',
        slug: 'tensai-commerce',
        liveUrl: 'https://www.tensaicommerce.com/',
        year: 2024,
        description: `
      TensaiCommerce is a robust e-commerce platform featuring an optimized checkout, dynamic admin panel, secure authentication, and streamlined deployment pipelines.<br/><br/>
      <ul>
        <li>🛒 Complete E-commerce Flow: Product listing, cart, checkout, and order management</li>
        <li>🛡️ Secure Auth: JWT-based authentication with bcrypt password encryption</li>
        <li>🔧 DevOps: Built-in dev/staging/prod scripts and automated migrations</li>
        <li>⚙️ Seamless State Management with Redux Toolkit</li>
        <li>📦 Integrated environment switching for efficient development</li>
      </ul>
    `,
        role: `
      As a Full Stack Developer, I:<br/>
      <ul>
        <li>🧠 Engineered a custom backend with Node.js, Express.js, Drizzle ORM, and PostgreSQL</li>
        <li>🎨 Built a responsive frontend using Next.js and TailwindCSS</li>
        <li>🚀 Implemented CI/CD pipelines and containerization with Docker</li>
        <li>🔐 Developed secure API routing and role-based access control</li>
      </ul>
    `,
        techStack: [
            'Next.js',
            'Node.js',
            'Express.js',
            'Drizzle ORM',
            'PostgreSQL',
            'Tailwind CSS',
            'Redux Toolkit',
            'Docker',
        ],
        thumbnail: '/projects/images/tcom.png',
        longThumbnail: '/projects/images/tcom.png',
        images: ['/projects/images/tcom.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Software Engineer',
        company: 'TensaiDevs',
        duration: 'Feb 2023 - Present',
    },
    {
        title: 'Associate Software Engineer',
        company: 'TensaiDevs',
        duration: 'Sep 2021 - Jan 2023',
    },
    {
        title: 'Freelance Software Developer',
        company: 'Remote',
        duration: 'Sep 2019 - Aug 2021',
    },
];
