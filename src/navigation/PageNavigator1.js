import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import RankingList from '../pages/RankingList'
import MusicList from '../pages/MusicList'


const PageNavigator1 = createStackNavigator({
  Page1: {
    screen: RankingList,
  },
  MusicList:{
    screen:MusicList
  }
});

export default PageNavigator1;