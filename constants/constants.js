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
    graduationDate: "May 2025",
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
    webDevelopment: ["HTML", "CSS"],
    frameworks: [
        "React", 
        "Node.js", 
        "Flask", 
        "Express.js", 
        "Tailwind", 
        "Bootstrap", 
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
        "Amazon SageMaker Studio", 
        "Azure AI Studio", 
        "MongoDB", 
        "Docker"
    ]
};

const EXPERIENCE = [
    {
        title:"Frontend Engineer",
        company:"CoNA Lab",
        location:"Baltimore , Maryland",
        responsibilities:"Developed an accessibility tool with react and tailwind CSS to that identifies and highlights accessibility violations.",
        date:"Present"
    },
    {
        title:"Undergraduate Researcher",
        company:"MINDS Lab",
        location:"Maryland",
        date:"Present",
        responsibilities:"Developing Machine Learning models to highlight  disparities in healthcare outcomes."
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
        date:"April 2025",
        description:"EcoFit 3D is a web platform that empowers users to design sustainable fashion using intuitive 3D modeling tools and AI-powered personalization. Users can create original eco-friendly clothing, upload inspiration images, and explore a marketplace of community-generated designs. The platform integrates interactive 3D previews, a chat-based design assistant, and seamless user authentication, all built with Next.js, React, and a Python backend."
    },
    {
        name: "Sphinx AI",
        technologies:["Javascript, Next.js, GCP"],
        date:"October 2024",
        description:"Built a career advice assistant with the ability to offer career advice designed to help students navigate their careers and majors. It provides valuable information on various majors, careers, and the general job market as well as realtime salary data and resources like books and videos for users."
    },
    {
        name:"Chiron - AI Study Buddy",
        technologies:["JavaScript", "React", "AWS Transcribe","AWS S3", "Flask"],
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
        date: "May 2024",
        description: "A health community platform that enables users to ask and answer fitness-related questions, and includes a calorie calculator, a library of exercises, and a collection of recipes."
    }

];

const LEADERSHIP = {
    role: "Webmaster",
    organization: "The Society for the Advancement of Computer Science",
    location: "Baltimore, MD",
    startDate: "Aug 2023",
    endDate: "Present"
};

export { CONTACT_INFO, EDUCATION, TECHNICAL_SKILLS, EXPERIENCE, PROJECTS, LEADERSHIP };
