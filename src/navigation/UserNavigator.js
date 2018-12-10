import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Animated, Easing } from 'react-native';
import Login from '../pages/Login'
import Register from '../pages/Register'


const UserNavigator = createStackNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
},{
  // 初始化页面
  initialRouteName: 'Login',
  navigationOptions: ({ navigation })=>{
    return {
      gesturesEnabled: true,
      gestureDirection: "inverted",
    }
  },
  defaultNavigationOptions: {
    
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 280,
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
      return { transform: [{ translateX }] };
    },
  }),
});

export default UserNavigator;