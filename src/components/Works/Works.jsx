import React, { useContext } from "react";
import "./Works.css";
import Google from "../../img/google.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Why
          </span>
          <span>Able Innovation Exists?</span>
          <spane>
          &#x2022;  Globally, there are over 680 million people who are deaf,
            <br/> hard of hearing, mute, or blind.
            <br />
          &#x2022;  India alone is home to more than 80 million individuals
            <br/> belonging to these diverse disability groups.
            <br />
            &#x2022; Sadly, an estimated 90% of these individuals
            <br/> lack access to education and often face poverty.
            <br />
            or these individuals, accessing essential information, education,
            <br/> and communication channels remains a significant challenge.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">INFO</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Google} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Google} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Google} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Google} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Google} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
