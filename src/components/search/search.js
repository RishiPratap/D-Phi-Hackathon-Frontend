import './search.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Chip from '@mui/material/Chip';
import { Form } from 'react-bootstrap';

function search(){
    return(
      <div className="searching">
        <div className="search">
        <input type="search" className='search_bar' placeholder="Search" />
        <div className='filter'>
            <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Form.Text className='mx-3 small_text1'>Status</Form.Text>
      <Form.Group className="mb-3 p-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="All" />
        <Form.Check type="checkbox" label="Incoming" />
        <Form.Check type="checkbox" label="Archieved" />
        <Form.Check type="checkbox" label="Finish" />
      </Form.Group>
        <Dropdown.Divider />
        <Form.Text className='mx-3 small_text1'>Level</Form.Text>
      <Form.Group className="mb-3 p-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Easy" />
        <Form.Check type="checkbox" label="Medium" />
        <Form.Check type="checkbox" label="Hard" />
      </Form.Group>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        </div>
        <div className='chips'>
        <Chip color="primary" label="Action" onDelete="default" />
        <Chip color="secondary" label="Action" onDelete="default" />
        <Chip color="success" label="Action" onDelete="default" />
        <Chip color="warning" label="Action" onDelete="default" />
        </div>
        </div>
    );
}

export default search;