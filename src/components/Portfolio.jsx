import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import gryffinP from "./images/gryffin_puffs.png";
import space from "./images/solarsytem.png";
import snake from "./images/snake_game.png";
import qrcode from "./images/qrcode.png";
import bot from "./images/Screen_Shot.png";


const Projects = () => {
  const img = new Image();
  return (
    <div id="projects" className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-12 d-flex flex-column ">
          <h2 className="pb-4 border-bottom text-center">
            Here is a list of some of my projects
          </h2>

          <div className="project-container">
            <h3 className="Ptitles">Works in progress:</h3>
            <h5 className="border-bottom col-4 pt-3">C.O.R.K.S</h5>
            <p>
              Corks(Community Of Reviewers & Knowledgeable Sippers) is a dynamic full-stack web application designed to enhance
              the wine drinking experience. Through its interactive platform,
              users can effortlessly rate, save, and favorite their preferred
              wines. Say goodbye to guessing games when trying out new wines as
              Corks provides a comprehensive and reliable rating system based
              on real user experiences. The app also lets you follow your
              friends and family to discover their favorite wines, as well as
              access the average price of each wine.
            </p>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                (window.location.href = "https://github.com/The-winos")
              }
            >
              <p className="proNames">Corks Repo</p>
            </Button>
          </div>

          <div className="project-container pt-5 pb-5 ">
            <h3 className="Ptitles">Fully deployed projects:</h3>
            <h5 className="col-4 border-bottom pt-4">Quack Bot</h5>
            <a href="/public_pics/Screen_Shot.png" target="_blank">
  <img
    src={bot}
    alt="bot screen shot"
    className="projectPics ml-3 mr-0 align-self-end"
    title="Click to enlarge"
    style={{height:"100px"}}
  />
</a>

            <p>
              We have developed a Discord bot designed to assist
              junior developers in honing their skills. By entering the "!quiz"
              command, users can access a variety of programming languages and test their knowledge. They can choose to answer general quiz questions or focus on interview questions to prepare for job interviews.
              Directions for using the bot are in the README.
            </p>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                (window.location.href =
                  "https://github.com/Quackathon-Quiz-Bot")
              }
            >
              <p className="proNames">Quack-Bot Repo</p>
            </Button>
            <h5 className="border-bottom col-4 pt-3">Solar System*</h5>
            <a href="/public_pics/solarsytem.png" target="_blank">
            <img
              src={space}
              alt="space"
              className="projectPics ml-3 mr-0 align-self-end"
              title="Click to enlarge"
              style={{height:"100px"}}
            />
            </a>
            <div id="solar" className="d-flex align-items-center">
              <p>
                The Solar System project was created during a Quackathon
                challenge, with the goal of providing accurate and engaging
                information about our solar system. The site features a fully
                functional backend that stores detailed data about each planet,
                including information about their moons. While I played a key
                role in developing the backend, I also contributed to the
                frontend by helping to create a fun and challenging quiz for
                users.
              </p>
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                (window.location.href = "https://planetquack.onrender.com/")
              }
            >
              <p className="proNames">Solar System</p>
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                (window.location.href = "https://github.com/TeamPlanetQuack")
              }
            >
              <p className="proNames">Solar System's Repo</p>
            </Button>

            <h5 className="border-bottom col-4 pt-3">Accio Books*</h5>
            <a href="/public_pics/gryffin_puffs.png" target="_blank">
            <img
              src={gryffinP}
              alt="Book Website"
              className="projectPics ml-3 mr-0 align-self-end"
              title="Click to enlarge"
              style={{height:"100px"}}
            /></a>
            <div id="puffs" className="d-flex align-items-center">
              <p>
                Accio Books is a comprehensive full-stack application that
                simulates an e-commerce platform exclusively for fantasy books.
                The user-friendly site empowers book lovers to browse, select,
                edit and purchase books with ease. As an administrator, users
                have the authority to manage books and users, making the site
                both robust and secure. This capstone project allowed me to work
                extensively on both the front and back end. I designed and
                implemented the database structure and was primarily responsible
                for the cart and product functionalities. Additionally, I
                collaborated with my peers on developing the profile section
                that includes past purchase history, as well as the login and
                signup feature.
              </p>
            </div>

            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                (window.location.href = "https://acciobooks.onrender.com/")
              }
            >
              <p className="proNames">Accio Books*</p>
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                (window.location.href =
                  "https://github.com/orgs/gryffinPuffs/repositories")
              }
            >
              <p className="proNames">Accio Books Repo</p>
            </Button>

            <h5 className="border-bottom col-4 pt-3">Snake</h5>
            <a href="/public_pics/snake_game.png" target="_blank">
            <img
              src={snake}
              alt="snake_game"
              className="projectPics ml-3 mr-0 align-self-end"
              title="Click to enlarge"
              style={{height:"100px"}}
            /></a>
            <div id="snake" className="d-flex align-items-center">
              <p>
                One of my first projects Snake is a fun and interactive digital
                game that challenges players to grow the snake by consuming
                apples and other special fruits that speed up or slow down the
                game. With the scorekeeping feature, players can easily track
                their progress and compete with others. This project was
                developed using a combination of JavaScript, Github, CSS, and
                HTML, allowing for a seamless and engaging user experience.
              </p>
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                (window.location.href =
                  "https://animated-gaufre-b3edcf.netlify.app/")
              }
            >
              <p className="proNames">Snake Game</p>
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                (window.location.href = "https://github.com/JessyPiesco/arcade")
              }
            >
              <p className="proNames">Snake Repo</p>
            </Button>
          </div>
          <h6 style={{ fontSize: '0.8rem', color: 'gray' }}>
  *These items were originally connected to a database, but due to financial constraints, they are currently not deployed. To experience the full functionality of the site, please refer to the instructions provided in the README file to deploy it locally.
</h6>


          <h3 className="Ptitles text-center border-bottom pb-3">Check out my other projects</h3>
<div className="pb-5">



          <div id="github" className="d-flex align-items-center">
            <p>
              My Github portfolio showcases a diverse range of projects that I
              have worked on, including both personal projects and group
              projects. Among my personal projects, I have developed a mock
              Tumblr website named Juicebox. Additionally, I have built a
              fitness tracker application that helps users achieve their fitness
              goals. Furthermore, my Github also contains a wide array of group
              projects that I have collaborated on, showcasing my ability to
              work efficiently and effectively in a team setting. You can
              explore the various contributions that I have made to these group
              projects, ranging from front-end design and development to
              back-end programming and database management. By browsing through
              my Github, you will gain a comprehensive understanding of my
              skills and experience as a software developer.
            </p>
            <Button
  variant="outline-secondary"
  onClick={() => window.location.href = "https://github.com/JessyPiesco"}
>
  <p className="proNames pl-2">
    <img
      src={qrcode}
      alt="github QR code"
      className="projectPics ml-4 mr-4 align-self-end rounded-0"
      style={{height:"200px"}}
    />
  </p>
</Button>

            </div>


          </div>

        </div>

      </div>
    </div>
  );
};

export default Projects;
