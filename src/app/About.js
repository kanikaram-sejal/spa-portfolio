import styles from "./About.module.css";

export default function About() {
    return (
        <div>
            <h1>About me!</h1>
            <p>Hi! My name is Sejal. I am currently a 3rd year, majoring in Computer Science 
              and minoring in Tech Mangement and Human Development. I am interested in 
              Full-Stack Developement paraticularly front-end development as well as product 
              mangement! Some of my favortie ways to spend my time are arts and crafts, 
              baking, going on walks and farmer's market visits. I also enjoy speding time 
              going to adventures with my friends.</p>
            <div>
            <h3>Education</h3>
                <h4>University of California, Davis </h4>
                <ul>
                <li>Major: Computer Science B.S.</li>
                <li>Minors: Tech Mangement and Human Developement(expected)</li>
                <li>Expected graduation: June 2026</li>
                </ul>
            </div>
          <div className={styles.info}>
            <div className={styles.skills}>
              <h3>Skills</h3>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C/C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Kotlin</li>
              </ul>
            </div>
            <div className={styles.courses}>
              <h3>Relevant Coursework</h3>
              <ul>
                <li>ECS 120 - Theory of Computation</li>
                <li>ECS 122A - Algorithm Design and Analysis</li>
                <li>ECS 132 - Probability & Statistical Modeling for Computer Science</li>
                <li>ECS 36C - Data Structures, Algorithms, & Programming</li>
                <li>ECS 36B - Software Development & Object-Oriented Programming in C++</li>
                <li>ECS 36A - Programming & Problem Solving</li>
                <li>ECS 50 - Computer Organization & Machine-Dependent Programming</li>
                <li>ECS 20 - Discrete Mathematics For Computer Science</li>
              </ul>
            </div>
            <div className={styles.projects}>
                <h3>Projects</h3>
                <ul>
                    <li>Tic-Tac-Toe</li>
                    <p></p>
                    <li>Calendar</li>
                    <p>A web application to </p>
                    <li>This website!</li>
                    <p>Used Next.js styled with CSS to create a single page web application portfolio </p>
                </ul>
            </div>
          </div>
        </div>
    );
}