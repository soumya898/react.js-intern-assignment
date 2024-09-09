import React from "react";
import { ProgressBar, Button } from "react-bootstrap";

const Navigation = ({ step, totalSteps, nextStep, prevStep, submitForm }) => {
  return (
    <div className="mt-4">
      {/* Progress Bar */}
      <ProgressBar now={(step / totalSteps) * 100} label={`Step ${step} of ${totalSteps}`} />

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-3">
        {/* Disable "Back" button on the first step */}
        <Button
          variant="secondary"
          onClick={prevStep}
          disabled={step === 1}
        >
          Back
        </Button>

        {/* Change button to "Submit" on the last step */}
        {step === totalSteps ? (
          <Button variant="success" onClick={submitForm}>
            Submit
          </Button>
        ) : (
          <Button variant="primary" onClick={nextStep}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
