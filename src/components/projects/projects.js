import './projects.css';
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card2 from '../../assets/cardimage/Group 1000002766.png';

function Projects(){
    return(
        <div className="projects">
            <Row md={3} className="g-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
        <Card style={{ width: '18rem',height:'27rem' }} key={idx}>
      <Card.Img variant="top" src={Card2} />
      <Card.Body>
      <div className='badgeName'>
      <Badge pill id="pill">
        <span className='textinfo'>Active</span>
      </Badge>
      </div>
        <Card.Title style={{ textAlign:'center' }}>Data Sprint 72 - Butterfly Identification</Card.Title>
        <Card.Text style={{ textAlign:'center' }}>
        <span>Starts in</span>
        </Card.Text>
        <div className='timer'>
        <div className='Hour'>
        <span className='timeH'>00</span>
        <span className='timeHour'>Days</span>
        </div>
        <div className='Min'>
        <span className='timeM'>05</span>
        <span className='timeMin'>Hour</span>
        </div>
        <div className='Sec'>
        <span className='timeS'>50</span>
        <span className='timeSec'>Min</span>
        </div>
        </div>
        <div className='button2'>
        <Link to="/projectinfo"><button className='play'><BsCheck2Circle className='iconCheck'/> Participate Now</button></Link>
        </div>
      </Card.Body>
    </Card>
        </Col>
      ))}
    </Row>
        </div>
    )
}

export default Projects