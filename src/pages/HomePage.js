import "./HomePage.css";
import computer_guy from "../assets/computer-guy-meme.svg";
import pfp from "../assets/PhotoFunia-1690095516.jpg";
import { Link } from "react-router-dom";
import { Projects } from "../sections/Projects";
import Knowlege from "../sections/Knowlege";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Vaibhav Bhardwaj</h1>
      </div>
      <div className="hero-section">
        <div className="description">
          <h3>Front end web developer</h3>
          <div className="image">
            <img
              src={computer_guy}
              className="computer_guy"
              alt="computer guy"
            ></img>
          </div>
          <p>The picture depicts me more than my actual photo</p>
        </div>
        <div className="profile">
          <div className="profile_image">
            <img src={pfp} alt="profile_image" />
          </div>
          <p>
            <span className="h">H</span>i, I'm vaibhav bhardwaj, A Frontend Web
            Developer based in new DElhi, India
          </p>
          <div className="btn_container">
            <Link to={"/about"} className="btn abt_me" >About Me</Link>
          </div>
        </div>
      </div>
      <Projects />
      <Knowlege />
      <h3 className="foot">Let's connect and create something beautiful </h3>
      
      <Footer />
    </div>
  );
};

export default HomePage;
