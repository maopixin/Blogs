import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Animated, Easing } from 'react-native';
import RankingList from '../pages/RankingList'
import MusicList from '../pages/MusicList'
import MusicPlayer from "../pages/MusicPlayer";

const PageNavigator1 = createStackNavigator({
  RankingList: {
    screen: RankingList,
    navigationOptions:{
      tabBarVisible:true
    }
  },
  MusicList:{
    screen:MusicList
  },
  MusicPlayer
},{
  // 初始化页面
  initialRouteName: 'RankingList',
  headerLayoutPreset:"center",
  headerMode:"float",
  headerTransitionPreset:"uikit",
  navigationOptions: ({ navigation })=>{
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible,
      gesturesEnabled: true,
      gestureDirection: "inverted"
    }
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

      // const opacity = position.interpolate({
      //   inputRange: [index - 1, index - 0.99, index],
      //   outputRange: [0, 1, 1],
      // });

      return { transform: [{ translateX }] };
    },
  }),
});

export default PageNavigator1;