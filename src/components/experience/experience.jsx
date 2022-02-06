import './experience.css';
import {FaReact,FaNodeJs,FaBootstrap,FaHtml5,FaCss3Alt,FaSass,FaJira,FaWordpress,FaPhp} from 'react-icons/fa';

function Experience(){
    return(
        <div className='e'>
            <div className='e-left'>
            <div className='left'>
                <div className='eperience'>
                    <p>Experience</p>
                        <ul>
                            <li><span>Digi-texx Romania</span> - Data Entry Specialist</li>
                            <li><span>Gfk Romania</span> - Data Entry Senior </li>
                            <li><span>Concord Service Center Romania</span> - Tester Smartphone</li>
                            <li><span>Stanleybet Romania</span> - Betting operator</li>
                        </ul>
                </div>
                <div className='education'>
                    <p>Education</p>
                        <ul>
                            <li><span>eJobs</span> - Manual software tester</li>
                            <li><span>EnerEd IT Academy</span> - Junior web developer</li>
                            <li><span>F.E.G, Iasi</span> - Balneofiziokinetotherapy and recovery nurse</li>
                        </ul>
                </div>
                <div className='languages'>
                    <p>Languages</p>
                        <ul>
                            <li><span>English</span></li>
                            <li><span>French</span></li>
                        </ul>
                </div>
            </div>
            </div>
            <div className='e-right'>
                <div className='e-icon'>
                    <div class="icon-secondary">                       
                        <FaReact />                        
                        <FaNodeJs />                   
                        <FaBootstrap />
                    </div>
                   <div className='icon-secondary'>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <FaSass />
                    </div>
                    <div className='icon-secondary'>
                        <FaPhp />
                        <FaWordpress />
                        <FaJira />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;