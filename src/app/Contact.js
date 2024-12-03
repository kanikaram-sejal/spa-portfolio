import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <div className={styles.page}>
            <h1>Contact Me</h1>
            <p>Please feel free to contact me!</p>
            <h3>Contact Details:</h3>
            <ul>
            <li><strong>Email: </strong>kanikaramsejal@gmail.com</li>
            </ul>
            <footer className={styles.icons}>
                <a href="www.linkedin.com/in/sejal-kanikaram" target="_blank"><FaLinkedin size={35}/></a>
                <a href ="https://github.com/kanikaram-sejal" target="_blank"><FaSquareGithub size={35}/></a>
            </footer>
        </div>
    );
}   