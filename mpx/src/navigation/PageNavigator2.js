import {  createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Page2 from '../pages/Page2'



const PageNavigator2 = createStackNavigator({
  Page2: {
    screen: Page2,
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

export default PageNavigator2;