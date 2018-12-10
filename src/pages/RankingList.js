import React from 'react';
import { View, Text, FlatList,Platform, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation'
import SideBar from "../components/SideBar";
import HttpMusicManager from "../service";
const isAndroid = Platform.OS == "android"
export default class RankingList extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      tabBarVisible:true
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '排行榜',
      bgColor: '#C60D0D',
      rankingList: []
    }
  }

  componentWillMount() {
    this.HttpMusic  = new HttpMusicManager();
    this.getRankingList()
  }

  getRankingList = () => {
    this.HttpMusic.getMusicRankingList()
      .then(res => {
        this.setState({
          rankingList: res.list
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  singleImg = (img, title) => {
    const styles = singleImgStyles;

    return <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.imgContainer} />
      <Text style={styles.textContainer}>{title}</Text>
    </View>
  }

  singleList = (tracks) => {
    const musicTracks = tracks.map((music, i) => {
      return <Text key={i} numberOfLines={1}>
        {`${i+1}.${music.first} - ${music.second}`}
      </Text>
    })
    return <View style={singleListStyles.container}>
      {musicTracks}
    </View>
  }

  singleMusic = (item) => {
    const styles = singleMusicStyles;

    return <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('MusicList', {id: item.id})}>
      <View style={singleMusicStyles.container}>
        {this.singleImg(item.coverImgUrl, item.updateFrequency)}
        {this.singleList(item.tracks)}
      </View>
    </TouchableOpacity>
  }

  render () {
    const { title, bgColor, rankingList } = this.state;

    return (
      <SafeAreaView style={[styles.container,{backgroundColor:bgColor}]}>
        <SideBar
          backgroundColor={bgColor}
          title={title}
        />
        <FlatList
          data={rankingList}
          style={{backgroundColor:"#fff",flex:1}}
          renderItem={({item}) => this.singleMusic(item)}
          keyExtractor={(item, index) => item + index}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const singleMusicStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 5,
    flexDirection: 'row'
  }
})

const singleListStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 5
  }
})

const singleImgStyles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 120,
    height: 110
  },
  imgContainer: {
    width: 120,
    height: 110,
    borderRadius: 3
  },
  textContainer: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: '#fff',
    fontSize: 10
  }
})