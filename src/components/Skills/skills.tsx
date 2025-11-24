import './skills.css'
import htmlLogo from './img/html logo.svg'
import cssLogo from './img/css logo.svg'
import jslogo from './img/js logo.svg'
import reactLogo from './img/react logo.svg'
import typescriptLogo from './img/typescript logo.svg'
import tailwindcssLogo from './img/tailwindcss logo.svg'
import figmaLogo from './img/figma logo.svg'
import mongodbLogo from './img/mongodb logo.svg'
import postmanLogo from './img/postman logo.svg'
import githubLogo from './img/github logo.svg'
import nextjsLogo from'./img/nextjs logo.svg'
import reduxLogo from './img/redux logo.svg'
const Skills = () => {
  return (
    <section id='Skills'>
    <div className='skillsMaindiv' >
          
          <div data-aos="fade-down" className='text-[28px] font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl '>Skills
            
          </div>

          <div className='skillslogodiv'>

            <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>Html</p>
              <img className='logoimg' src={htmlLogo} alt="javascript" />
            </div>

            <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>Css</p>
              <img className='logoimg' src={cssLogo} alt="javascript" />
            </div>

            <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>JavaScript</p>
              <img className='logoimg' src={jslogo} alt="javascript" />
            </div>

             <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>React</p>
              <img className='logoimg' src={reactLogo} alt="javascript" />
            </div>

             <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>TypeScript</p>
              <img className='logoimg' src={typescriptLogo} alt="javascript" />
            </div>

            <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>TailwindCss</p>
              <img className='logoimg' src={tailwindcssLogo} alt="javascript" />
            </div>

              <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>Nextjs</p>
              <img className='logoimg' src={nextjsLogo} alt="javascript" />
            </div>

              <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>Redux</p>
              <img className='logoimg' src={reduxLogo} alt="javascript" />
            </div>
            
            <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>Figma</p>
              <img className='logoimg' src={figmaLogo} alt="javascript" />
            </div>
            
            <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>Mongo DB</p>
              <img className='logoimg' src={mongodbLogo} alt="javascript" />
            </div>

            <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>Postman</p>
              <img className='logoimg' src={postmanLogo} alt="javascript" />
            </div>

            <div data-aos="zoom-in-up" className='logodiv'>
              <p className='Logotag'>Github</p>
              <img className='logoimg' src={githubLogo} alt="javascript" />
            </div>

              
            

            
          </div>
          

    </div>
    </section>
  )
}

export default Skills