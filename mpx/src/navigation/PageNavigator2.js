import {  createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import MyIndex from '../pages/MyIndex'



const My = createStackNavigator({
  My: {
    screen: MyIndex,
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

export default My;