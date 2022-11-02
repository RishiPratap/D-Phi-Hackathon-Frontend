import './projectinfo.css';
import {BsInfoCircle} from 'react-icons/bs';
import {AiFillSignal} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ProjectInfo(){
    return(
        <div className="project-info">
        <div className='project_header'>
        <div className='infotext1'>
                <span className='infos'><BsInfoCircle/> Starts on 17th Jun'22 09:00 PM (India Standard Time)</span>
            </div>
        <div className='hackathon'>
            <span className='hackathon_name'>Data Sprint 72 - Butterfly Identification</span>
        </div>
        <div className='infotext2'>
        <span className='hackathon_name1'>Identify the class to which each butterfly belongs to</span>
        </div>
        <button className='confirm'><AiFillSignal/> Easy</button>
        </div>
        <div className='projectedit'>
        <span className='nametext'>Overview</span>
        <div className='projectedit1-button'>
        <Link to="/projectedit"><button className='edits'>Edit</button></Link>
        <button className='deletes'>delete</button>
        </div>
        </div>
        <div className='contentbody'>
        <p className='textbody'>
        Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.

An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.

Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.
        </p>
        </div>
        </div>
    );
}

export default ProjectInfo;