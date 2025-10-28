import './Experience.css'
import prinstonlogo from './img/image.png'
const Experience = () => {
  return (
    <section id='Experience'>
    <div className='ExperienceMaindiv'>

          <div  data-aos="fade-down" className='text-[28px] font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl '>Experience
          </div>

          <div className='expdiv'>
            <div   data-aos="fade-right" className='logodiv'>
             <img className='prinstonlogo' src={prinstonlogo} alt="logo" />
            </div>
                <div data-aos="zoom-in" className='aboutExp'>
                      <p  className='text-[20px] font-extrabold max-w-[260px] sm:max-w-full'>Internship</p>
                          <p className='text-[17px] font-semibold max-w-[260px] sm:max-w-full'>Full Stack Web Development </p>
                          <p className='text-[17px] '>- Prinston Smart Engineers</p>
                          <p className='text-[17px] font-semibold'>02/2025 - 06/2025</p>


                      <div className='internshipDes'>
                       <div className='contentdiv'>
                          <div>🚀</div>
                          <p><span className='text-[17px] font-semibold'>Developed and deployed</span> responsive web applications using <span className='text-[17px] font-semibold' > HTML, CSS, JavaScript, React, and Tailwind CSS.</span>
                      </p>
                        </div>

                         <div className='contentdiv'>
                          <div>🎨</div>
                          <p> Specialized in <span className='text-[17px] font-semibold'>frontend development,</span> building <span className='text-[17px] font-semibold'>interactive and user-focused interfaces</span>that enhance usability and design consistency.</p>
                        </div>
                     
                      <div className='contentdiv'>
                          <div>🔗</div>
                           <p><span className='text-[17px] font-semibold'>Integrated RESTful APIs</span> from backend services to display dynamic data and improve functionality across projects.</p>
                        </div>

                    <div className='contentdiv'>
                          <div>🤝</div>
                          <p> <span className='text-[17px] font-semibold'>Collaborated with backend developers</span> to connect frontend components with Node.js and MongoDB-based APIs.</p>
                        </div>

                        <div className='contentdiv'>
                          <div>🧠</div>
                          <p> Strengthened hands-on skills through an <span className='text-[17px] font-semibold'>internship</span> and <span className='text-[17px] font-semibold'>personal projects,</span> following real-world development workflows and Git version control.</p>
                        </div>

                      </div> 

                      <div className='cretificatediv'>
                        <a href="https://white-coretta-23.tiiny.site" target='_blank'>
                        <button className='certificateBtn'>Veiw Certificate</button>
                        </a>
                      </div>
                </div>
          </div>

    </div>
    </section>
  )
}

export default Experience