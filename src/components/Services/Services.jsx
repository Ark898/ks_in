import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our</span>
        <span>Innovation</span>
        <spane>
        Able glasses aims to provide smart aid glasses
        <br/> for Deaf, Mute and Blind.
          <br />
          The Able glasses uses patented
          <br/> bone conduction to enable Deaf to Listen,
          <br/>
          interpret signs & acts as voice assist tool for the mute,
          <br/>
          the sensory audio-based information
          <br/> enables the blind to visualize.
          <br/>
          The open ear design makes able glasses
          <br/> a complete smart glasses device for everyone
        </spane>
        <a href download>
          <button className="button s-button">Brochure</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "24rem" }}
          transition={transition}
        >
          <Card
            heading={"Glasses for Deaf & Hard of hearing"}
            detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
        >
          <Card
          
            heading={"Glasses for Blind"}
            detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
        >
          <Card
            heading={"Glasses for Mute"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
       
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
