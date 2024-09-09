export const validateStep1 = (formData) => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email format is invalid';
    }
    if (!formData.phone) errors.phone = 'Phone number is required';
    return errors;
  };
  
  export const validateStep2 = (formData) => {
    let errors = {};
    if (!formData.address1) errors.address1 = 'Address Line 1 is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.zip) errors.zip = 'Zip Code is required';
    return errors;
  };
  