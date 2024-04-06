Author: Tarun M Date: 04/02/2024

## GymGit Test

This document provides an overview of the Cypress tests for the GymGit application.

### Prerequisites

Before running the tests, ensure that the GymGit application is running locally at `http://localhost:5173`.

### Running the Tests

To run the tests, execute the following command:

```bash
npm run cypress:open
```

This command will open the Cypress Test Runner, where you can select and run the tests.

### Test Descriptions

#### 1. Home Page

- **should load the app**: Checks if the GymGit application is loaded properly.
- **should have a link to Home**: Verifies the presence of a link to the Home page in the navigation bar.
- **should have a Fork Button**: Ensures the existence of a "Fork" button.

#### 2. Fork Page

- **Onclick of Fork Button, should redirect to ForkPage**: Tests if clicking the "Fork" button redirects to the ForkPage.
- **should have a view schedule Button**: Verifies the presence of a "View Schedule" button.
- **should have days navbar**: Checks if the days navbar exists.
- **Navbar should have days**: Ensures that the navbar contains days of the week.

#### 3. Schedule Page

- **Onclick of View Schedule Button, should open Schedule offcanvas**: Tests if clicking the "View Schedule" button opens the Schedule offcanvas.

#### 4. Save Schedule

- **should have a Save Button**: Verifies the presence of a "Save" button.
- **should have a Save As New Schedule Button**: Ensures the existence of a "Save As New Schedule" button.
- **should save the schedule**: Tests the functionality to save the schedule and verifies the success alert.

#### 5. Return to Home Page

- **should return to Home Page**: Checks if clicking the GymGit logo returns to the Home page.

### Troubleshooting

If any of the tests fail, ensure that the GymGit application is running and accessible at `http://localhost:5173`. Additionally, check for any errors or inconsistencies in the application code that might affect test execution.

### Video Tutorial

- [Video](https://youtu.be/vyijdYO2UYk)