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
      once: false, // whether animation should happen only once
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
            height: "100vh",
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
                text="I am a passionate frontend developer with expertise in building responsive, user-friendly, and visually appealing web applications. I specialize in React, JavaScript, HTML, CSS, and Tailwind CSS, and have hands-on experience integrating APIs and managing state to deliver dynamic, high-performance interfaces."
                delay={150}
                animateBy="words"
                direction="top"
                className="descreption"
              />

              <a
                href="https://tinyurl.com/SuhailResumeFrontend"
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
