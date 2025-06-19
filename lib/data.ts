import { IProject } from '@/types';

export const GENERAL_INFO = {
<<<<<<< HEAD
    email: 'tasmirolislam@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tajmirul, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Tajmirul' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tajmirul' },
    { name: 'facebook', url: 'https://www.facebook.com/tajmirul.2000' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
=======
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
>>>>>>> 0028a7e7a5a8c6c76c856ed4382d89b6c21b79ec
];

export const MY_STACK = {
    frontend: [
<<<<<<< HEAD
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
=======
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
>>>>>>> 0028a7e7a5a8c6c76c856ed4382d89b6c21b79ec
    ],
};

export const PROJECTS: IProject[] = [
    {
<<<<<<< HEAD
        title: 'MTI Electronics',
        slug: 'mti-electronics',
        liveUrl: 'https://mti-electronics.vercel.app/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
=======
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
>>>>>>> 0028a7e7a5a8c6c76c856ed4382d89b6c21b79ec
    },
];

export const MY_EXPERIENCE = [
    {
<<<<<<< HEAD
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'FRONTEND ENGINEER',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
=======
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
>>>>>>> 0028a7e7a5a8c6c76c856ed4382d89b6c21b79ec
    },
];
