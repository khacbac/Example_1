# Example_1
=> Run app
+ npm install
+ cd ios
+ pod install
+ cd ..

=> Storybook
+ open index.js
+ set: 
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TestApp from './TestApp'
import StorybookUIRoot from "./storybook/StorybookUIRoot";

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
// AppRegistry.registerComponent(appName, () => TestApp);

+ run Android cmd: react-native run-android
+ run Ios: open TestDetox.xcworkspace and run

=> Detox (only Ios - Iphone X simulator)
+ open index.js
+ set: 
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TestApp from './TestApp'
import StorybookUIRoot from "./storybook/StorybookUIRoot";

// AppRegistry.registerComponent(appName, () => StorybookUIRoot);
AppRegistry.registerComponent(appName, () => TestApp);

+ open terminal on root project
+ detox build
+ detox test
