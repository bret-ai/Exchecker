import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './screens';

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme,
    border: 'transparent',
  },
};

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Stack = createStackNavigator();

const App = () => {
  const [hidden, setHidden] = React.useState(false);
  const [statusBarStyle, setStatusBarStyle] = React.useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = React.useState(
    TRANSITIONS[0]
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
