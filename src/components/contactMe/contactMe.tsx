import "./contactMe.css";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
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

          <button
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="connectbtn"
          >
            <span className="logo">
              {" "}
              <Linkedin size={30} />
            </span>
            linkedIn
          </button>
        </div>

        <div className="btndiv">
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
            Github
          </button>

          <button
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="connectbtn"
          >
            <span className="logo">
              <Twitter size={30} />
            </span>
            Twitter
          </button>
        </div>
      </div>
      <hr style={{width:'100%'}} />
    </div>
    </section>
  );
};

export default ContactMe;
