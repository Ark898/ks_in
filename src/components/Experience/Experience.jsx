import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>540+</div>
        <span  style={{color: darkMode?'white':''}}></span>
        <span>Happy Customers</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}></span>
        <span>Verified Products</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>4.3</div>
        <span  style={{color: darkMode?'white':''}}></span>
        <span>Google Rating</span>
      </div>
    </div>
  );
};

export default Experience;
