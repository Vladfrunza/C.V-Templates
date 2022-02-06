import './skills.css';
import Ab from '../../img/react.jpg';

const Skills = () => {
    return (
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src={Ab}
              alt=""
              className="ab-img"
            />
          </div>
        </div>
        <div className='a-right'>
            <div className='a-skills'>
            <p>Skills</p>
                <ul>
                  <li>knowledge of React JS platform and core principle</li>
                  <li>Knowledge of Wordpress platform</li>
                  <li>knowledge of Bootstrap framework</li>
                  <li>Command over HTML, CSS, SASS, JavaScript, MySQL, PhP languages</li>
                  <li>User interface design and development</li>
                </ul>
              </div> 
        </div>
      </div>
    )
}

export default Skills;

