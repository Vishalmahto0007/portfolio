import linkedIn from "../../assets/icons/linkedin.svg";
import email from "../../assets/icons/email.svg";

import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <h2>
        <div className="square">
          <div className="square-intern"></div>
        </div>
        Contact
      </h2>
      <p>
        If you want to talk about a project, a job opportunity or just to chat,
        feel free to contact me. I will be happy to help you.
      </p>

      <div className="info-contact">
        <div className="type-contact">
          <img src={linkedIn} alt="linkedin icon" />
          <a target="_BLANK" href="https://www.linkedin.com/in/vishalmahto0007">
            @vishalmahto0007
          </a>
        </div>
        <div className="type-contact">
          <img src={email} alt="email icon" />
          <a target="_BLANK" href="vishalmahto0007@gmail.com">
            vishalmahto0007@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
