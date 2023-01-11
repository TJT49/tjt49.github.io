import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import bg from "./public/background-image.jpg";
import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useState, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  const getYear = new Date().getFullYear();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > window.innerHeight - 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleBackClick(ref: any) {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Head>
        {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
        <title>Personal Website</title>
        <meta name="description" content="Personal Website Created By" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <img src = "/background-image.jpg" alt = "background-image" className = {styles.backgroundImage} /> */}
        <link
          href="https://fonts.cdnfonts.com/css/proxima-nova-2"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      {/* @ts-ignore */}
      <main className={styles.main} ref={homeRef}>
        <div className="bg-black">
          <nav className={scrolled ? styles.scrolled : styles.navbar}>
            <ul>
              <li>
                <a onClick={() => handleBackClick(homeRef)}>Home</a>
              </li>
              <li>
                <a onClick={() => handleBackClick(aboutRef)}>About</a>
              </li>
              <li>
                <a onClick={() => handleBackClick(portfolioRef)}>Portfolio</a>
              </li>
              <li>
                <a onClick={() => handleBackClick(contactRef)}>Contact Me</a>
              </li>
            </ul>
          </nav>
          <div id={styles.headerDiv}>
            <section className = "bg-cover bg-center h-screen w-full relative text-center text- bg-[url('/background-image.jpg')] bg-white uppercase">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white uppercase">
                <h1 className = "font-bold text-50px tracking-3px mt-20px">
                  Tinu <div className="inline-block text-redColor">Thomas</div>
                </h1>
                <h3 className = "text-20px tracking-1px mt-10px font-bold" >Web Developer</h3>
                <h3 className = "text-20px tracking-1px mt-10px font-bold">Student & Siena College</h3>
              </div>
            </section>
          </div>
        </div>
        {/* about section */}
        {/* @ts-ignore */}
        <section className = "w-full p-aboutPadding bg-gradientImage  " ref={aboutRef}>
          <div className= "w-1130px max-w-95 m-auto flex items-center justify-between">
            <img src="/about-photo.jpg" alt="About Photo" className = "h-auto w-350px rounded-50" />
            <div className="w-550px">
              <h2 className = "font-bold text-white text-75px mb-20px" >
                About <div className= "inline-block text-redColor">Me</div>
              </h2>
              <p className = "text-white text-20px mb-45px ">
                Aspiring Computer Science student at Siena College, with minor
                in Data Science. I am interested in front-end web development as
                well as database management and am seeking opportunities related
                to these. Having worked in a fast-paced environment in the past,
                I am able to adapt to changes quickly while also maintaining
                both organizational and leadership skills. I&apos;ve been using these
                skills at New York State&apos;s Office of Information Technology
                Services. I&apos;ve been working as an intern within the Department
                of Transportation sector. I&apos;m looking to showcase the skills
                I&apos;ve learned while working as an intern and expanding these
                skills.
              </p>
            </div>
          </div>
        </section>
        {/* portfolio section */}
        {/* @ts-ignore */}
        <section id={styles.portfolioSection} ref={portfolioRef}>
          <h1 className={styles.portfolioHeading}>Portfolio</h1>
          <div className={styles.gallery}>
            <img src="/portfolio1.jpg" alt="Portfolio 1" />
          </div>
        </section>
        {/* contact section */}
        {/* @ts-ignore */}
        <section id={styles.contact} ref={contactRef}>
          <h1 className={styles.contactHeading}>
            Contact <div className={styles.last}>Me</div>
          </h1>
          <form action="/index.tsx" method="POST" className={styles.form}>
            <input
              type="text"
              name="name"
              className={styles.formBox}
              placeholder="Name"
            ></input>
            <input
              type="email"
              name="email"
              className={styles.formBox}
              placeholder="Email"
            ></input>
            <input
              type="text"
              name="subject"
              className={styles.formBox}
              placeholder="Subject"
            ></input>
            <textarea
              name="message"
              id={styles.messageBox}
              placeholder="Message"
            ></textarea>
            <input type="submit" value="Send" id={styles.sendButton}></input>
          </form>
        </section>
        {/* footer section */}
        <footer className={styles.footer}>
          <div className={styles.icons}>
            <a href="https://github.com/tjt49">
              <img src="./github.png" alt="Github" />
            </a>
            <a href="https://www.instagram.com/tthomas49/">
              <img src="./instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/tinu-thomas/">
              <img src="./linkedin.png" alt="LinkedIn" />
            </a>
          </div>
          <p>Copyright &copy;{getYear} Tinu J Thomas</p>
        </footer>
      </main>
    </>
  );
}