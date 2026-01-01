// constants.js

const CONTACT_INFO = {
    phone: "410-961-0352",
    email: "chuwa1@morgan.edu",
    linkedin: "https://www.linkedin.com/in/lennythecreator",
    github: "https://www.github.com/lennythecreator",
};

const EDUCATION = {
    university: "Morgan State University",
    location: "Baltimore, MD",
    degree: "Bachelor of Science in Computer Science",
    graduationDate: "Dec 2025",
    coursework: [
        "Calculus",
        "Data Structures & Algorithms",
        "Fundamentals of Software Engineering",
        "Cybersecurity",
        "Computer Systems",
        "Operating Systems",
        "Linear Algebra",
        "Database Design"
    ],
};

const TECHNICAL_SKILLS = {
    languages: ["Python", "JavaScript", "C#","Java", "TypeScript", "Go", "R", "SQL"],
    webDevelopment: ["HTML", "CSS","ARIA"],
    frameworks: [
        "React", 
        "Node.js", 
        "Flask", 
        "Express.js", 
        "Tailwind",
        "Langchain", 
        "Bootstrap", 
        "PyTorch", 
        "Next.js", 
        "Redux",
        "OpenCV", 
        "YOLOv8", 
        "Tensorflow", 
        "Scikit-learn", 
        "NumPy", 
        "Pandas", 
        "NLTK"
    ],
    tools: [
        "Figma", 
        "Git", 
        "GitHub", 
        "Microsoft Azure", 
        "AWS", 
        "PostgreSQL",
        "Firebase", 
        "Google Cloud Platform",
        "Amazon SageMaker Studio", 
        "Azure AI Studio", 
        "MongoDB", 
        "Docker"
    ]
};

const EXPERIENCE = [
    {
        title: "Undergraduate Researcher",
        company:"Human AI Experience Lab",
        location:"Baltimore, MD",
        responsibilities:"At the Human-AI Experience Lab, I developed applications that leverage conversational AI and web technologies to enhance user engagement and increase user satisfaction.",
        date:"Aug 2025 - Dec 2025"
    },
    {
        title:"Software Engineer",
        company:"Cognitive and Neurodiversity Lab",
        location:"Baltimore , MD",
        responsibilities:"At the Cognitive and Neurodiversity Lab, I developed a React-based interface that enabled users to audit websites for WCAG 2.1 compliance using an in-house Vision-Language Model, significantly enhancing the speed and accuracy of accessibility reviews. I implemented Redux for managing global state from streamed internal API data, which improved UI responsiveness and user experience. Additionally, I optimized data delivery using Server-Sent Events (SSE), reducing interface latency by 70% and enabling real-time accessibility insights",
        date:"Aug 2024 - Aug 2025"
    },
    {
        title:"Machine Learning Researcher",
        company:"MINDS Lab",
        location:"Maryland",
        date:"May 2024 - April 2025",
        responsibilities:"At MINDS Lab, I led the data preprocessing phase to build a structured dataset for identifying factors contributing to Coronary Heart Disease. I conducted extensive background research to validate key variables and ensure methodological soundness. Using Pandas, I performed feature engineering to isolate relevant attributes, enabling the application of a feature importance algorithm that highlighted the top contributors to the disease."
    },
    {
        title: "Software Engineer Intern (AI/ML)",
        company: "Center for Equitable AI and Machine Learning Systems",
        location: "Baltimore, MD",
        date: "May 2024 – Aug 2024",
        responsibilities: "Developed an API using Flask to connect a fine-tuned LLM to the frontend, enhancing user interaction; fine-tuned the model with PyTorch for better AAVE response generation; cleaned and preprocessed over 1 million tweets with Pandas, boosting training efficiency by 30%; and created an emotionally aware chatbot interface, increasing user engagement by 15%."
    },
    {
        title: "Machine Learning Engineer Intern",
        company: "Center for Equitable AI and Machine Learning Systems",
        location: "Baltimore, MD",
        date: "Jun 2023 – Aug 2023",
        responsibilities: "Utilized a pre-trained YOLOv8 model for impervious surface detection from aerial imagery; conducted extensive model evaluations and tests to analyze performance metrics; preprocessed and managed large aerial image datasets, improving data readiness for research workflows; collaborated with researchers to document findings, enabling data-driven recommendations; and automated data labeling with Roboflow, enhancing research efficiency.",
    }
];

const PROJECTS = [
    {
        name: "EcoFitz",
        technologies:["Next.js","Flask","AWS S3", "boto3","PostgreSQL"],
        link:"https://github.com/lennythecreator/morganhacks2025",
        date:"April 2025",
        description:"EcoFit 3D is a web platform that empowers users to design sustainable fashion using intuitive 3D modeling tools and AI-powered personalization. Users can create original eco-friendly clothing, upload inspiration images, and explore a marketplace of community-generated designs. The platform integrates interactive 3D previews, a chat-based design assistant, and seamless user authentication, all built with Next.js, React, and a Python backend."
    },
    {
        name: "Sphinx AI",
        technologies:["Javascript, Next.js, GCP"],
        link:"https://github.com/lennythecreator/Sphinx-AI",
        date:"October 2024",
        description:"Built a career advice assistant with the ability to offer career advice designed to help students navigate their careers and majors. It provides valuable information on various majors, careers, and the general job market as well as realtime salary data and resources like books and videos for users."
    },
    {
        name:"Chiron - AI Study Buddy",
        technologies:["JavaScript", "React", "AWS Transcribe","AWS S3", "Flask"],
        link:"https://github.com/lennythecreator/Chiron---Morgan-Hack-AI",
        date:"October 2024",
        description:"Created an AI study buddy that generated transcripts of lectures enabling users to chat with the  assistant about any particular lecture. Utilized AWS Transcribe to give assistant the ability to generate quizzes, flashcards and podcasts from a lecture."
    },
    {
        name: "PropertyLens - The AI Room Inspector",
        technologies: ["JavaScript", "C#", "Docker", "SQL"],
        date: "July 2024",
        description: 
            "Developed an AI-powered room inspection app that won 'Best Customer Value' at a hackathon. Integrated Vision-Language Model on Azure AI Studio for property verification. Used Docker to set up a containerized SQL environment for managing inventory and inspection data."
    },
    {
        name:"Cosmos",
        technologies:["JavaScript","React","Flask"],
        date:"August 2024",
        description:"A speaker management application that empowers event organizers to manage and communicate with speakers attending their events."        
    },
    {
        name:"HealthVault",
        technologies:["JavaScript","React","Flask"],
        link:"https://github.com/lennythecreator/HealthVaulth2",
        date: "May 2024",
        description: "A health community platform that enables users to ask and answer fitness-related questions, and includes a calorie calculator, a library of exercises, and a collection of recipes."
    }

];

const LEADERSHIP = {
    role: "Operation Support",
    organization: "The Society for the Advancement of Computer Science",
    location: "Baltimore, MD",
    startDate: "Aug 2023",
    endDate: "Present"
};

const SERVICES = [
    {
        title: "Landing Page / Static Website",
        icon: "Globe",
        description: "Professional, fast-loading websites perfect for establishing your online presence",
        features: [
            "Responsive design (mobile, tablet, desktop)",
            "3-5 custom pages",
            "Contact forms & Google Maps",
            "SEO optimization & analytics setup"
        ],
        ideal_for: "New businesses, service providers, and portfolios",
        pricing_range: "$350 - $1,500",
        timeline: "1-2 weeks"
    },
    {
        title: "AI-Coded App Hosting & Deployment",
        icon: "Server",
        description: "Deploy and host your AI-generated apps with ease - no technical skills required",
        features: [
            "Deploy apps from Cursor, v0, Bolt, or similar tools",
            "Domain setup & SSL certificates",
            "Cloud hosting configuration (Vercel, Netlify, AWS)",
            "Ongoing maintenance & updates"
        ],
        ideal_for: "Non-technical founders with AI-generated code",
        pricing_range: "$200 - $800",
        timeline: "2-5 days"
    },
    {
        title: "Custom E-commerce Website",
        icon: "ShoppingCart",
        description: "Complete online store solutions to start selling your products",
        features: [
            "Product catalog & search",
            "Shopping cart & checkout",
            "Payment gateway integration (Stripe, PayPal)",
            "Inventory & order management"
        ],
        ideal_for: "Small retailers and online stores",
        pricing_range: "$2,500 - $4,500",
        timeline: "3-4 weeks"
    },
    {
        title: "Mobile App Development",
        icon: "Smartphone",
        description: "Cross-platform mobile apps for iOS and Android",
        features: [
            "Native iOS & Android deployment",
            "Cloud backend integration",
            "Push notifications",
            "User authentication & profiles"
        ],
        ideal_for: "Startups validating ideas and small business apps",
        pricing_range: "$3,500 - $5,000",
        timeline: "4-6 weeks"
    },
    {
        title: "MVP Development",
        icon: "Rocket",
        description: "Launch your startup idea quickly with core features",
        features: [
            "Core feature implementation",
            "User authentication & database",
            "Responsive web application",
            "Deployment & hosting setup"
        ],
        ideal_for: "Entrepreneurs testing product-market fit",
        pricing_range: "$3,000 - $5,000",
        timeline: "4-6 weeks"
    },
    {
        title: "Full-Stack Web Application",
        icon: "Code",
        description: "Custom web solutions built to scale with your business",
        features: [
            "Custom dashboards & reporting",
            "RESTful API development",
            "Database design & optimization",
            "Cloud deployment (AWS/Azure/GCP)"
        ],
        ideal_for: "Growing businesses needing custom solutions",
        pricing_range: "$2,000 - $5,000",
        timeline: "4-8 weeks"
    }
];

// Optional Add-ons for Services
const SERVICE_ADDONS = [
    {
        title: "AI/ML Integration",
        description: "Add intelligent features to your application",
        price_range: "+$1,000 - $2,500"
    },
    {
        title: "Maintenance Package",
        description: "Ongoing support, updates, and bug fixes",
        price_range: "$150 - $350/month"
    },
    {
        title: "Additional Features",
        description: "Extra pages, custom functionality, or integrations",
        price_range: "$250 - $800 each"
    },
    {
        title: "WCAG Accessibility Audit",
        description: "Compliance review and remediation",
        price_range: "+$500 - $1,500"
    }
];

const HERO_CONTENT = {
    headline: "Affordable Custom Software for DMV Small Businesses",
    subheadline: "Professional websites, mobile apps, and web solutions starting at just $350. No hidden fees, transparent pricing.",
    value_props: [
        {
            icon: "DollarSign",
            text: "Transparent Pricing",
            description: "Clear quotes, no surprises"
        },
        {
            icon: "Zap",
            text: "Fast Turnaround",
            description: "1-6 weeks delivery time"
        },
        {
            icon: "Award",
            text: "Quality Guaranteed",
            description: "Modern tech stack & best practices"
        },
        {
            icon: "Users",
            text: "Local to DMV",
            description: "Maryland-based, easy communication"
        }
    ],
    primary_cta: "Book Free Consultation",
    secondary_cta: "View My Services"
};

const BOOKING = {
    calendly_link: "#", // Placeholder - update with actual Calendly link
    consultation_price: "Free 30-min discovery call",
    response_time: "Within 24 hours",
    timezone: "EST (Maryland, USA)",
    email_note: "Affordable custom software for DMV small businesses and startups"
};

// Payment Structure Information
const PAYMENT_TERMS = {
    small_projects: {
        range: "Under $1,500",
        structure: "50% upfront, 50% on delivery",
        description: "Simple payment structure for smaller projects"
    },
    medium_projects: {
        range: "$1,500 - $5,000",
        structure: "33% upfront, 33% at midpoint, 34% on delivery",
        description: "Milestone-based payments for medium projects"
    },
    retainer: {
        range: "$500 - $1,500/month",
        structure: "Monthly billing",
        description: "For ongoing support and development work"
    },
    features: [
        "No hidden fees - transparent pricing",
        "Payment plans available",
        "All pricing includes deployment and training",
        "Source code ownership included"
    ]
};

export { CONTACT_INFO, EDUCATION, TECHNICAL_SKILLS, EXPERIENCE, PROJECTS, LEADERSHIP, SERVICES, SERVICE_ADDONS, HERO_CONTENT, BOOKING, PAYMENT_TERMS };
