import "./projects.css";
const Projects = () => {
  return (
    <section id="Projects">
      <div className="ProjectsMaindiv">
        <div
          data-aos="fade-down"
          className="text-[28px] font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl "
        >
          Projects
        </div>

        <div className="projectsdiv">
          <div data-aos="zoom-in" className="aboutProjects">
            <div className="ProjectsDes">
              <div className="flex flex-col gap-[15px]">
                <p className="text-[17px] font-extrabold">
                  Internship Project{" "}
                </p>
                <div className="contentdiv">
                  <div>🔗</div>
                  <p>
                    <a
                      href="https://github.com/suhailullakhan619/Sports-Shop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[17px] font-semibold border-b-[2px] border-[#011D56] py-[12px] cursor-pointer">
                        Sports Shop App -
                      </span>
                    </a>{" "}
                    Internship project integrating backend APIs with React
                    frontend for product and order management.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <p className="text-[17px] font-extrabold">Personal Project </p>
                
                {/* NEW PROJECTS ADDED BELOW */}

                <div className="contentdiv">
                  <div>🔗</div>
                  <p>
                    <a
                      href="https://suhail-asset-management-application.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[17px] font-semibold border-b-[2px] border-[#011D56] py-[12px] cursor-pointer">
                        Asset-BMS -
                      </span>
                    </a>{" "}
                    Enterprise asset management dashboard with real-time tracking, RBAC, and workflow automation with optimized data handling (Vue.js, GraphQL).
                  </p>
                </div>

                <div className="contentdiv">
                  <div>🔗</div>
                  <p>
                    <a
                      href="https://suhail-chatapp-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[17px] font-semibold border-b-[2px] border-[#011D56] py-[12px] cursor-pointer">
                        Chat Application -
                      </span>
                    </a>{" "}
                    Real-time chat interface with dynamic UI updates, persistent state management, and efficient rendering (Vue.js, Vuetify, GraphQL).
                  </p>
                </div>
<div className="contentdiv">
                  <div>🔗</div>
                  <p>
                    <a
                      href="https://e-com-website-frontend.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[17px] font-semibold border-b-[2px] border-[#011D56] py-[12px] cursor-pointer">
                        E-Commerce Website -
                      </span>
                    </a>{" "}
                    Developed a feature-rich React-based e-commerce platform
                    with pagination and API integration for optimized
                    performance and scalability
                  </p>
                </div>
                
                <div className="contentdiv">
                  <div>🔗</div>
                  <p>
                    <a
                      href="https://suhailchatbox.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[17px] font-semibold border-b-[2px] border-[#011D56] py-[12px] cursor-pointer">
                        Chatbot App -
                      </span>
                    </a>{" "}
                    React-based conversational UI with local storage message
                    persistence.
                  </p>
                </div>

                <div className="contentdiv">
                  <div>🔗</div>
                  <p>
                    <a
                      href="http://suhailvisdumsite.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[17px] font-semibold border-b-[2px] border-[#011D56] py-[12px] cursor-pointer">
                        Visdum Site -
                      </span>
                    </a>{" "}
                    Static React landing page showcasing responsive design
                    techniques.
                  </p>
                </div>

                <div className="contentdiv">
                  <div>🔗</div>
                  <p>
                    <a
                      href=" http://suhailpsswebsite.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[17px] font-semibold border-b-[2px] border-[#011D56] py-[12px] cursor-pointer">
                        PSS-Site -
                      </span>
                    </a>{" "}
                    Educational web page project highlighting structured layouts
                    and animations.
                  </p>
                </div>

                <div className="contentdiv">
                  <div>🔗</div>
                  <p>
                    <a
                      href="https://suhailullakhan619.github.io/Pw-Website/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[17px] font-semibold border-b-[2px] border-[#011D56] py-[12px] cursor-pointer">
                        PW Website -
                      </span>
                    </a>{" "}
                    Fully crafted using Tailwind CSS, showcasing responsive
                    design, clean UI, and modern visual consistency across all
                    devices.
                  </p>
                </div>


               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
