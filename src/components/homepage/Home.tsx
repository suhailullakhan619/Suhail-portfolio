import { useEffect } from "react";
import Particles from "../animation/Particles";
import BlurText from "../animation/BlurText";
import { RainbowButton } from "../ui/rainbow-button";
import heroSectionimg from "../../assets/heroSectionimg.png";
import "./home1.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
      easing: "ease-in-out", // animation easing
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <section id="Home">
        <div
          style={{
            width: "100%",
            height: "100dvh",
            position: "relative",
            background: "black",
            zIndex: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: -10,
              height: "100%",
            }}
          >
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={600}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <div className="heroSectionimg">
            <div
              style={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                gap: 30,
              }}
            >
              <BlurText
                text="Suhail Ulla Khan"
                delay={150}
                animateBy="words"
                direction="top"
                className=" Name "
              />
              <BlurText
                text="I’m a frontend developer focused on building scalable, high-performance, and user-centric web applications. I specialize in creating responsive, visually engaging interfaces with strong attention to usability and performance. I have hands-on experience integrating APIs, managing application state, and delivering seamless cross-device user experiences using modern frontend technologies."
                delay={150}
                animateBy="words"
                direction="top"
                className="descreption"
              />

              <a
                href="https://drive.google.com/file/d/1dkoWmpehZFTObboqLXfnfHu57dpoWLDw/view?usp=sharing"
                target="_blank"
                rel="Suhail Resume"
              >
                <RainbowButton className="resumebtn">Resume</RainbowButton>
              </a>
            </div>
            <img
              data-aos="fade-down"
              className="heroSectionimage"
              src={heroSectionimg}
              alt="heroImg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home1;
