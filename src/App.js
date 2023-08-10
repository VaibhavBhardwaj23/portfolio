import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
function App() {
  const main = useRef();
  useEffect(() => {
    gsap.to(main.current, {
      duration: 2,
      rotation: -1080, // Rotate 360 degrees
      scale: 1,
      margin: 0,
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
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
