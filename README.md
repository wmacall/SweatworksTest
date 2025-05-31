## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

Then, and every time you update your native dependencies, install the pods by running one of the following commands:

```sh
# Using npx
npx pod-install

# OR manually
cd ios && pod install
```

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Libraries Used

Below is a list of libraries used in this project along with their purpose:

1. **[@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)**: Used for persisting data locally on the device.
2. **[axios](https://www.npmjs.com/package/axios)**: Used for all the api calls
3. **[react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated)**: For the animation of the tab and the list inside of it
4. **[react-native-svg](https://www.npmjs.com/package/react-native-svg)**: Used for icons (I choose this option instead of using a icon library like phospor)
5. **[react-native-webview](https://www.npmjs.com/package/react-native-webview)**: Used to see the movie trailer
6. **[redux-persist](https://www.npmjs.com/package/redux-persist)**: Used to create all the config for persisting the data

## Questions

- **What does the single responsibility principle consist of? What's its purpose?**
  The single responsibility principle states that each module or class should have only one reason to change, meaning it should be responsible for a single task or responsibility. Its purpose is to avoid mixing multiple functionalities in one place, making the code easier to maintain, understand, and scale.

- **What characteristics, in your opinion, does “good” code or clean code have?**
  For me, clean code should be self-explanatory; it shouldn't be necessary to write comments everywhere, only where it's really needed. Variable names should be descriptive, and reusable components should be simple to understand and avoid duplication. Everything should be kept separated so that it's easier to test and understand the code logic.

- **Detail how you would do everything that you have not completed.**
  For testing, I would use React Native Testing Library together with Jest. I would probably add a wrapper in the utils to handle everything related to navigation, the Redux store, and any other necessary wrappers to avoid duplicating code.
  For the splash screen, I would use React Native Bootsplash.
  For environment management, I would use either dotenv or React Native Config, whichever is preferred.
