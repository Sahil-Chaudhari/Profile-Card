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
        Motivated Btech graduate in Information Technology from VIIT, Pune with practical experience in MERN stack development, Data Science, and Machine Learning. Looking to work in a healthy, innovative, and challenging environment that fosters continuous learning and personal as well as professional growth.
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

      <h3>CONNECT WITH ME:</h3>
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

      <h3>LANGUAGES AND TOOLS:</h3>
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
      <h3>WORK EXPERIENCE:</h3>
<div className="experience">
  <div className="experience-item">
    <h4>Web Developer Consultant @  Impact DigiTech Solutions Pvt. Ltd.</h4>
    <p><strong>May 2024 – Present | Pune, India</strong></p>
    <ul>
      <li>Developed and maintained dynamic web applications using React, Node.js, Express.js, and MongoDB.</li>
      <li>Collaborated with the team to build user-friendly features and improve performance across client projects.</li>
    </ul>
  </div>
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
<h3>PROJECTS:</h3>
<div className="projects">
  <div className="project-item">
    <h4>
      
        Multiple Disease Prediction System <a
        href="https://github.com/Sahil-Chaudhari/Multiple-Disease-Prediction"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
      
    </h4>
    <p><strong>October 2024</strong></p>
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
      
        Modern Real Estate Marketplace<a
        href="https://github.com/Sahil-Chaudhari/Modern-Real-Estate-Marketplace"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
      
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
    <div className="project-item">
    <h4>
      
        Attendance System using Facial Recognition
      <a
        href="https://github.com/Sahil-Chaudhari/Attendance-System-using-Face-Recognition-in-Python"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
    </h4>
    <p><strong>January 2024</strong></p>
    <ul>
      <li>A Full-proof system which mark our attendance using <strong>Facial-recognition, OpenCV and dlib</strong> in Python</li>
    </ul>
  </div>
    <div className="project-item">
    <h4>
      
        Digi-Diary
      <a
        href="https://github.com/Pdeo55/Digi-diary"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
    </h4>
    <p><strong>December 2023</strong></p>
    <ul>
      <li>A Full-Stack application to digitize daily Diary-Management for primary school students, facilating better communication between teachers and parents.</li>
      <li>Implemented functionalities for teachers to manage student records, assign homework with media attachments,post public notices using technologies such as <strong>React.js, Redux, Express.js, Node.js, MongoDB.</strong>
      </li>
      <li>Created a user-friendly interface allowing parents to view Homework, access notices, raise queries and set reminders for homework through Whatsapp-notifications.
      </li>
      <li>Utilized <strong>AWS S3 Bucket</strong> for file storage and <strong>AWS EC2</strong> for deployment, integrated <strong>NodeMailer and Cloudinary </strong>for Email and media-management.</li>
    </ul>
  </div>
    <div className="project-item">
    <h4>
      
        ATM Simulator
      <a
        href="https://github.com/Sahil-Chaudhari/ATM-Simmulator-System"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
    </h4>
    <p><strong>October 2023</strong></p>
    <ul>
      <li>Java based project named ATM Simulator System developed using <strong>Java(Swing), MySQL</strong> which has functionalities like Opening Banking Account, Deposit, Withdraw, Mini-Statement, Pin Change, etc.</li>
      
    </ul>
  </div>
    <div className="project-item">
    <h4>
      
        Book-it (Event Booking Services App)
      <a
        href="https://github.com/Pdeo55/BookIT-Frontend"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
    </h4>
    <p><strong>May 2023</strong></p>
    <ul>
      <li>Designed and developed a full-stack event booking platform enabling users to browse, book, and manage event tickets. Implemented real-time seat availability, secure user authentication, and an admin dashboard for event management using <strong>React.js, Node.js, Express.js, MongoDB</strong></li>
      
    </ul>
  </div>
    <div className="project-item">
    <h4>
      
        HR-Attrition Dashboard
      <a
        href="https://github.com/Sahil-Chaudhari/HR-Attrition-Dashboard"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
    </h4>
    <p><strong>May 2023</strong></p>
    <ul>
      <li>Developed an HR Attrition Analysis dashboard using <strong>Power BI</strong> to visualize workforce data and identify attrition trends.</li>
<li>Utilized Power Query to clean, transform, and prepare raw CSV data for accurate analysis.</li>
<li>Created interactive reports and visualizations for deeper insights into employee attrition factors.</li>
    </ul>
  </div>
  <h3>PUBLICATIONS:</h3>
<div className="projects">
  <div className="project-item">
    <h4>
      
        Research Paper
      
    </h4>
    
    <ul>
      <li>Published reserch paper on "Multiple Disease Prediction using Machine Learning Algorithms" at ICCUBEA 2023.
        <a
        href="https://www.linkedin.com/in/sahil-chaudhari-2168aa210/details/certifications/1712575140706/single-media-viewer?type=LINK&profileId=ACoAADWGjrIBQA71WqAnuQ9lmGtpuIjpVO8MhxI&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BlTPt1jXNT%2FGOn30e0KiRAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
      </li>
      
    </ul>
  </div>
</div>
<div className="projects">
  <div className="project-item">
    <h4>
      
        Copyrights
      
    </h4>
    
    <ul>
      <li >Copyright © titled "Book-it (Event Booking Services)" - SW168583/2023. 
        <a
        href="https://www.copyright.gov.in/CopyrightROC_Details.aspx?DiaryNo=12288/2023-CO/SW&RocNo=SW-16853/2023"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
      </li>
      
        <li>
        Copyright © titled "Digi-diary for primary school students" - L-136032/2023.
        <a
        href="https://www.copyright.gov.in/CopyrightROC_Details.aspx?DiaryNo=25569/2022-CO/L&RocNo=L-136032/2023"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      >🔗</a>
      </li>
      
      
      
    </ul>
  </div>
</div>
<div className="projects">
  <div className="project-item">
    <h4>
      
        Book-Chapter
      
    </h4>
    
    <ul>
      <li>
<strong>Chapter named: Enhanced Environmental Monitoring through Blockchain Integration: A Carbon Offset Marketplace Application</strong><br/>
Beyond Blockchain: Reviewing the Impact and Evolution of Decentralized Networks (Part 1) - Publisher: Bentham Science Publishers - April 1, 2025 
<a
        href="https://drive.google.com/file/d/14aSkOMjkk9K9H07yUXVaCOhG48Et-hdz/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "grayscale(100%) brightness(0%)" }}
      > 🔗</a>
</li>

      
      
    </ul>
  </div>
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