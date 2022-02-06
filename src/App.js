import './App.css';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import PortofolioList from './components/portofolioList/portofolioList';
import Contact from './components/contact/contact';

function App() {
    return ( 
        <div className="">
            <Intro />
            <Skills />
            <Experience />
            <PortofolioList />
            <Contact />
        </div>
    );
}

export default App;