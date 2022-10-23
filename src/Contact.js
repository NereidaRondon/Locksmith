import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Contact() {
  return (
    <div className="contact-div">
      <Form name="contact" method="POST" data-netlify="true">
        <h2 className="text-center">Contact Us</h2>

        {/* FIRST AND LAST */}
        <div className="row g-4 mt-2 me-3 ms-3 mb-2 gap-2">
          <div className="col-sm p-0">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="first name"
              aria-label="First name"
            />
          </div>
          <div className="col-sm p-0">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="last name"
              aria-label="Last name"
            />
          </div>
        </div>

        {/* email */}
        <Form.Group className="mt-2 me-3 ms-3 mb-2" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        {/* Address */}

        <Form.Group className="mt-2 me-3 ms-3 mb-2" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="1234 Main St" />
        </Form.Group>

        {/* Address 2 */}
        <Form.Group className="mt-2 me-3 ms-3 mb-2" controlId="address2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control type="text" placeholder="apartment, studio, or floor" />
        </Form.Group>

        <div className="row g-2 mt-2 me-3 ms-3 mb-3 gap-2">
          {/* CITY */}
          <Form.Group className="col-sm-7 p-0" controlId="inputCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" aria-label="City" />
          </Form.Group>

          {/* STATE */}
          <Form.Group className="col-sm p-0" controlId="inputState">
            <Form.Label>State</Form.Label>
            <Form.Select className="form-select" aria-label="select state menu">
              <option>Select</option>
              <option value="FL">FL</option>
            </Form.Select>
          </Form.Group>

          {/* ZIPCODE */}
          <Form.Group className="col-sm p-0" controlId="form">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" aria-label="Zip" />
          </Form.Group>
        </div>

        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mt-4 me-3 ms-3 mb-4"
        >
          <Form.Control as="textarea" style={{ height: '100px' }} />
        </FloatingLabel>
        <Button className="mt-2 me-3 ms-3 mb-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
