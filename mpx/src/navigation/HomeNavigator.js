import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Animated, Easing } from 'react-native';
import HomePage from '../pages/HomePage'
import DetailsScreen from '../pages/DetailsScreen'


const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
  },
  Details: {
    screen: DetailsScreen,
  },
},{
  initialRouteName: 'Home',
  headerLayoutPreset:"center",
  headerMode:"screen",
  navigationOptions: {
    gesturesEnabled: true,
    gestureDirection: "inverted"
  },
  defaultNavigationOptions: {
    headerStyle: {
      
    },
    headerTintColor: '#1b9fe2',
    headerTitleStyle: {
      fontSize:20
    },
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
});

export default HomeNavigator;