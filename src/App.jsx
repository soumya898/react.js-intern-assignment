import React, { useState, useEffect } from 'react';
import Basics_info from './Components/Basics_info';
import Address_info from './Components/Address_info';
import Confirmation from './Components/Confirmation';
import Navigation from './Components/Navigation';
import { validateStep1, validateStep2 } from './Utils/Validation';

const App = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Load data from local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) setFormData(savedData);
  }, []);

  // Save data to local storage on update
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => {
    let validationErrors = {};
    if (step === 1) {
      validationErrors = validateStep1(formData);
    } else if (step === 2) {
      validationErrors = validateStep2(formData);
    }

    if (Object.keys(validationErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const prevStep = () => setStep(step - 1);

  // Simulate form submission with error handling
  const submitForm = async () => {
    setLoading(true); // Start loading

    try {
      // Simulate a network request with a 2-second delay
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = Math.random() > 0.5; // Random success or failure
          if (isSuccess) {
            resolve('Form submitted successfully!');
          } else {
            reject(new Error('Failed to submit form. Please try again after 2 sec...'));
          }
        }, 2000);
      });

      // Success handling
      alert('Thank you for your submission! Your form has been submitted successfully.');
      
      // Reset form data and navigate to the first step
      setFormData({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      });
      setStep(1);

      // Refresh the page
      window.location.reload();

    } catch (error) {
      // Error handling
      alert(error.message);
      console.error('Submission error:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="container">
      {step === 1 && (
        <Basics_info formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {step === 2 && (
        <Address_info formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {step === 3 && (
        <Confirmation formData={formData} prevStep={prevStep} submitForm={submitForm} />
      )}

      {/* Navigation */}
      <Navigation
        step={step}
        totalSteps={totalSteps}
        nextStep={nextStep}
        prevStep={prevStep}
        submitForm={submitForm}
      />

      {/* Loading spinner during form submission */}
      {loading && <div className="mt-3 text-center">Submitting form...</div>}
    </div>
  );
};

export default App;
