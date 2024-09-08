import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Stuff from "./components/Stuff";
import TeamMembers from "./components/TeamMembers";
import Tech from "./components/Tech";
import Blog from "./components/Blog";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="login"
          element={
            <>
              <Login/> <Subscribe /> <Footer />
            </>
          }
        />
        <Route
          path="getstarted"
          element={
            <>
              <Register />
              <Subscribe />
              <Footer />
            </>
          }
        />
        <Route
          path="projects"
          element={
            <>
              <Projects /> <Navbar /> <Footer />
            </>
          }
        />
        <Route
          path="features"
          element={
            <>
              <Features /> <Subscribe />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              {" "}
              <Landing />
              <Features />
              <Projects />
              <Stuff />
              <TeamMembers />
              <Tech />
              <Blog />
              <Subscribe />
              <Footer />{" "}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
