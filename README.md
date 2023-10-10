# React Native Firebase Places App

This is a React Native application that uses Firebase as the backend, Axios for API calls, and Firebase Auth for login and signup. 

The app allows users to view a list of favorite places with their locations, add new places, and mark them on Google Maps. User data is securely stored using SQLite on the device.

![App Demo](demo.gif)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screens](#screens)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Firebase Authentication for login and signup.
- Navigation between login, signup, and the main app.
- List of favorite places with locations.
- Integration with Google Maps for selecting and marking locations.
- Secure storage of user data using SQLite.
- Logout functionality.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/react-native-firebase-places-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-native-firebase-places-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a Firebase project and configure it in your app. Replace the Firebase configuration in `src/config/firebase.js` with your own Firebase project configuration.

5. Set up Google Maps integration by following the instructions in the [React Native Maps documentation](https://github.com/react-native-maps/react-native-maps).

6. Ensure that you have a working React Native development environment set up. If not, you can follow the [official React Native documentation](https://reactnative.dev/docs/environment-setup).

7. Run the app on your preferred platform (iOS or Android):

   - iOS:

     ```bash
     npx react-native run-ios
     ```

   - Android:

     ```bash
     npx react-native run-android
     ```

## Usage

1. Upon launching the app, you will be directed to the login page.
2. You can either log in with your existing account or navigate to the signup page to create a new account.
3. After logging in, you will be taken to the main app, where you can view your list of favorite places.
4. Use the bottom navigation to switch between pages.
5. To add a new place, navigate to the "Add Place" page, where you can provide a title, image, and either the current location or pick a location on the map.
6. Mark the place on the map and save it by clicking the save button.
7. The newly added place will appear in the list of favorite places on the main app screen.
8. You can log out by clicking the "Logout" button in the profile section.

## Screens

The app consists of the following screens:

- **Login**: Allows users to log in to their account.
- **Signup**: Allows new users to create an account.
- **Main App**: Displays the list of favorite places.
- **Add Place**: Allows users to add a new place with a title, image, and location.
- **Map**: Integration with Google Maps for selecting and marking locations.

## Dependencies

The following major dependencies are used in this project:

- React Native
- Firebase
- Axios
- React Navigation
- React Native Maps
- SQLite

You can find a complete list of dependencies in the `package.json` file.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Create a pull request, explaining the changes you made and why.


Happy coding! 😊