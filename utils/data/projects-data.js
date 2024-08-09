import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Insight-Guard',
        description: "Engineered an intuitive Full Stack application using React, Tailwind, and Django, reducing image upload time by 70%. Integrated AWS S3 Bucket for seamless image uploading, and utilized EC2 for scalable deployment with Docker. Applied AI techniques for CNN Model Training, achieving 95% accuracy in early-stage glaucoma detection.",
        tools: ['Python', 'Django', 'React', 'PostgreSQL', 'Docker', 'AWS S3', 'EC2'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 2,
        name: 'Twitter-Jam',
        description: "Built a responsive and dynamic UI using React, enhancing user experience across devices and increasing engagement through intuitive design. Implemented user authentication and authorization with JWT (JSON Web Tokens) and bcrypt, securing user data and maintaining privacy within the app. Developed RESTful APIs with Node.js and Express to handle user posts, comments, and real-time updates, ensuring efficient data flow and interaction.",
        tools: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'Docker', 'Express', 'JWT', 'bcrypt'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Expensify',
        description: "Developed an app using Java with MVC architecture, resulting in a 20% reduction in code complexity. Implemented real-time expense tracking with Firebase and Firestore, leading to a 30% increase in user tracking. Incorporated data analysis with visualization, providing dynamic graphs and pie charts for better expense insights.",
        tools: ['Java', 'Firebase', 'Gradle', 'Git', 'Firestore'],
        role: 'Android Developer',
        code: '',
        demo: '',
        image: crefin,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },