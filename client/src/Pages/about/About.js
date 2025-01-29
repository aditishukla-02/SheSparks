import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";
import "./about.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="mainContainer">
        <h1 className="mb">About SheSparks</h1>
        <div className="logoContainer mb"></div>
        <p className="mb">
        Welcome to our platform, a dedicated space for women's empowerment, safety, and awareness. Our mission is to create a world where every woman feels secure, informed, and empowered to take control of her life.

Developed by Aditi Shukla, this website provides real-time incident tracking, state-wise analysis, and insightful blog posts to raise awareness and inspire change. We also offer a curated list of NGOs actively working towards women's rights, safety, and development, making it easier for individuals to seek help and contribute to the cause.

By leveraging technology and community-driven data, we aim to bridge the gap between information, action, and support. Together, we can build a safer and more empowered society for women.

Join us in making a difference! 💪✨
        </p>
      </div>
    </div>
  );
};

export default About;
