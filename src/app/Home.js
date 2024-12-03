import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className = {styles.home}>
          <h1>Hi, my name is Sejal! </h1>
          <div className={styles.info}>
            <p>I am currently a 3rd year, majoring in Computer Science 
                and minoring in Tech Mangement and Human Development. I am interested in 
                Full-Stack Developement paraticularly front-end development as well as product 
                mangement!
            </p>
            <img src="picture.png"/>
          </div>
        </div>
      );
}

