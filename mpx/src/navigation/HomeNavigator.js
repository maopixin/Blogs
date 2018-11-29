import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
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
  mode:"card",
  navigationOptions: {
    gesturesEnabled: true,
  },
  defaultNavigationOptions: {
    headerStyle: {
      // backgroundColor: '#f4511e',
    },
    headerTintColor: '#1b9fe2',
    headerTitleStyle: {
      // fontWeight: 'bold',
    },
  },
});

export default HomeNavigator;