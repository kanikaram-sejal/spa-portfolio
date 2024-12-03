'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import HomePg from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");
  useEffect(() => {
    const handleHashChange = () => {
    const page = window.location.hash.replace("#", "") || "home";
    setCurrentPage(page);};
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <HomePg />;
    }
  };
  return (
    <div className={styles.page}>
      <header>
        <nav className={styles.navbar}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}
