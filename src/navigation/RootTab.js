import { createBottomTabNavigator } from 'react-navigation';
import React from 'react'
import {Text} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import HomePage from './HomeNavigator'
import Page1 from './PageNavigator1'
import My from './PageNavigator2'

const TabNavigator = createBottomTabNavigator({
    Home:{
        screen:HomePage,
    },
    Page1:{
        screen:Page1,
    },
    My:{
        screen:My,
    },
},{
    initialRouteName:"Home",
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = "home";
            } else if (routeName === 'Page1') {
              iconName = `customerservice`;
            } else if (routeName === 'My') {
                iconName = `user`;
            }
            return <AntIcon name={iconName} size={24} color={tintColor}/>;
        },
        tabBarLabel: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let tabName;
            if (routeName === 'Home') {
                tabName = "首页";
            } else if (routeName === 'Page1') {
                tabName = `音乐`;
            } else if (routeName === 'My') {
                tabName = `我的`;
            }
            return <Text style={{color:tintColor,textAlign:"center"}}>{tabName}</Text>;
        },
        tabBarOptions: {
            activeTintColor: '#1b9fe2',
            inactiveTintColor: 'gray',
        },
    })
})

export default TabNavigator