import './create_project.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProject(){
    return(
        <div className="add-project">
            <h1 className='heading'>Challenge Details</h1> 
            <div className='addForm'>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Challenge Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Challenge Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="date" placeholder="Enter date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>End Date</Form.Label>
        <Form.Control type="date" placeholder="Enter date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="Select" className="mb-3">
        <Form.Label>Level Type</Form.Label>
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Easy</option>
            <option value="2">Medium</option>  
            <option value="3">Hard</option>
        </Form.Select>
      </Form.Group>
      <Button className='save' type="submit">
        Submit
      </Button>
    </Form>
            </div>   
        </div>
    );
}

export default AddProject;