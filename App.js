import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import RootTab from './src/navigation/RootTab'
import DetailsScreen from './src/pages/DetailsScreen'


const AppNavigator = createStackNavigator({
  Home: {
    screen: RootTab,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
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

export default createAppContainer(AppNavigator);