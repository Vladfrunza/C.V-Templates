import './portofolioList.css';
import Portofolio from '../portofolio/portofolio';
import { portofolio } from '../data';

const PortofolioList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'>Create & inspire. Portofolio</h1>
            </div>
            <div className='pl-list'>
                {portofolio.map((item) => (
                    <Portofolio key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
            <div className='pl-list-more'>
                <a href="https://github.com/Vladfrunza">
                    <button>...more</button>
                </a>
            </div>
        </div>
    )
}

export default PortofolioList;