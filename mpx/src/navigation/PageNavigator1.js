import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Page1 from '../pages/Page1'



const PageNavigator1 = createStackNavigator({
  Page1: {
    screen: Page1,
  },
}, {
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

export default PageNavigator1;