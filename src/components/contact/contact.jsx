import './contact.css';
import { FaPhoneAlt, FaMailBulk, FaLinkedin} from 'react-icons/fa';

const Contact = () => {
    return(
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1>Let's discuss</h1>
                <div className="c-info">
                <div className="c-info-item">
                <FaPhoneAlt />
                  <span>0747550443</span>
                </div>
                <div className="c-info-item">
                <FaMailBulk />
                    <span>vlafrunza@yahoo.com</span>
                </div>
                <div className="c-info-item">
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/vlad-frunza-476620191/">
                <span>Linkedin</span>
                </a>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;