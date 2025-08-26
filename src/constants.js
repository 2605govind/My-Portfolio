// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's


// Education Section Logo's
import parulLogo from './assets/education_logo/parulLogo.jpg';
import gskLogo from './assets/education_logo/gskLogo.jpg';
import rgavLogo from './assets/education_logo/rgavLogo.png';


// Project Section Logo's
import streamxLogo from './assets/work_logo/streamx.png';
import writecodeLogo from './assets/work_logo/writecodelogo.png';
import tictactoeLogo from './assets/work_logo/tictactoe_logo.png';
import removebgLogo from './assets/work_logo/image_bg_remover_logo.png';
import dailyWritingGoalLogo from './assets/work_logo/goaltracker_logo.png';
import numberGameLogo from './assets/work_logo/numbergamelogo.png';
import codeQuizLogo from './assets/work_logo/quizwhiz_logo.png';
import passwordGeneratorLogo from './assets/work_logo/paasword_generator_logo.png';
import guessTheNumberLogo from './assets/work_logo/guess_the_number.png';


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'TypeScript', logo: typescriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: mcLogo },
            { name: 'Vercel', logo: vercelLogo },
        ],
    },
];

export const experiences = [
];

export const education = [
  {
    id: 0,
    img: parulLogo,
    school: "Parul Institute of Technology, Vadodara",
    date: "Sep 2021 – May 2025",
    grade: "7.49 CGPA",
    desc: "I am pursuing my Bachelor's degree in Computer Science from Parul Institute of Technology, Vadodara. During my studies, I have been building a strong foundation in computer science principles, programming, and software development. My coursework includes Data Structures, Algorithms, Database Management Systems, Web Development, and more. I have participated in various academic projects and activities that helped enhance my technical and problem-solving skills.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)"
  },
  {
    id: 1,
    img: gskLogo,
    school: "Govt Singhvi Kesari Sr Sec School, Takhatgarh",
    date: "Mar 2019 – Mar 2020",
    grade: "62%",
    desc: "I completed my Higher Secondary Certificate (HSC) in Science (Mathematics) from Govt Singhvi Kesari Sr Sec School, Takhatgarh. This period helped me strengthen my understanding of core subjects like Mathematics, Physics, and Chemistry, which built the foundation for my career in computer science.",
    degree: "Higher Secondary Certificate (HSC), Science (Mathematics)"
  },
  {
    id: 2,
    img: rgavLogo,
    school: "Rai Gandhi Adarsh V M Sec School, Takhatgarh",
    date: "Mar 2017 – Mar 2018",
    grade: "67.83%",
    desc: "I completed my Secondary School Certificate (SSC) from Rai Gandhi Adarsh V M Sec School, Takhatgarh. My curriculum included Science, Mathematics, and Computer, which sparked my interest in technology and programming at an early stage.",
    degree: "Secondary School Certificate (SSC)"
  }
];














export const projects = [
    {
        id: 0,
        title: "StreamX (Video Calling & Chats)",
        description:
            "StreamX is a full-stack one-to-one video calling and chat app built with React.js and Stream API. It features friend requests, secure messaging, and ultra-low latency video calls using Stream's Video & Chat SDKs. The backend (Node.js, Express, MongoDB) handles authentication, JWT security, and real-time communication with a smooth, responsive UI."
        ,
        image: streamxLogo,
        tags: [
            "React JS",
            "Stream Video SDK",
            "Stream Chat",
            "Zustand",
            "TanStack Query",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
        ],
        github: "https://github.com/2605govind/StreamX",
        webapp: "https://streamx-xnnv.onrender.com/"
    },
    {
        id: 1,
        title: "Writecode (Coding Platform)",
        description:
            "Writecode is a full-stack coding platform inspired by LeetCode, featuring Google and GitHub authentication, email verification, password reset, and a microservices architecture. Users can solve coding problems with an integrated Monaco code editor, submit solutions, and filter problems by tags, difficulty, and company. The platform supports one backend service for authentication and another for problem management, ensuring scalability and smooth performance.",
        image: writecodeLogo,
        tags: [
            "React JS",
            "Node.js",
            "Express",
            "MongoDB",
            "Microservices",
            "Monaco Editor",
            "Tailwind CSS",
            "JWT",
            "Google Auth",
            "GitHub Auth",
            "Redis"
        ],
        github: "https://github.com/2605govind/WriteCode2",
        webapp: "https://writecode2.onrender.com/"
    },
    {
        id: 2,
        title: "Tic Tac Toe (Online & Offline)",
        description:
            "Tic Tac Toe is a modern React-based game with both offline and online modes. In offline mode, users can play against a computer bot with easy, medium, and hard difficulty levels. In online mode, a unique game link is generated that another player can join to compete in real-time via Socket.io. The game ensures there is always a winner by implementing a unique rule—when a player places a fourth mark in a row, the earliest mark is removed, preventing draws and keeping matches exciting.",
        image: tictactoeLogo,
        tags: [
            "React JS",
            "Tailwind CSS",
            "Zustand",
            "Socket.io",
            "Node.js",
            "Express",
            "Real-time Multiplayer"
        ],
        github: "https://github.com/2605govind/XO-Online-Game-2",
        webapp: "https://xo-online-game-2.onrender.com/"
    },
    {
        id: 3,
        title: "Image Background Remover",
        description:
            "An efficient background removal app built with JavaScript and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
        image: removebgLogo,
        tags: ["API", "HTML", "CSS", "Javascript"],
        github: "https://github.com/2605govind/Image-Background-Remover",
        webapp: "https://image-background-remover-sage.vercel.app/",
    },

    {
        id: 4,
        title: "Daily Writing Goal Tracker",
        description:
            "Daily Writing Goal Tracker is a productivity web app where users can add goals for specific dates, set deadlines, assign priority levels, and edit or delete them anytime. Completed goals can be marked and moved to a completion list. The app also features a mind-mapping tool built with HTML Canvas and JavaScript, allowing users to create colorful circles and connect them visually for better idea organization. Built using HTML, CSS, and JavaScript for a clean and intuitive experience.",
        image: dailyWritingGoalLogo,
        tags: ["HTML", "CSS", "JavaScript", "Canvas", "Productivity Tool"],
        github: "https://github.com/2605govind/Daily-Writing-Goal-Tracker",
        webapp: "https://daily-writing-goal-tracker-one.vercel.app/"
    },

    {
        id: 5,
        title: "Number-Game",
        description:
            "Number-Game is a fun and interactive math challenge built using HTML, CSS, and JavaScript. Users can set a number range (From __ to __) and choose an operation—addition, subtraction, multiplication, or division. Numbers fall from top to bottom with both correct and incorrect results. Selecting the correct answers increases the score, while the game speed can be adjusted for more difficulty, making it both entertaining and educational.",
        image: numberGameLogo,
        tags: ["HTML", "CSS", "JavaScript", "Game"],
        github: "https://github.com/2605govind/Number-Game",
        webapp: "https://number-game-sandy.vercel.app/"
    },

    {
        id: 6,
        title: "CodeQuiz",
        description:
            "CodeQuiz is a JavaScript-based quiz app featuring 100 questions to test your JavaScript knowledge. Every time the page is refreshed, questions appear in a random order, ensuring a unique experience each time. After selecting answers and submitting, the app instantly shows your score, making it a fun and effective way to practice and improve your skills.",
        image: codeQuizLogo,
        tags: ["HTML", "CSS", "JavaScript", "Quiz App"],
        github: "https://github.com/2605govind/CodeQuiz",
        webapp: "https://code-quiz-js.vercel.app/"
    },

    {
        id: 7,
        title: "Password Generator",
        description:
            "A React-based password generator app that allows users to customize their passwords by selecting numbers, characters, and adjusting the length range. With a single click, it generates a strong and random password based on the chosen settings, making it simple and secure to create unique passwords instantly.",
        image: passwordGeneratorLogo,
        tags: ["React", "JavaScript", "CSS", "Password Generator"],
        github: "https://github.com/2605govind/Password-Generator",
        webapp: "https://password-generator-blond-beta.vercel.app/"
    },

    {
        id: 8,
        title: "Guess The Number",
        description:
            "A fun number guessing game built with HTML, CSS, and JavaScript. Players try to guess a random number between 1 and 1000 within 10 attempts. The game displays previous guesses and remaining attempts, providing instant feedback after each guess for an engaging experience.",
        image: guessTheNumberLogo,
        tags: ["HTML", "CSS", "JavaScript", "Game"],
        github: "https://github.com/2605govind/guess_the_number",
        webapp: "https://guess-the-number-tan-two.vercel.app/"
    }
];  