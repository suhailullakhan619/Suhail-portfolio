import './Education.css'
import 'aos/dist/aos.css'
import sapthagiriLogo from '../../assets/Sapthagiri Logo.jpeg'
import StellaLogo from '../../assets/stellaLogo.png'
const Education = () => {
  return (
    <section>
    <div className='EductionMainDiv'>
              <div data-aos="fade-down" className='text-[28px] font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl '>Education
                
              </div>
              <div className='degreeDiv'>
                    {/* logo */}
                      <div  data-aos="fade-right" className='sapthagirilogodiv'>
                      <img className='sapthagirilogo' src={sapthagiriLogo} alt="logo" />
                      </div>
                      {/* college details */}
                       
                        <div data-aos="zoom-in" className='aboutclg'>
                        <p className='text-[20px] font-extrabold max-w-[260px] sm:max-w-full'>Sapthagiri College of Engineering</p>
                        <p className='text-[17px] font-semibold max-w-[260px] sm:max-w-full'>B.E. in Electronics and Communication Engineering</p>
                        <div className='text-[17px] font-semibold'>CGPA - 8.25</div>
                        <div className='text-[17px] font-semibold'>2021 - 2025</div>
                        <div className='aboutbtndiv'>
                          <a href="https://www.sapthagiri.edu.in/" target="_blank" rel="noopener noreferrer">
                          <button className='aboutbtn'>Visit Website</button>
                          </a>
                        </div>
                        </div>
                        
                        
                       
                </div>


                <div className='degreeDiv'>
                    {/* logo */}
                      <div  data-aos="fade-right" className='sapthagirilogodiv'>
                      <img className='sapthagirilogo' src={StellaLogo} alt="logo" />
                      </div>
                      {/* college details */}
                       
                        <div data-aos="zoom-in" className='aboutclg'>
                        <p className='text-[20px] font-extrabold max-w-[260px] sm:max-w-full'>Stella Maris P U College </p>
                           
                        <div className='text-[17px] font-semibold  '>Percentage - 82%</div>
                        <div className='text-[17px] font-semibold'>2019 - 2021</div>
                        <p className='text-[20px] font-extrabold max-w-[260px] sm:max-w-full'>Stella Maris High School</p>
                           
                        <div className='text-[17px] font-semibold '>Percentage - 77.12%</div>
                        <div className='text-[17px] font-semibold'>2018 - 2019</div>
                        <div className='aboutbtndiv'>
                          <a href="https://www.stellaeducationalacademy.in/" target="_blank" rel="noopener noreferrer">
                          <button className='aboutbtn'>Visit Website</button>
                          </a>
                        </div>
                        </div>
                        
                        
                       
                </div>

    </div>
</section>
  )
}

export default Education