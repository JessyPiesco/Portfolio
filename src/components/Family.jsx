import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import sophia from "./images/sophiaFamily.png";
import justin from "./images/justinFamily.png";
import blurb from "./images/blub.png";

import familyPhoto from "./images/familyPhoto.png";

const Family = () => {
  const [expandSophia, setExpandSophia] = useState(false);
  const [expandJustin, setExpandJustin] = useState(false);

  const toggleSophia = () => {
    setExpandSophia(!expandSophia);
  };

  const toggleJustin = () => {
    setExpandJustin(!expandJustin);
  };

  const renderSophiaParagraph = () => {
    const text =
      "Meet Sophia, my energetic and bright four-year-old daughter. She's become quite the board game enthusiast, loving tabletop games like Cooties. Sophia's counting, letters, and colors skills have flourished, impressing us with her ability to count up to 30, recognize all of her letters and even write some. She also can identify various shades and hues. She's a helpful little superstar, always eager to lend a hand around the house. Cooking together has become a special bonding activity, and her passion for it continues to grow. Sophia's love for animals extends to dogs, cats, and even fire alarms, which she finds fascinating. But nothing brings her more joy than swimming - she's a true water lover. Watching her grow and develop is an absolute joy for me as a parent.";

    if (expandSophia) {
      return (
        <div >
          <p >{text}
          <span onClick={toggleSophia} className="read-less"  >
            (read less)
          </span></p>
        </div>
      );
    } else {
      const truncatedText = text.slice(0, 204); // Truncate at 405 characters
      return (
        <div>
          <p>{truncatedText}...
          <span onClick={toggleSophia} className="read-more" style={{cursor:"pointer"}}>
            (read more)
          </span></p>
        </div>
      );
    }
  };

  const renderJustinParagraph = () => {
    const text =
      "My husband Justin and I have been happily married for 5 years now. He's a total geek just like me, with a degree in graphic design and a passion for helping me with my coding projects. Together, we love to explore new places and experience different cultures. We make it a priority to travel at least once a year, preferably twice, and our favorite destination is Mexico. We love snorkeling and soaking up the sun on the beautiful beaches there. When we're not traveling, we like to host game nights with our friends and indulge in our love for all things nerdy.";

    if (expandJustin) {
      return (
        <div>
          <p>{text}
          <span onClick={toggleJustin} className="read-less" >
            (read less)
          </span></p>
        </div>
      );
    } else {
      const truncatedText = text.slice(0, 205); // Truncate at 405 characters
      return (
        <div>
          <p>{truncatedText}...
          <span onClick={toggleJustin} className="read-more">
            (read more)
          </span></p>
        </div>
      );
    }
  };

  return (
    <div id="family" className="family">
      <div className="pb-5 p-0">
      <div className="text-center pt-0">
  <h1>Our Family Story</h1>
  <div className="TopImg d-flex flex-column align-items-center">
    <img
      src={familyPhoto}
      alt="Jessy's family'"
      className="img-fluid mx-auto custom-shadow"
      style={{ height: "400px", minWidth: "300px" }}
    />
    <img
      src={blurb}
      alt="Jessy's blurb'"
      className="Fblurb img-fluid mx-auto custom-shadow-blurb"
      style={{ height: "400px", marginTop: "30px" }}
    />
  </div>
</div>

        <div className="row" id="1stPics">
          <div className="col-12 col-md-6">
            <img
              src={sophia}
              alt="Jessy's daughter'"
              className="img-fluid"
              style={{
                height: "50%",
                display: "block",
                margin: "0 auto",
                padding: "10px",
                paddingTop:"60px",


              }}
            />
            {renderSophiaParagraph()}
          </div>
          <div className="col-12 col-md-5">
            <img
              src={justin}
              alt="Jessy's husband'"
              className="img-fluid"
              style={{
                height: "50%",
                display: "block",
                margin: "0 auto",
                padding: "10px",
                paddingTop:"60px"
              }}
            />
            {renderJustinParagraph()}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
