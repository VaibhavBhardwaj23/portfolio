import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
function App() {
  const main = useRef();
  const app = useRef();
  useEffect(() => {
    var loadTimeline = gsap.timeline();
    loadTimeline
      .from(main.current, {
        scale: 0.7,
      })
      .to(app.current, {
        overflow: "hidden",
        height: "100vh",
      })
      .to(main.current, {
        duration: 2,
        scale: 0.9,
      })
      .to(main.current, {
        scale: 1,
        rotate: -360,
      })
      .to(app.current, {
        overflow: "scroll-Y",
        height: "100%",
      });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div ref={app} className="App">
              <main ref={main} className="main">
                <div className="heading">
                  <p className="line_1">The Portfolio</p>
                  <p>featuring</p>
                </div>

                <HomePage />
              </main>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
