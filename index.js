/**
 * @format
 */

import { AppRegistry, View } from "react-native";
import React from "react-native";
// import App from "./App";
import { name as appName } from "./app.json";
import TestApp from "./TestApp";
import StorybookUIRoot from './storybook';


AppRegistry.registerComponent(appName, () => StorybookUIRoot);
