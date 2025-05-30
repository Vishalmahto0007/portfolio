import email from "../../assets/icons/email.svg";
import github from "../../assets/icons/github.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import "./About.css";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="about">
          <h2>
            <div className="square">
              <div className="square-intern"></div>
            </div>
            About me
          </h2>
        </div>
        <div className="about-content">
          <div id="author-info">
            <h3>Vishal Mahto</h3>
            <div id="social-icons">
              <a target="_blank" href="mailto:vishalmahto0007@gmail.com">
                <img src={email} alt="Email icon." className="icon" />
              </a>
              <a target="_blank" href="https://github.com/vishalmahto0007">
                <img src={github} alt="Github icon." className="icon" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/vishalmahto0007/"
              >
                <img src={linkedIn} alt="Linkedin icon." className="icon" />
              </a>
            </div>
            {/* <a className="access-button" target="_BLANK" href="#"></a> */}
          </div>
          <div id="right-side">
            <h2>Get to know a little about me</h2>
            <p>
              Hi, my name is Vishal Mahto, I'm currently working as a
              <span className="bg-primary"> Software Engineer </span> at the
              Infozech Software Private Limited. With over 4 years of experience
              in the IT industry, I have always been fascinated by how things
              work behind the scenes on computers. This curiosity inspired me to
              dive into programming and web development, and turning that
              passion into a career has been both exciting and rewarding.
            </p>
            <p>
              Currently, I am focused on
              <span className="bg-primary"> Web Development</span> and working
              on impactful projects that solve real-world problems. Do you have
              something in mind? Feel free to contact me. :)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
