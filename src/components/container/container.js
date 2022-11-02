import './container.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Banner from '../../assets/icons/PicsArt_04-14-04.42 1.svg';
import Icon1 from '../../assets/icons/uil_calender.svg';
import Robots from '../../assets/icons/Robot.svg';
import Search from '../search/search';
import Projects from '../projects/projects';

function container(){
    return(
        <div className="Hero">
        <div className="container">
            <div className="container__left">
            <p className='Big_text'>Accelerate Innovation with Global AI Challenges</p>
            <p className='small_text'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
            <Link to="/project"><button className='button'>Create Challenge</button></Link>
            </div>
            <div className='container__right'>
            <img src={Banner} alt="image_banner"/>
            </div>
        </div>
        <div className='Box_Info'>
        <div className='icon_1'>
        <img src={Icon1} className="cal" alt="icon_1"/>
        </div>
        <div className='icon_1'>
        <img src={Robots} className="cal" alt="icon_1"/>
        </div>
        <div className='icon_1'>
        <img src={Icon1} className="cal" alt="icon_1"/>
        </div>
        </div>
        <div className='Header_text'><span>Why Participate in</span> <span className='ai'>AI Challenges?</span></div>
        <div className='Add_info'>
            <div className='cards'>
                <img src={Icon1} className="cal1" alt="icon_1"/>
                <p className='card_text'>Learn from the best</p>
                <p className='card_text_small'>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
            </div>
            <div className='cards'>
            <img src={Icon1} className="cal1" alt="icon_1"/>
                <p className='card_text'>Learn from the best</p>
                <p className='card_text_small'>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
            </div>
            <div className='cards'>
            <img src={Icon1} className="cal1" alt="icon_1"/>
                <p className='card_text'>Learn from the best</p>
                <p className='card_text_small'>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
            </div>
            <div className='cards'>
            <img src={Icon1} className="cal1" alt="icon_1"/>
                <p className='card_text'>Learn from the best</p>
                <p className='card_text_small'>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
            </div>
        </div>
        <div className='Header_text'><span>Explore Challenges</span></div>
        <div className='Search_bar'>
            <Search />
        </div>
        <div className='Projects_list'>
            <Projects />
        </div>
        </div>
    )
}

export default container;