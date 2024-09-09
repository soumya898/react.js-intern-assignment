import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Address_info = ({ formData, setFormData, nextStep, prevStep, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form className="mt-4">
      <Row>
        <Col md={6}>
          <Form.Group controlId="formAddress1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              isInvalid={!!errors.address1}
              placeholder="Enter your address"
            />
            <Form.Control.Feedback type="invalid">
              {errors.address1}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formAddress2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              placeholder="Enter additional address info"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={4}>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
              placeholder="Enter your city"
            />
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              isInvalid={!!errors.state}
              placeholder="Enter your state"
            />
            <Form.Control.Feedback type="invalid">
              {errors.state}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formZip">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              isInvalid={!!errors.zip}
              placeholder="Enter your zip code"
            />
            <Form.Control.Feedback type="invalid">
              {errors.zip}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* <div className="d-flex justify-content-between mt-4">
        <Button variant="secondary" onClick={prevStep}>
          Back
        </Button>
        <Button variant="primary" onClick={nextStep}>
          Next
        </Button>
      </div> */}
    </Form>
  );
};

export default Address_info;
