import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import profileImg from "../assets/bg_photo.jpg"; // Make sure the image is in the correct path
import resume from "../assets/Resume.pdf";

const Home = () => {
  return (
    <section id="home" className="home">
      {/* Left Side: Text Content */}
      <motion.div
        className="content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span>Shahitha Banu</span></h1>
        <p>Frontend Developer | React Enthusiast</p>
        <a href={resume} download>
          <button className="btn">Download Resume</button>
        </a>
      </motion.div>

      {/* Right Side: Profile Image */}
      <motion.div
        className="image-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImg} alt="Shahitha Banu" className="profile-img" />
      </motion.div>
    </section>
  );
};

export default Home;
