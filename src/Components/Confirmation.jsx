import React from "react";
import { Table } from "react-bootstrap";

const Confirmation = ({ formData }) => {
  return (
    <div className="mt-4">
      <h3 className="mb-4">Review Your Details</h3>
      <Table striped bordered hover responsive>
        <tbody>
          {/* Personal Information */}
          <tr>
            <td><strong>Name</strong></td>
            <td>{formData.name}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>{formData.email}</td>
          </tr>
          <tr>
            <td><strong>Phone</strong></td>
            <td>{formData.phone}</td>
          </tr>

          {/* Address Information */}
          <tr>
            <td><strong>Address Line 1</strong></td>
            <td>{formData.address1}</td>
          </tr>
          <tr>
            <td><strong>Address Line 2</strong></td>
            <td>{formData.address2}</td>
          </tr>
          <tr>
            <td><strong>City</strong></td>
            <td>{formData.city}</td>
          </tr>
          <tr>
            <td><strong>State</strong></td>
            <td>{formData.state}</td>
          </tr>
          <tr>
            <td><strong>Zip Code</strong></td>
            <td>{formData.zip}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Confirmation;


