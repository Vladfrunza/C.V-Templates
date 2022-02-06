import './intro.css';
import Me from '../../img/profile.jpg';
import {FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';


function Intro() {
    return ( 
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Vlad Frunza</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Junior react developer</div>
              <div className="i-title-item">Manual software tester</div>
            </div>
          </div>
          <p className="i-desc">
          Working with a team of Web Developer. Responsible for Manual testing, QA, Bug/Error Reports and Test Cases.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <div className="i-right-flex">
          <div className="i-img-rounded">
              <img src={Me} alt="" className="i-img" />
          </div>
            <p className="i-contact-me">Contact me at:</p>     
          <div className='i-contact'>
              <div className='i-e-mail'>
                <p className='i-contact-primary'>E-mail:</p>
                  <p className='i-contact-secondary'>
                    <a href="mailto:vlafrunza@yahoo.com">
                        vlafrunza@yahoo.com
                    </a>
                  </p>
              </div>
              <div className='i-phone'>
                  <p className='i-contact-primary'>Phone</p>
                  <p className='i-contact-secondary'>0747550443</p>
              </div>                 
          </div>
          <div className='i-icon'>
            <div className=''>
              <a href="https://www.facebook.com/vladfrunza22/">
                <FaFacebookF />
              </a>
            </div>
            <div className=''>
              <a href="https://www.linkedin.com/in/vlad-frunza-476620191/">
                <FaLinkedin />
              </a>
            </div>
            <div className=''>
              <a href="https://github.com/Vladfrunza">
                <FaGithub />
              </a>
            </div>
          </div>      
          </div>
          </div>
      </div>
    </div>
  );
}

export default Intro;