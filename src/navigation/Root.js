import { createStackNavigator ,createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import RootTab from './RootTab';
import UserNavigator from './UserNavigator'
const RootStack = createStackNavigator(
    {
      RootTab: {
        screen: RootTab,
      },
      LoginPage: {
        screen: UserNavigator,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
);

export default createAppContainer(RootStack)