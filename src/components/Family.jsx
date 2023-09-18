import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import sophiaandI from "./images/SophiaandI.jpeg";
import justinAndMe from "./images/JustinandMe.jpeg";
import ComputerGirl from "./images/computerGirl.jpeg";



const Family = () => {
  return (
    <div id="family" className="family" >
      <div className="pb-5 p-0">
              <h1 className="d-flex justify-content-center align-items-center pt-5">Family</h1>
              <div className="row" id="1stPics">
                <div className="col-12 col-md-6">
                  <img
                    src={sophiaandI}
                    alt="Jessy with daughter"
                    className="img-fluid"
                  />
                  <p>
                    Meet Sophia, my energetic and bright four-year-old daughter.
                    She's become quite the board game enthusiast, loving
                    tabletop games like Cooties. Sophia's counting, letters, and
                    colors skills have flourished, impressing us with her
                    ability to count up to 30, recognize all of her letters and
                    even write some. She also can identify various shades and
                    hues. She's a helpful little superstar, always eager to lend
                    a hand around the house. Cooking together has become a
                    special bonding activity, and her passion for it continues
                    to grow. Sophia's love for animals extends to dogs, cats,
                    and even fire alarms, which she finds fascinating. But
                    nothing brings her more joy than swimming - she's a true
                    water lover. Watching her grow and develop is an absolute
                    joy for me as a parent.
                  </p>
                </div>
                <div className="col-12 col-md-5">
                  <img
                    src={justinAndMe}
                    alt="Jessy with husband"
                    className="img-fluid"
                  />
                  <p>
                    My husband Justin and I have been happily married for 5
                    years now. He's a total geek just like me, with a degree in
                    graphic design and a passion for helping me with my coding
                    projects. Together, we love to explore new places and
                    experience different cultures. We make it a priority to
                    travel at least once a year, preferably twice, and our
                    favorite destination is Mexico. We love snorkeling and
                    soaking up the sun on the beautiful beaches there. When
                    we're not traveling, we like to host game nights with our
                    friends and indulge in our love for all things nerdy.
                  </p>
                  <img
                    src={ComputerGirl}
                    alt="Ai girl on computer"
                    className="img-fluid"
                    style={{ height: "30%" }}
                  />
                </div>
              </div>
            </div>


 </div>)
};

export default Family;
