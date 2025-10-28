import "./contactMe.css";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { CircleUserRound } from "lucide-react";
const ContactMe = () => {
  return (
    <section>
      <div className="contactMaindiv">
        <div
          data-aos="fade-down"
          className="text-[28px] font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl "
        >
          Connect with me
        </div>

        <div className="connectContentDiv">
          <div className="btndiv">
            <a
              href="mailto:suhailullakhan619@gmail.com"
              target="blank"
              className="link"
            >
              <button
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="connectbtn"
              >
                <span className="logo">
                  <Mail size={30} />
                </span>
                Email
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/suhailullakhan"
              target="blank"
              className="link"
            >
              <button
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="connectbtn"
              >
                <span className="logo">
                  <Linkedin size={30} />
                </span>
                LinkedIn
              </button>
            </a>
          </div>

          <div className="btndiv">
            <a
              href="https://github.com/suhailullakhan619"
              target="blank"
              className="link"
            >
              <button
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="connectbtn"
              >
                <span className="logo">
                  {" "}
                  <Github size={30} />
                </span>
                GitHub
              </button>
            </a>
            <a
              href="https://wa.me/917204338475"
              target="blank"
              className="link"
            >
              <button
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="connectbtn"
              >
                <span className="logo">
                  <CircleUserRound size={30} />
                </span>
                WhatsApp
              </button>
            </a>
          </div>
        </div>
        <hr style={{ width: "100%" }} />
      </div>
    </section>
  );
};

export default ContactMe;
