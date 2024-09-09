# Multi-Step Form Application

## Overview

This project is a multi-step form application built with React. It demonstrates form handling across multiple steps, including form validation, navigation, and submission. The form collects user information such as personal details and address information, validates the data, and simulates form submission with error handling.

## Project Structure

The project consists of several key components and utilities organized in a structured manner. Below is an overview of each file and its role in the application.

### Components

1. **`App.js`**

   - **Description**: The main component that manages the form state, handles navigation between steps, and simulates form submission.
   - **Link**: [App.js](./src/App.js)

2. **`Basics_info.js`**

   - **Description**: The component for the first step of the form, where users enter their basic information.
   - **Link**: [Basics_info.js](./src/Components/Basics_info.js)

3. **`Address_info.js`**

   - **Description**: The component for the second step of the form, where users enter their address details.
   - **Link**: [Address_info.js](./src/Components/Address_info.js)

4. **`Confirmation.js`**

   - **Description**: The component for the final step of the form, where users review their details before submission.
   - **Link**: [Confirmation.js](./src/Components/Confirmation.js)

5. **`Navigation.js`**

   - **Description**: The component that handles navigation controls, including the progress bar and step buttons.
   - **Link**: [Navigation.js](./src/Components/Navigation.js)

### Utilities

1. **`Validation.js`**

   - **Description**: Contains validation functions for form data. Validates the information entered in each step.
   - **Link**: [Validation.js](./src/Utils/Validation.js)

### Functionality

1. **Multi-Step Navigation**: Users navigate through different steps of the form (Basics, Address, Confirmation) using "Back" and "Next" buttons, and the progress is shown using a progress bar.

2. **Form Validation**: Each step has validation to ensure the data entered is correct before proceeding to the next step.

3. **Form Submission**: Upon form submission, the application simulates a network request. It provides feedback with a thank you message and refreshes the page while resetting the form to the initial state.

4. **Local Storage**: Form data is stored in local storage to preserve user input across page reloads.


## Bonus Points (Optional but implemented )

1. **Error Handling for Network Requests**: Implemented error handling for simulated API calls using `setTimeout`. This includes handling both success and failure scenarios during form submission.

2. **Enhanced UX with Animations**: Added smooth transitions and animations between form steps to improve the user experience.




### Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>



2.  **npm install**
      ```bash
      npm install

3. *** Start the Application ***
     ```bash
      npm run dev

4. *** Open in Browser ***
   
    Visit http://localhost:3000 to view the application.

    
### Summary

This `README.md` provides a comprehensive overview of the project, including the purpose of each component, the functionality of the application, and instructions for setup and use. It includes links to relevant files in the project structure and offers guidance on how to contribute or use the project.

      

