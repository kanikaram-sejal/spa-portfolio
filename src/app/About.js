import styles from "./About.module.css";

export default function About() {
    return (
        <div>
            <h1>About me!</h1>
            <p>Hi! My name is Sejal. I am currently a 3rd year, majoring in Computer Science 
              and minoring in Tech Mangement and Human Development. I am interested in 
              Full-Stack Developement paraticularly front-end development as well as product 
              mangement! Some of my favortie ways to spend my time are arts and crafts, 
              baking, going on walks and farmers market visits. I also enjoy speding time 
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
                <li>ECS 122A - Algorithm Design and Analysis</li>
                <li>ECS 120 - Theory of Computation</li>
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
                    <li><a target="_blank" href="https://github.com/kanikaram-sejal/weather">Weather</a></li>
                    <p>Developed a Java application that integrates the Weatherstack API to fetch and display real-time weather data for user-specified locations, utilizing Java's HTTP Client to retrieve, parse, and process JSON data efficiently.</p>
                    <li><a target="_blank" href="https://github.com/kanikaram-sejal/Tic-Tac-Toe">Tic-Tac-Toe</a></li>
                    <p>Followed a React tutorial to learn how to develope a web application.</p>
                    <li><a target="_blank" href="https://github.com/kanikaram-sejal/calendar">Calendar</a></li>
                    <p>Used Next.js styled with CSS to create a web application that displays a monthly calendar where users can add, edit and delete events, navigate to future and past months and jump to current date. </p>
                    <li><a target="_blank" href="https://github.com/kanikaram-sejal/spa-portfolio">This website!</a></li>
                    <p>Used Next.js styled with CSS to create a single page web application portfolio. </p>
                </ul>
            </div>
          </div>
        </div>
    );
}