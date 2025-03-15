# Login and Signup Modal Form

## Overview
This project implements a login and signup system using HTML, CSS, and JavaScript. The forms are displayed in modal dialogs, allowing users to sign in or register without navigating to a different page. The UI includes animated transitions and responsive design elements.

## Features
- **Login Form**: Users can enter their username/email and password to sign in.
- **Signup Form**: New users can create an account by entering a username, email, and password.
- **Modal Windows**: Forms are displayed in modals that can be toggled on and off.
- **CSS Styling**: Includes responsive design and animations.
- **JavaScript Functionality**:
  - Open and close modal dialogs.
  - Handle login and signup form transitions.
  - Console log user input (placeholder for backend integration).

## Technologies Used
- **HTML**: Structure of the forms and modal dialogs.
- **CSS**: Styling, animations, and responsive design.
- **JavaScript**: Handles user interactions, modal visibility, and form submissions.

## File Structure
```
project-folder/
│── index.html  (Main HTML file containing the login and signup modals)
│── index.css   (CSS file for styling the forms and modals)
│── index.js    (JavaScript file handling modal logic and form interactions)
│── README.md   (This documentation file)
```

## Installation & Setup
1. **Download or Clone the Repository**:
   ```sh
   git clone https://github.com/your-repo-name.git
   ```
2. **Open the `index.html` file in a web browser**:
   - Double-click `index.html` OR
   - Run a local server (e.g., using VS Code Live Server extension).

## How It Works
- **Signing In**:
  1. Click the **Sign In** button to open the login modal.
  2. Enter your username/email and password.
  3. Click **Login** to simulate authentication.

- **Signing Up**:
  1. Click **Sign Up** in the login modal to open the signup form.
  2. Enter a username, email, and password.
  3. Click **Sign Up** to submit the form.
  4. Optionally, click **Log In** to return to the login form.

## JavaScript Functions
- **login1()**: Opens the login modal and hides the signup form.
- **signUp()**: Opens the signup modal and hides the login form.
- **loginLogin()**: Logs user credentials to the console (placeholder for authentication logic).
- **main()**: Initializes the default state of the forms.

## Future Enhancements
- Add backend authentication (e.g., Firebase, Node.js, PHP, etc.).
- Store user data in a database.
- Implement password hashing for security.
- Improve UI with modern frameworks like React or Vue.js.

## Author
- **Foster Boadi**

## License
This project is open-source and available under the MIT License.


