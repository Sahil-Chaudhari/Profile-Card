/**import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Development",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Rest-API",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="/sahil.jpg" // ✅ Image from public/
      alt="Sahil Chaudhari"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Sahil Chaudhari</h1>
      <p>
        Full-stack web developer. When not coding, I like to play outdoor games,
        cook (and eat), or just enjoy watching web series and exploring nature.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);**/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="profile-container">
      <h1 align="center">Hi 👋, I'm Sahil Chaudhari</h1>
      <h3 align="center" font-weight=" 400" >
        I'm an IT graduate from Vishwakarma Institute of Information Technology,
        Pune. I'm a Tech Enthusiast. I love to explore and learn about new
        domains and technologies.
      </h3>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <img
          src="/sahil.jpg"
          alt="Sahil Chaudhari"
          width="200"
          style={{ borderRadius: "50%" }}
        />
      </div>

      <ul>
        <li>😊I’m currently learning <strong>Data Structures, Algorithms and Databases</strong></li>
        <li>
          👨‍💻 All of my projects are available at{" "}
          <a href="https://github.com/Sahil-Chaudhari" target="_blank" rel="noopener noreferrer">
            github.com/Sahil-Chaudhari
          </a>
        </li>
        <li>
          💬 Ask me about <strong>
            C++, Java, Python, HTML, CSS, JavaScript, MySQL, MongoDB, React.js, Express.js, Node.js, REST-API
          </strong>
        </li>
        <li>📫 Reach me at: <strong>chaudharisahil475@gmail.com</strong></li>
      </ul>

      <h3>Connect with me:</h3>
      <p>
        <a href="https://twitter.com/sahil09989938" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" height="30" width="40" />
        </a>
        <a href="https://linkedin.com/in/sahil chaudhari" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" />
        </a>
        <a href="https://github.com/Sahil-Chaudhari" target="_blank" rel="noopener noreferrer">
  <img
    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
    alt="GitHub"
    height="30"
    width="40"
    style={{ filter: "grayscale(100%) brightness(0%)" }}
  />
</a>
      </p>

      <h3>Languages and Tools:</h3>
      <div className="tools">
        {[
          "cplusplus",
          "python",
          "java",
          "html5",
          "css3",
          "javascript",
          "bootstrap",
          "mysql",
          "mongodb",
          "react",
          "express",
          "nodejs",
        ].map((tech) => (
          <img
            key={tech}
            src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${tech}/${tech}-original.svg`}
            alt={tech}
            width="40"
            height="40"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          />
        ))}
      </div>
      <h3>Work Experience:</h3>
<div className="experience">
  <div className="experience-item">
    <h4>Data Science Engineer @ Piyush IT Services (Consulting startup)</h4>
    <p><strong>Jan 2024 – May 2024 | Pune, India</strong></p>
    <ul>
      <li>Optimized NLP models to enhance data processing efficiency and scalability across multiple projects.</li>
      <li>Contributed to UBAR (GPT-2 based dialogue system) and Legal Document Summarization using BART.</li>
    </ul>
  </div>

  <div className="experience-item">
    <h4>Project Engineer @ Kirloskar Pneumatic Co. Ltd.</h4>
    <p><strong>Aug 2023 – Dec 2023 | Pune, India</strong></p>
    <ul>
      <li>Developed a web-based BOM application using React.js, Node.js, Express.js, and MySQL to automate and streamline the BOM creation process.</li>
      <li>Digitized handwritten data with Azure Form Recognizer and automated 70% of manual tasks, enabling faster, more accurate BOM generation with PDF/CSV export options.</li>
    </ul>
  </div>
</div>
<h3>Projects:</h3>
<div className="projects">
  <div className="project-item">
    <h4>
      <a
        href="https://github.com/Sahil-Chaudhari/Multiple-Disease-Prediction"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >
        Multiple Disease Prediction System
      </a>
    </h4>
    <p><strong>Oct 2024</strong></p>
    <ul>
      <li>Web application for disease prediction.</li>
      <li>
        Developed using <strong>Python</strong> and <strong>Streamlit</strong> to
        predict multiple diseases based on user inputs.
      </li>
      <li>
        Implemented machine learning algorithms to analyze input data and forecast
        potential diseases.
      </li>
    </ul>
  </div>

  <div className="project-item">
    <h4>
      <a
        href="https://github.com/Sahil-Chaudhari/Modern-Real-Estate-Marketplace"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >
        Modern Real Estate Marketplace
      </a>
    </h4>
    <p><strong>May 2024</strong></p>
    <ul>
      <li>A web application serving the real estate market.</li>
      <li>
        Enhanced a robust <strong>MERN stack</strong> application featuring
        advanced authentication and search functionality.
      </li>
      <li>
        Implemented CRUD operations, image uploads, and property listing
        management.
      </li>
    </ul>
  </div>
</div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);