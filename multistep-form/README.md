# Multi-Step Form in React

This project demonstrates the implementation of a multi-step form using React. The form collects user input across multiple pages, validates data, and displays a summary of the input at the end. The project is designed to practice core React concepts like state management, conditional rendering, and dynamic component composition.

---

## **Features**
- **Multi-Step Navigation:**
  - Navigate through form pages using "Next" and "Back" buttons.
- **Dynamic Form Rendering:**
  - Each page is rendered based on the current step.
- **Form Validation:**
  - Ensure all required fields are filled before proceeding to the next step.
- **Summary Page:**
  - Display a summary of all entered data after completing the form.

---

## **Technologies Used**
- **React:** For building the user interface.
- **JavaScript (ES6+):** For logic and interactions.
- **CSS (Optional):** To style the form (if applicable).

---

## **Key Components**
1. **`App.jsx`:**
   - The main component managing form data, navigation, and rendering logic.
   - Uses `useState` to track the current page and form input data.

2. **`FormPage.jsx`:**
   - A reusable component for rendering input fields dynamically based on the current page's configuration.

3. **`SummaryPage.jsx`:**
   - Displays a summary of all collected input data at the end.

---

## **What I Learned**
1. **React State Management:**
   - Managing form data and navigation using `useState`.
   - Updating state dynamically based on user input.

2. **Component Composition:**
   - Building reusable components (`FormPage`) to render dynamic inputs.
   - Passing props effectively to manage state and data flow.

3. **Conditional Rendering:**
   - Rendering components like the `SummaryPage` based on the current page state.

4. **Dynamic Input Handling:**
   - Using `map()` to iterate over field configurations and render input elements.
   - Dynamically updating state based on `id` values of input fields.

5. **Validation Logic:**
   - Implementing simple validation to ensure required fields are filled before navigation.

6. **React Rendering Flow:**
   - Understanding how React re-renders components based on state changes and how to leverage this for declarative UI.

---

## **Usage**
1. Clone the repository.
2. Install dependencies using `npm install` (if applicable).
3. Start the development server:
   ```bash
   npm start
   ```
4. Navigate through the multi-step form and explore its features.

---

## **Future Enhancements**
- Add styling for a more polished user interface.
- Introduce API integration for real form submission.
- Add more advanced validation logic (e.g., regex for email/phone validation).
- Implement a progress bar to indicate the user's current step.
