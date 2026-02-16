import "./skills.css";
import htmlLogo from "./img/html logo.svg";
import cssLogo from "./img/css logo.svg";
import jslogo from "./img/js logo.svg";
import reactLogo from "./img/react logo.svg";
import typescriptLogo from "./img/typescript logo.svg";
import tailwindcssLogo from "./img/tailwindcss logo.svg";
import vueLogo from './img/vueLogo.svg';
import vuetifyLogo from './img/vuetifylogo.svg'
import figmaLogo from "./img/figma logo.svg";
import mongodbLogo from "./img/mongodb logo.svg";
import postmanLogo from "./img/postman logo.svg";
import gitLogo from './img/GitLogo.svg';
import githubLogo from "./img/github logo.svg";
import nextjsLogo from "./img/nextjs logo.svg";
import reduxLogo from "./img/redux logo.svg";
import AmplifyLogo from './img/AmplifyLogo.svg'
import restApiLogo from './img/restapiLogo.svg'
const Skills = () => {
  const skills=[
    {skillName:'Html',skillImg:htmlLogo,skillImgAlt:'htmlImg'},
    {skillName:'Css',skillImg:cssLogo,skillImgAlt:'cssImg'},
    {skillName:'JavaScript',skillImg:jslogo,skillImgAlt:'jsImg'},
    {skillName:'React',skillImg:reactLogo,skillImgAlt:'reactImg'},
    {skillName:'Vuejs',skillImg:vueLogo,skillImgAlt:'vuejsImg'},
    {skillName:'Nextjs',skillImg:nextjsLogo,skillImgAlt:'nextjsImg'},
    {skillName:'TailwindCss',skillImg:tailwindcssLogo,skillImgAlt:'tailwindcssImg'},
    {skillName:'Vuetify',skillImg:vuetifyLogo,skillImgAlt:'vuetifyImg'},
    {skillName:'TypeScript',skillImg:typescriptLogo,skillImgAlt:'typescriptImg'},
    {skillName:'Redux',skillImg:reduxLogo,skillImgAlt:'reduxImg'},
    {skillName:'aws-Amplify',skillImg:AmplifyLogo,skillImgAlt:'amplfyImg'},
    {skillName:'Rest Api',skillImg:restApiLogo,skillImgAlt:'restapiImg'},
    {skillName:'Mongo DB',skillImg:mongodbLogo,skillImgAlt:'mongodbImg'},
    {skillName:'Git',skillImg:gitLogo,skillImgAlt:'gitImg'},
    {skillName:'Github',skillImg:githubLogo,skillImgAlt:'githubImg'},
    {skillName:'Postman',skillImg:postmanLogo,skillImgAlt:'postmanImg'},
    {skillName:'Figma',skillImg:figmaLogo,skillImgAlt:'figmaImg'},

  ]
  return (
    <section id="Skills">
      <div className="skillsMaindiv">
        <div
          data-aos="fade-down"
          className="text-[28px] font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl "
        >
          Skills
        </div>

        <div className="skillslogodiv">
         {skills.map((item,index)=>{
          return <div data-aos="zoom-in-up" className="logodiv" key={index}>
            <p className="Logotag">{item.skillName}</p>
            <img className="logoimg" src={item.skillImg} alt={item.skillImgAlt} />
          </div>
         })}
          

          {/* <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">Css</p>
            <img className="logoimg" src={cssLogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">JavaScript</p>
            <img className="logoimg" src={jslogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">React</p>
            <img className="logoimg" src={reactLogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">TypeScript</p>
            <img className="logoimg" src={typescriptLogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">TailwindCss</p>
            <img className="logoimg" src={tailwindcssLogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">Nextjs</p>
            <img className="logoimg" src={nextjsLogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">Redux</p>
            <img className="logoimg" src={reduxLogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">Figma</p>
            <img className="logoimg" src={figmaLogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">Mongo DB</p>
            <img className="logoimg" src={mongodbLogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">Postman</p>
            <img className="logoimg" src={postmanLogo} alt="javascript" />
          </div>

          <div data-aos="zoom-in-up" className="logodiv">
            <p className="Logotag">Github</p>
            <img className="logoimg" src={githubLogo} alt="javascript" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
