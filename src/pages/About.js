import React, { useEffect } from "react";
import "./About.css";
import Header from "../components/Header";
import monkey from "../assets/awkward-look-monkey--hand-drawn.svg";
import academics from "../assets/leo-laughing-hand-drawn.svg";
import leetCode from "../assets/all-the-things-meme-hand-drawn.svg";
import googling from "../assets/nervous-pepe-frog-hand-drawn.svg";
import motivation from "../assets/salt-bae-hand-drawn.svg";
import projects from "../assets/sipping-coffee-on-laptop-hand-drawn.svg";
import { Education } from "../Education";
import ProgressCard from "../components/ProgressCard";
import Footer from "../components/Footer";
import List from "../components/List";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="abt_div">
      <Header title="About Me" src={monkey} />
      <div className="detail">
        <p>
          <span className="h">H</span>i, I'm vaibhav bhardwaj, A Frontend Web
          Developer based in new DElhi, India
        </p>
      </div>
      <div className="detail">
        <p>
          <span className="h">I </span>started my journey in the field of web
          development in 2021. Since then I've made many little big projects and
          have honed my skills up to a point at which i'm comfortable and
          confident in making any design reality.
        </p>
      </div>
      <Header title="Academics" src={academics} />
      <div>
        {Education && Education.map((project) => <List project={project} />)}
        <hr />
        <ProgressCard
          title="26+ 
Questions on leetcode"
          src={leetCode}
        />
        <ProgressCard title="hours++ of googling" src={googling} />
        <ProgressCard
          title="and a pinch
of motivation"
          src={motivation}
        />
        <ProgressCard
          title="10+
Fun Projects"
          src={projects}
        />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default About;
