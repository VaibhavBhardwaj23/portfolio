import React from "react";
import Header from "../components/Header";
import knowledge from "../assets/roll-safe.svg";
import drake_yes from "../assets/drake-hotline-bling-yes.svg";
import drake_no from "../assets/drake-hotline-bling-no.svg";
const Knowlege = () => {
  return (
    <div>
      <Header title="What I Know" src={knowledge} />
      <div className="skills upper">
        <div className="drake">
          <img src={drake_yes} alt="drake_yes" />
        </div>

        <div className="skills_descript">
          <h3>Things I've Learnt</h3>
          <p>•HTML</p>
          <p>•Css</p>
          <p>•Javascript</p>
          <p>•react js</p>
          <p>•tailwind</p>
        </div>
      </div>
      <div className="skills lower">
        <div className="drake">
          <img src={drake_no} alt="drake_yes" />
        </div>
        <div className="skills_descript">
          <h3>Things I'm Learning</h3>
          <p>•Python</p>
          <p>•GSAP</p>
          <p>•NEXT.js</p>
          <p>•FireBase</p>
        </div>
      </div>
    </div>
  );
};

export default Knowlege;
